export type Input = {
  progress: number;
  click?: boolean;
  route?: string;
  localProgress?: number;
  stageIndex?: number;
};

export type SceneLayerDefinition = {
  key: string;
  zIndex: number;
};

export type StageDefinition = {
  id: string;
  componentKey: string;
  sceneKey: string;
  sceneLayers: SceneLayerDefinition[];
  length: number;
};

export type StoryScript = {
  stages: StageDefinition[];
};

export type ResolvedStage = {
  stage: StageDefinition;
  stageIndex: number;
  localProgress: number;
  globalProgress: number;
};
