import * as Abilities from "../abilities";
import * as Equipment from "../equipment";
import { Character } from "../characters";
import { FeatureType } from "./feature-type";
import { UsageFrequency } from "./usage-frequency";

export class Feature {
    description: string;
    name: string;
    proficiencyCount?: number;
    proficiencyType?: Abilities.ProficiencyType;
    skillProficiencies?: Abilities.Skill[];
    type: FeatureType;
    usage?: UsageFrequency;
    weaponProficiencies?: Equipment.Weapon[];

    apply?: (character: Character) => void;
};
