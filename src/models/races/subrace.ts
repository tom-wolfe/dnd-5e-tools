import { Reference } from "../reference";
import { Height } from "./height";
import { NameDefinition } from "./name-definition";
import { Weight } from "./weight";

import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";
import * as Languages from "../languages";


export class Subrace {
    name: string;
    nameDefinition?: NameDefinition;
    speed?: Attributes.Speed;
    senses?: Attributes.Senses;
    languages?: Languages.KnownLanguages;
    height?: Height;
    weight?: Height;
    abilityMods?: Abilities.AbilityMods;
    features?: Features.Feature[];
    reference: Reference;
};
