import { Character } from "../characters";

import { FeatureType } from "./feature-type";
import { UsageFrequency } from "./usage-frequency";

export class Feature {
    name: string;
    description: string;
    usage?: UsageFrequency;
    type: FeatureType;
    apply?: (character: Character) => void;
};
