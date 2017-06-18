import { Character } from "../characters";
import { Skill } from "../abilities";
import { ProficiencyType } from "../abilities/proficiency-type";
import { FeatureType } from "./feature-type";
import { UsageFrequency } from "./usage-frequency";

export class Feature {
    name: string;
    description: string;
    usage?: UsageFrequency;
    type: FeatureType;
    skillProficiencies?: Skill[];
    proficiencyCount?: number;
    proficiencyType?: ProficiencyType;
    apply?: (character: Character) => void;
};
