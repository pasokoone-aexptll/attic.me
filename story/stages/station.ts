import type { StageDefinition } from "./Stage";

export const station = {
  id: "station",
  componentKey: "station",
  sceneKey: "station",
  sceneLayers: [{ key: "crt", zIndex: 10 }],
} satisfies Omit<StageDefinition, "length">;
