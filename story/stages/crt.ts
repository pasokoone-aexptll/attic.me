import type { StageDefinition } from "./Stage";

export const crt = {
  id: "crt",
  componentKey: "crt",
  sceneKey: "crt",
  sceneLayers: [],
} satisfies Omit<StageDefinition, "length">;
