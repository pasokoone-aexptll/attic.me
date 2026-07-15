import type { Input } from "@/story/types";

export type SceneController = {
  draw(ctx: CanvasRenderingContext2D, input: Input): void;
  dispose(): void;
};

export type SceneFactory = (ctx: CanvasRenderingContext2D) => SceneController;

export type SceneRegistry = Record<string, SceneFactory>;
