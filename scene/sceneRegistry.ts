import { createImageSequenceSceneController, createBackgroundSceneController, createCrtSceneController } from "./createSceneController";
import type { SceneRegistry } from "./types";

export const sceneRegistry = {
  stairs: () => createImageSequenceSceneController("/frames/stairs", 180),
  blueCharacter: () => createImageSequenceSceneController("/frames/blue", 50),
  fridgeCharacter: () => createImageSequenceSceneController("/frames/fridge", 142),
  metro: () => createImageSequenceSceneController("/frames/metro", 141),
  station: () => createImageSequenceSceneController("/frames/station", 112),
  kotatsu: () => createImageSequenceSceneController("/frames/kotatsu", 178),
  footer: () => createImageSequenceSceneController("/frames/footer", 35),
  crt: () => createCrtSceneController(),
  blueSurface: () => createBackgroundSceneController({
    fillStyle: "#0F4BFF",
    label: "blueSurface",
  }),
  fridgeSurface: () => createBackgroundSceneController({
    fillStyle: "#0F4BFF",
    label: "blueSurface",
  }),
} satisfies SceneRegistry;
