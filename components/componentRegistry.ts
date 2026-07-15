import { AtticCopy, CrtCopy, FridgeCopy, LandingCopy, StairsCopy } from "./StageCopy";

export const componentRegistry = {
  stairs: StairsCopy,
  landing: LandingCopy,
  attic: AtticCopy,
  fridge: FridgeCopy,
  crt: CrtCopy,
} as const;
