import * as Abilities from "../abilities";
import * as Equipment from "../equipment";
import { EquipmentOption } from "../equipment";
import { ProficiencyOption } from "../proficiencies";
import { Reference } from "../reference";
import { Archetype } from "./archetype";
import { ClassFeature } from "./class-feature";

export class Class {
    name: string;
    reference: Reference;
    castingAbility?: string;
    hitDie: number;
    features?: ClassFeature[]; // TODO: Make mandatory
    primaryAbility: string;
    savingThrows: string[];
    equipment: EquipmentOption[];
    skillProficiencies: ProficiencyOption<Abilities.Skill>[];
    armorProficiencies: ProficiencyOption<Equipment.ArmorType>[];
    weaponProficiencies: ProficiencyOption<Equipment.Weapon>[];
    toolProficiencies: ProficiencyOption<Equipment.Item>[];
    otherProficiencies: ProficiencyOption<Equipment.Weapon>[];
    archetypeName: { singular: string, plural: string };
    archetypes?: Archetype[];
    constructor(initial: Class) { Object.assign(this, initial); }
};
