import * as Abilities from "../abilities";
import * as Equipment from "../equipment";
import { Feature } from "../features";
import { KnownLanguages } from "../languages";
import { ProficiencyOption } from "../proficiency-option";
import { Reference } from "../reference";

export class Background {
    name: string;
    reference: Reference;
    languages: KnownLanguages;
    toolProficiencies?: ProficiencyOption<Equipment.Item>[];
    skillProficiencies: ProficiencyOption<Abilities.Skill>[];
    features?: Feature[];
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
};
