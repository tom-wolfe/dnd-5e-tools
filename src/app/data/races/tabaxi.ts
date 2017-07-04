import { Languages, Skills } from "app/data";
import { FeatureType } from "app/models/features";
import * as RaceModels from "app/models/races";

import * as Names from "../names";
import { RaceList } from "./race-list";

export const Tabaxi: RaceModels.Race = new RaceModels.Race({
    name: "Tabaxi",
    size: "Medium",
    speed: { walk: 30, climb: 20 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 80 },
    height: { base: 62, modifier: 24 },
    weight: { base: 100, modifier: 8 },
    nameDefinition: Names.Tabaxi,
    languages: { known: [Languages.Common], other: 1 },
    abilityMods: { "DEX": +2, "CHA": +1 },
    features: [
        {
            name: "Feline Agility", type: FeatureType.Active,
            reference: { source: "VGM", page: 115 },
        }, {
            name: "Cat's Claws", type: FeatureType.Active,
            reference: { source: "VGM", page: 115 },
        }, {
            name: "Cat's Talent", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: [Skills.Perception, Skills.Stealth] }],
            reference: { source: "VGM", page: 115 },
        }
    ],
    reference: { source: "VGM", page: 113 },
    subraces: []
});

RaceList.push(Tabaxi);
