import { Subrace } from "./subrace";

import { Reference } from "../reference";

import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";

export class Race {
    name: string;
    size: Attributes.Size;
    speed: Attributes.Speed;
    senses?: Attributes.Senses;
    statMods?: Abilities.StatMods;
    features?: Features.Feature[];
    reference?: Reference;
    subraces?: Subrace[];
};
