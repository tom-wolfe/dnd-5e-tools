import { Languages, Skills } from "app/data";
import { FeatureType } from "app/models/features";
import * as RaceModels from "app/models/races";

import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Bugbear: RaceModels.Race = new RaceModels.Race({
    name: "Bugbear",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    nameDefinition: Names.Goblin,
    age: { maturity: 16, max: 80 },
    height: { base: 72, modifier: 24 },
    weight: { base: 250, modifier: 4 },
    languages: { known: [Languages.Common, Languages.Goblin] },
    abilityMods: { "STR": +2, "DEX": +1 },
    features: [
        {
            name: "Long-Limbed", type: FeatureType.Passive,
            reference: { source: "VGM", page: 119 },
        },
        CommonFeatures.powerfulBuild,
        {
            name: "Sneaky", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: [Skills.Stealth] }],
            reference: { source: "VGM", page: 119 },
        }, {
            name: "Surprise Attack", type: FeatureType.Passive,
            reference: { source: "VGM", page: 119 },
        }
    ],
    reference: { source: "VGM", page: 119 },
    subraces: []
});

RaceList.push(Bugbear);
