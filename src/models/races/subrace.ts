import { Reference } from "../reference";

import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";
import * as Languages from "../languages";

export class Subrace {
    name: string;
    speed?: Attributes.Speed;
    senses?: Attributes.Senses;
    languages?: Languages.KnownLanguages;
    statMods?: Abilities.StatMods;
    features?: Features.Feature[];
    reference?: Reference;
};
