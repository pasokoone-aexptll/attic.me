import type { StageDefinition } from "./Stage";

export const blueWorld = {
  id: "blueWorld",
  componentKey: "landing",
  sceneKey: "blueWorld",
  sceneLayers: [{ key: "crt", zIndex: 10 }],
} satisfies Omit<StageDefinition, "length">;
