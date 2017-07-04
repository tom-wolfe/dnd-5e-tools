import * as Abilities from "../abilities";
import { Character } from "../characters";
import { Condition } from "../condition";
import * as Equipment from "../equipment";
import { ProficiencyOption } from "../proficiencies/proficiency-option";
import { Reference } from "../reference";
import { FeatureType } from "./feature-type";
import { UsageFrequency } from "./usage-frequency";

export class Feature {
    name: string;
    skillProficiencies?: ProficiencyOption<Abilities.Skill>[];
    damageResistances?: Equipment.DamageType[];
    damageImmunities?: Equipment.DamageType[];
    conditionImmunities?: Condition[];
    type: FeatureType;
    usage?: UsageFrequency;
    armorProficiencies?: ProficiencyOption<Equipment.ArmorType>[];
    weaponProficiencies?: ProficiencyOption<Equipment.Weapon>[];
    toolProficiencies?: ProficiencyOption<Equipment.Item>[];
    otherProficiencies?: ProficiencyOption<Equipment.Weapon>[];
    apply?: (character: Character) => void;
    reference: Reference;
};
