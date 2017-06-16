import { Subrace } from "./subrace";

import { Reference } from "../reference";

import * as Attributes from "../attributes";
import * as Abilities from "../abilities";

export class Race {
    name: string;
    size: Attributes.Size;
    speed: Attributes.Speed;
    statMods: Abilities.StatMods;
    reference: Reference;
    subraces: Subrace[];
};
