import type { Input } from "@/story/types";
import type { SceneController } from "./types";

type BackgroundOptions = {
  fillStyle: string;
  label: string;
};

export function createImageSequenceSceneController(
  basePath: string,
  frameCount: number,
): SceneController {
  const frames: HTMLImageElement[] = [];

  for (let frame = 1; frame <= frameCount; frame++) {
    const image = new Image();
    image.src = `${basePath}/${String(frame).padStart(4, "0")}.webp`;
    frames.push(image);
  }

  let previousFrame: number | null = null;
  let lastCanvasWidth: number | null = null;
  let lastCanvasHeight: number | null = null;

  return {
    draw(ctx: CanvasRenderingContext2D, input: Input) {
      const progress = input.localProgress ?? input.progress;

      const frameIndex = Math.min(
        frameCount,
        Math.max(1, Math.ceil(progress * frameCount)),
      );

      console.log("frameIndex", frameIndex);

      const { width, height } = ctx.canvas;

      // canvas のサイズが変わったら、previousFrame をリセットして再描画
      const canvasSizeChanged = lastCanvasWidth !== width || lastCanvasHeight !== height;
      if (canvasSizeChanged) {
        previousFrame = null;
        lastCanvasWidth = width;
        lastCanvasHeight = height;
      }

      // same frameなら描画しない
      if (frameIndex !== previousFrame) {
        previousFrame = frameIndex;
      }

      const image = frames[frameIndex - 1];
      if (!image.complete || image.naturalWidth === 0) {
        // 画像がロード中の場合、キャンバスをクリアして次のフレームで再試行
        ctx.clearRect(0, 0, width, height);
        return;
      }

      previousFrame = frameIndex;

      // アスペクト比を固定して、画面いっぱいに表示（余分な部分は外に出す）
      const imgAspect = image.naturalWidth / image.naturalHeight;
      const canvasAspect = width / height;

      let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

      if (canvasAspect > imgAspect) {
        // キャンバスが横長 → 幅に合わせる（上下は外に出す）
        drawWidth = width;
        drawHeight = width / imgAspect;
        drawX = 0;
        drawY = (height - drawHeight) / 2;
      } else {
        // キャンバスが縦長 → 高さに合わせる（左右は外に出す）
        drawHeight = height;
        drawWidth = height * imgAspect;
        drawX = (width - drawWidth) / 2;
        drawY = 0;
      }

      ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        drawX,
        drawY,
        drawWidth,
        drawHeight,
      );
    },

    dispose() {
      previousFrame = null;
      lastCanvasWidth = null;
      lastCanvasHeight = null;
    },
  };
}

export function createBackgroundSceneController(
  options: BackgroundOptions,
): SceneController {
  return {
    draw(ctx: CanvasRenderingContext2D) {
      console.log("draw background", options.label);
      const { width, height } = ctx.canvas;

      ctx.fillStyle = options.fillStyle;
      ctx.fillRect(0, 0, width, height);
    },

    dispose() {},
  };
}

export function createCrtSceneController(): SceneController {
  const crtImage = new Image();
  crtImage.src = "/CRT.svg";
  let imageLoaded = false;

  crtImage.onload = () => {
    imageLoaded = true;
  };

  return {
    draw(ctx: CanvasRenderingContext2D) {
      const { width, height } = ctx.canvas;

      if (imageLoaded) {
        ctx.drawImage(
          crtImage,
          0,
          0,
          crtImage.naturalWidth,
          crtImage.naturalHeight,
          0,
          0,
          width,
          height,
        );
      }

      ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
      for (let y = 0; y < height; y += 40) {
        ctx.fillRect(0, y, width, 1);
      }
      for (let x = 0; x < width; x += 40) {
        ctx.fillRect(x, 0, 1, height);
      }
    },

    dispose() {
      // no-op overlay controller
    },
  };
}


export function createCharacterSceneController(): SceneController {
  return {
    draw(ctx: CanvasRenderingContext2D) {
      const { width, height } = ctx.canvas;

      ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
      for (let y = 0; y < height; y += 4) {
        ctx.fillRect(0, y, width, 1);
      }
      //ここにCRTの枠を描画する
    },

    dispose() {
      // no-op overlay controller
    },
  };
}
