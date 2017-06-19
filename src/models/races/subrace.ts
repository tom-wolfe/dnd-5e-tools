import { Reference } from "../reference";

import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";
import * as Languages from "../languages";
import { Height } from "./height";
import { Weight } from "./weight";

export class Subrace {
    name: string;
    speed?: Attributes.Speed;
    senses?: Attributes.Senses;
    languages?: Languages.KnownLanguages;
    height?: Height;
    weight?: Height;
    abilityMods?: Abilities.AbilityMods;
    features?: Features.Feature[];
    reference: Reference;
};
