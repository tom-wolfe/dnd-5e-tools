import * as Abilities from "../abilities";
import { Character } from "../characters";
import * as Equipment from "../equipment";
import { ProficiencyOption } from "../proficiency-option";
import { FeatureType } from "./feature-type";
import { UsageFrequency } from "./usage-frequency";

export class Feature {
    description: string;
    name: string;
    skillProficiencies?: ProficiencyOption<Abilities.Skill>[];
    damageResistances?: Equipment.DamageType[];
    type: FeatureType;
    usage?: UsageFrequency;
    weaponProficiencies?: Equipment.Weapon[];
    martialWeaponProficiencies?: number;

    apply?: (character: Character) => void;
};
