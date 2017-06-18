import { Character } from "../characters";
import { Skill } from "../abilities";
import { FeatureType } from "./feature-type";
import { UsageFrequency } from "./usage-frequency";

export class Feature {
    name: string;
    description: string;
    usage?: UsageFrequency;
    type: FeatureType;
    skillProficiencies?: Skill[];
    skillProficiencyCount?: number;
    apply?: (character: Character) => void;
};
