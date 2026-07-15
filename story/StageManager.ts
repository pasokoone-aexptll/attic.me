// story/StageManager.ts
import { resolveStage } from "./resolveStage";
import type { ResolvedStage, StoryScript } from "./types";

export type StoryEntry = StoryScript["stages"][number];

export class StageManager {
  constructor(private readonly story: StoryScript) {}

  resolve(progress: number): ResolvedStage {
    return resolveStage(this.story, { progress });
  }
}

export { resolveStage };
