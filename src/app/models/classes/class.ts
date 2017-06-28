import * as Abilities from "../abilities";
import * as Equipment from "../equipment";
import { EquipmentOption } from "../equipment";
import { ProficiencyOption } from "../proficiencies";
import { Reference } from "../reference";
import { Archetype } from "./archetype";

export class Class {
    name: string;
    reference: Reference;
    hitDie: number;
    primaryStat: string;
    savingThrows: string[];
    equipment?: EquipmentOption[]; // TODO: Make non-optional.
    skillProficiencies: ProficiencyOption<Abilities.Skill>[];
    armorProficiencies: ProficiencyOption<Equipment.ArmorType>[];
    weaponProficiencies: ProficiencyOption<Equipment.Weapon>[];
    toolProficiencies: ProficiencyOption<Equipment.Item>[];
    otherProficiencies: ProficiencyOption<Equipment.Weapon>[];
    archetypeName: { singular: string, plural: string };
    archetypes?: Archetype[];
    constructor(initial: Class) { Object.assign(this, initial); }
};
