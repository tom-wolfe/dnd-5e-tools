import * as Abilities from "../abilities";
import { Feature } from "../features";
import { KnownLanguages } from "../languages";
import { Reference } from "../reference";

export class Background {
    name: string;
    reference: Reference;
    languages: KnownLanguages;
    skillProficiencies?: Abilities.Skill[];
    proficiencyCount?: number;
    proficiencyType?: Abilities.ProficiencyType;
    features?: Feature[];
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
};
