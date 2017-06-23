import * as Abilities from "../abilities";
import { Character } from "../characters";
import { FeatureType } from "./feature-type";
import { UsageFrequency } from "./usage-frequency";

export class Feature {
    name: string;
    description: string;
    usage?: UsageFrequency;
    type: FeatureType;
    skillProficiencies?: Abilities.Skill[];
    proficiencyCount?: number;
    proficiencyType?: Abilities.ProficiencyType;
    apply?: (character: Character) => void;
};
