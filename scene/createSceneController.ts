import type { Input } from "@/story/types";
import type { SceneController } from "./types";

type BackgroundOptions = {
  fillStyle: string;
  accentStyle: string;
  label: string;
  mood: "stairs" | "landing" | "attic" | "fridge";
};

export function createBackgroundSceneController(
  options: BackgroundOptions,
): SceneController {
  return {
    draw(ctx: CanvasRenderingContext2D, input: Input) {
      const frameIndex = Math.floor((input.localProgress ?? input.progress) * 180);
      const { width, height } = ctx.canvas;

      const localProgress = input.localProgress ?? input.progress;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, options.fillStyle);
      gradient.addColorStop(1, "#050507");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      const depth = Math.min(width, height) * (0.14 + localProgress * 0.13);
      ctx.strokeStyle = "rgba(255,255,255,.13)";
      ctx.lineWidth = Math.max(1, width / 1200);
      for (let index = 1; index < 10; index += 1) {
        const size = depth * index;
        ctx.strokeRect(-size * 1.6, -size, size * 3.2, size * 2);
      }

      ctx.fillStyle = options.accentStyle;
      ctx.shadowColor = options.accentStyle;
      ctx.shadowBlur = 32;
      const bob = Math.sin(frameIndex / 16) * height * 0.012;
      if (options.mood === "stairs") {
        ctx.fillRect(-width * .035, -height * .42 + bob, width * .07, height * .84);
        ctx.fillRect(-width * .23, height * .19, width * .46, height * .035);
      } else if (options.mood === "landing") {
        ctx.beginPath(); ctx.arc(0, -height * .08 + bob, depth * .7, 0, Math.PI * 2); ctx.fill();
      } else if (options.mood === "attic") {
        ctx.fillRect(-width * .16, -height * .21 + bob, width * .32, height * .42);
        ctx.fillStyle = "#08070a";
        ctx.fillRect(-width * .1, -height * .12 + bob, width * .2, height * .18);
      } else {
        ctx.fillRect(-width * .14, -height * .38 + bob, width * .28, height * .76);
        ctx.fillStyle = "rgba(235,255,247,.72)";
        ctx.fillRect(-width * .1, -height * .3 + bob, width * .2, height * .55);
      }
      ctx.restore();

      ctx.fillStyle = "rgba(255,255,255,.48)";
      ctx.font = "10px ui-monospace, monospace";
      ctx.fillText(`FRAME ${String(frameIndex).padStart(3, "0")} / ${options.label.toUpperCase()}`, 28, height - 28);
    },

    dispose() {
      // Placeholder scenes keep no external resources. Image sequence scenes
      // release their decoded frames here.
    },
  };
}

export function createCrtSceneController(): SceneController {
  return {
    draw(ctx: CanvasRenderingContext2D) {
      const { width, height } = ctx.canvas;

      ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
      for (let y = 0; y < height; y += 4) {
        ctx.fillRect(0, y, width, 1);
      }
    },

    dispose() {
      // no-op overlay controller
    },
  };
}
