import * as Abilities from "../abilities";
import * as Equipment from "../equipment";
import { Feature } from "../features";
import { KnownLanguages } from "../languages";
import { ProficiencyOption } from "../proficiencies/proficiency-option";
import { Reference } from "../reference";

export class Background {
    name: string;
    reference: Reference;
    languages: KnownLanguages;
    skillProficiencies: ProficiencyOption<Abilities.Skill>[];
    toolProficiencies?: ProficiencyOption<Equipment.Item>[];
    otherProficiencies?: ProficiencyOption<Equipment.Item>[];
    features?: Feature[];
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
};
