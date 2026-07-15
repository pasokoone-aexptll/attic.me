import type { SceneRegistry, SceneController } from "@/scene/types";
import type { Input, ResolvedStage } from "@/story/types";

export class Engine {
  private currentResolvedStage: ResolvedStage | null = null;
  private currentSceneControllers: SceneController[] = [];
  private currentInput: Input = { progress: 0 };
  private lastFrameSignature: string | null = null;
  private disposed = false;

  private readonly ctx: CanvasRenderingContext2D;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly sceneRegistry: SceneRegistry,
  ) {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("2d context not available");
    }

    this.ctx = ctx;
  }

  setResolvedStage(resolvedStage: ResolvedStage) {
    if (this.disposed) {
      return;
    }

    const stageChanged = this.currentResolvedStage?.stage.id !== resolvedStage.stage.id;
    this.currentResolvedStage = resolvedStage;

    if (!stageChanged) {
      return;
    }

    this.disposeControllers();
    this.lastFrameSignature = null;

    const orderedLayers = [...resolvedStage.stage.sceneLayers].sort((a, b) => a.zIndex - b.zIndex);
    const controllerKeys = [resolvedStage.stage.sceneKey, ...orderedLayers.map((layer) => layer.key)];

    this.currentSceneControllers = controllerKeys.map((key) => {
      const factory = this.sceneRegistry[key];

      if (!factory) {
        throw new Error(`Unknown scene key: ${key}`);
      }

      return factory(this.ctx);
    });
  }

  updateInput(input: Input) {
    if (this.disposed) {
      return;
    }

    this.currentInput = input;
  }

  renderFrame() {
    if (this.disposed || !this.currentResolvedStage) {
      return;
    }

    const drawInput: Input = {
      ...this.currentInput,
      localProgress: this.currentResolvedStage.localProgress,
      stageIndex: this.currentResolvedStage.stageIndex,
    };

    // Image sequences are quantized to frames. Keeping the existing bitmap is
    // both cheaper and necessary: clearing before a controller skips an
    // unchanged frame would leave the canvas empty.
    const frameIndex = Math.floor((drawInput.localProgress ?? drawInput.progress) * 180);
    const frameSignature = `${this.currentResolvedStage.stage.id}:${frameIndex}`;
    if (frameSignature === this.lastFrameSignature) {
      return;
    }

    this.lastFrameSignature = frameSignature;
    this.clearCanvas();

    for (const controller of this.currentSceneControllers) {
      controller.draw(this.ctx, drawInput);
    }
  }

  dispose() {
    if (this.disposed) {
      return;
    }

    this.disposeControllers();
    this.disposed = true;
  }

  getResolvedStage() {
    return this.currentResolvedStage;
  }

  getComponentKey() {
    return this.currentResolvedStage?.stage.componentKey ?? null;
  }

  resize(width: number, height: number, pixelRatio: number) {
    const nextWidth = Math.max(1, Math.round(width * pixelRatio));
    const nextHeight = Math.max(1, Math.round(height * pixelRatio));

    if (this.canvas.width === nextWidth && this.canvas.height === nextHeight) {
      return;
    }

    this.canvas.width = nextWidth;
    this.canvas.height = nextHeight;
    this.lastFrameSignature = null;
  }

  private disposeControllers() {
    for (const controller of this.currentSceneControllers) {
      controller.dispose();
    }

    this.currentSceneControllers = [];
  }

  private clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
