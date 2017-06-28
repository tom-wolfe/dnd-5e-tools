import * as Abilities from "../abilities";
import * as Equipment from "../equipment";
import { EquipmentOption } from "../equipment/equipment-option";
import { Money } from "../equipment/money";
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
    equipment: EquipmentOption[];
    money: Money;
    features?: Feature[];
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
    constructor(initial: Background) { Object.assign(this, initial); }
};
