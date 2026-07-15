import type { StageDefinition } from "./Stage";

export const stairs = {
  id: "stairs",
  componentKey: "stairs",
  sceneKey: "stairs",
  sceneLayers: [{ key: "crt", zIndex: 10 }],
} satisfies Omit<StageDefinition, "length">;
