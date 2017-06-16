import { Reference } from "../reference";

import * as Abilities from "../abilities";
import * as Features from "../features";

export class Subrace {
    name: string;
    statMods?: Abilities.StatMods;
    features?: Features.Feature[];
    reference?: Reference;
};
