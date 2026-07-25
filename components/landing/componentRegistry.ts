import { StairsCopy } from "./copy/StairsCopy";
import { BlueCopy } from "./copy/BlueCopy";
import { FridgeCopy } from "./copy/FridgeCopy";
import { MetroCopy } from "./copy/MetroCopy";
import { StationCopy } from "./copy/StationCopy";
import { KotatsuCopy } from "./copy/KotatsuCopy";

export const componentRegistry = {
  stairs: StairsCopy,
  blue: BlueCopy,
  fridge: FridgeCopy,
  station: StationCopy,
  metro: MetroCopy,
  kotatsu: KotatsuCopy,
} as const;
