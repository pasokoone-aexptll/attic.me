import { createImageSequenceSceneController, createBackgroundSceneController, createCrtSceneController } from "./createSceneController";
import type { SceneRegistry } from "./types";

export const sceneRegistry = {
  stairs: () => createImageSequenceSceneController("/frames/stairs", 180),
  blueWorld: () =>
    createBackgroundSceneController({
      fillStyle: "#0d1b2a",
      accentStyle: "#7db0ff",
      label: "blueWorld",
      mood: "landing",
    }),
  attic: () =>
    createBackgroundSceneController({
      fillStyle: "#1b1714",
      accentStyle: "#c78f5e",
      label: "attic",
      mood: "attic",
    }),
  fridge: () =>
    createBackgroundSceneController({
      fillStyle: "#0f1f1a",
      accentStyle: "#77d6b2",
      label: "fridge",
      mood: "fridge",
    }),
  crt: () => createCrtSceneController(),
} satisfies SceneRegistry;
