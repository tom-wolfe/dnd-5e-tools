import { Reference } from "../reference";

import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";

export class Subrace {
    name: string;
    speed?: Attributes.Speed;
    senses?: Attributes.Senses;
    statMods?: Abilities.StatMods;
    features?: Features.Feature[];
    reference?: Reference;
};
