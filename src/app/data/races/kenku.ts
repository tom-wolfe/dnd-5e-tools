import { Languages, Skills } from "app/data";
import { FeatureType } from "app/models/features/feature-type";
import * as RaceModels from "app/models/races";

import * as Names from "../names";
import { RaceList } from "./race-list";

export const Kenku: RaceModels.Race = new RaceModels.Race({
    name: "Kenku",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 12, max: 60 },
    height: { base: 54, modifier: 12 },
    weight: { base: 90, modifier: 3 },
    nameDefinition: Names.Kenku,
    languages: { known: [Languages.Common, Languages.Primordial] },
    abilityMods: { "DEX": +2, "WIS": +1 },
    features: [
        {
            name: "Export Forgery", type: FeatureType.Passive,
            reference: { source: "VGM", page: 111 },
        }, {
            name: "Kenku Training", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: [Skills.Acrobatics, Skills.Deception, Skills.Stealth, Skills.SleightOfHand], count: 2 }],
            reference: { source: "VGM", page: 111 },
        }, {
            name: "Mimicry", type: FeatureType.Passive,
            reference: { source: "VGM", page: 111 },
        }
    ],
    reference: { source: "VGM", page: 110 },
    subraces: []
});

RaceList.push(Kenku);

