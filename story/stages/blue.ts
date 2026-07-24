import type { StageDefinition } from "./Stage";

export const blue = {
  id: "blue",
  componentKey: "blue",
  sceneKey: "blueSurface",
  sceneLayers: [{ key: "blueCharacter", zIndex: 10 }, { key: "crt", zIndex: 20 }],
} satisfies Omit<StageDefinition, "length">;
