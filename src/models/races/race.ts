import { Age } from "./age";
import { Height } from "./height";
import { NameDefinition } from "./name-definition";
import { Reference } from "../reference";
import { Subrace } from "./subrace";
import { Weight } from "./weight";

import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";
import * as Languages from "../languages";

export class Race {
    name: string;
    size: Attributes.Size;
    speed: Attributes.Speed;
    age: Age;
    senses?: Attributes.Senses;
    abilityMods?: Abilities.AbilityMods;
    languages: Languages.KnownLanguages;
    nameDefinition?: NameDefinition;
    height: Height;
    weight: Height;
    features: Features.Feature[];
    reference: Reference;
    subraces: Subrace[];
};
