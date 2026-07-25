import { StairsCopy, BlueCopy, FridgeCopy, MetroCopy, StationCopy, KotatsuCopy } from "./StageComponents";

export const componentRegistry = {
  stairs: StairsCopy,
  blue: BlueCopy,
  fridge: FridgeCopy,
  station: StationCopy,
  metro: MetroCopy,
  kotatsu: KotatsuCopy,
} as const;
