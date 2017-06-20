import { KnownLanguages } from "../languages";
import { Reference } from "../reference";

import * as Abilities from "../abilities";

export class Background {
    name: string;
    reference: Reference;
    languages: KnownLanguages;
    skillProficiencies?: Abilities.Skill[];
    proficiencyCount?: number;
    proficiencyType?: Abilities.ProficiencyType;
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
};
