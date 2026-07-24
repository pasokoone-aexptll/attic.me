

import { stage, storyFactory } from "./storyFactory";

import { stairs } from "./stages/stairs";
import { blue } from "./stages/blue";
import { fridge } from "./stages/fridge";
import { metro } from "./stages/metro";
import { station } from "./stages/station";
import { kotatsu } from "./stages/kotatsu";

export default storyFactory(
  stage(stairs, { length: 5 }),
  stage(blue, { length: 4 }),
  stage(fridge, { length: 4 }),
  stage(metro, { length: 6}),
  stage(station, { length: 4 }),
  stage(kotatsu, { length: 4 }),
);