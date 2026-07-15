これは最小参照実装です。AI が壊れた時の復帰地点にします。

# Story Engine Reference

## Fixed Runtime Contract

```ts
type Input = {
  progress: number;
  localProgress?: number;
  stageIndex?: number;
};

type StageDefinition = {
  id: string;
  componentKey: string;
  sceneKey: string;
  sceneLayers: Array<{ key: string; zIndex: number }>;
  length: number;
};

type StoryScript = {
  stages: StageDefinition[];
};

type ResolvedStage = {
  stage: StageDefinition;
  stageIndex: number;
  localProgress: number;
  globalProgress: number;
};

type SceneController = {
  draw(ctx: CanvasRenderingContext2D, input: Input): void;
  dispose(): void;
};

type SceneFactory = (ctx: CanvasRenderingContext2D) => SceneController;
```

## Story

```ts
export const story = storyFactory(
  stage(stairs, { length: 3 }),
  stage(blueWorld, { length: 2 }),
);
```

## Resolver

```ts
export function resolveStage(story: StoryScript, input: Input): ResolvedStage {
  // progress と length から current stage を返す
}
```

## Engine

```ts
class Engine {
  setResolvedStage(stage: ResolvedStage): void;
  updateInput(input: Input): void;
  renderFrame(): void;
  dispose(): void;
}
```

## Hook

```ts
function useEngine(story: StoryScript, canvasRef: RefObject<HTMLCanvasElement | null>) {
  const progress = useProgress();
  const resolvedStage = useMemo(() => resolveStage(story, { progress }), [story, progress]);

  useEffect(() => {
    engine.setResolvedStage(resolvedStage);
  }, [resolvedStage]);

  useEffect(() => {
    engine.updateInput({ progress });
    engine.renderFrame();
  }, [progress]);
}
```

# 最小参照実装の骨子

これは「これだけ動けば正しい」という最小形です。  
これをベースに上へ積むのが安全です。

### `story/types.ts`

```ts
export type StageDefinition = {
  id: string;
  componentKey: string;
  sceneKey: string;
  sceneLayers: Array<{ key: string; zIndex: number }>;
  length: number;
};
```

### `story/storyFactory.ts`

```ts
export function stage(stageDefinition: Omit<StageDefinition, "length">, options: { length: number }): StageDefinition {
  return { ...stageDefinition, length: options.length };
}

export function storyFactory(...stages: StageDefinition[]): StoryScript {
  return { stages };
}
```

### `story/resolveStage.ts`

```ts
export function resolveStage(story: StoryScript, input: Input): ResolvedStage {
  const totalLength = story.stages.reduce((sum, stage) => sum + stage.length, 0);
  const target = input.progress * totalLength;

  let cursor = 0;

  for (let stageIndex = 0; stageIndex < story.stages.length; stageIndex += 1) {
    const stage = story.stages[stageIndex];
    const next = cursor + stage.length;
    if (target <= next) {
      return {
        stage,
        stageIndex,
        localProgress: stage.length === 0 ? 0 : (target - cursor) / stage.length,
        globalProgress: input.progress,
      };
    }
    cursor = next;
  }

  const stage = story.stages[story.stages.length - 1];
  return { stage, stageIndex: story.stages.length - 1, localProgress: 1, globalProgress: input.progress };
}
```

### `scene/types.ts`

```ts
type SceneController = {
  draw(ctx: CanvasRenderingContext2D, input: Input): void;
  dispose(): void;
};

type SceneFactory = (ctx: CanvasRenderingContext2D) => SceneController;
```

### `engine/Engine.ts`

```ts
class Engine {
  setResolvedStage(stage: ResolvedStage): void;
  updateInput(input: Input): void;
  renderFrame(): void;
  dispose(): void;
}
```

### `hooks/useEngine.ts`

```ts
function useEngine(story: StoryScript, canvasRef: RefObject<HTMLCanvasElement | null>) {
  const progress = useProgress();
  const resolvedStage = useMemo(() => resolveStage(story, { progress }), [story, progress]);

  useEffect(() => {
    engine.setResolvedStage(resolvedStage);
  }, [resolvedStage]);

  useEffect(() => {
    engine.updateInput({ progress });
    engine.renderFrame();
  }, [progress]);
}
```
