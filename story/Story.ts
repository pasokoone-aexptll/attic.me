

import { stage, storyFactory } from "./storyFactory";
import { attic } from "./stages/attic";
import { blueWorld } from "./stages/blueWorld";
import { crt } from "./stages/crt";
import { fridge } from "./stages/fridge";
import { stairs } from "./stages/stairs";

export default storyFactory(
  stage(blueWorld, { length: 2 }),
  stage(stairs, { length: 3 }),
  stage(attic, { length: 6 }),
  stage(fridge, { length: 2 }),
  stage(crt, { length: 4 }),
);
