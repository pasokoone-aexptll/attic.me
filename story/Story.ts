

import { stage, storyFactory } from "./storyFactory";
import { attic } from "./stages/attic";
import { blueWorld } from "./stages/blueWorld";
import { crt } from "./stages/crt";
import { fridge } from "./stages/fridge";
import { stairs } from "./stages/stairs";

export default storyFactory(
  stage(stairs, { length: 3 }),
  stage(blueWorld, { length: 2 }),
  stage(attic, { length: 2 }),
  stage(fridge, { length: 2 }),
  stage(crt, { length: 3 }),
);