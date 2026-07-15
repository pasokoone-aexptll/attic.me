

import { stage, storyFactory } from "./storyFactory";
import { attic } from "./stages/attic";
import { blueWorld } from "./stages/blueWorld";
import { crt } from "./stages/crt";
import { fridge } from "./stages/fridge";
import { stairs } from "./stages/Stairs";

export default storyFactory(
  stage(stairs, { length: 3 }),
  stage(blueWorld, { length: 2 }),
  stage(attic, { length: 6 }),
  stage(fridge, { length: 1 }),
  stage(crt, { length: 4 }),
);
