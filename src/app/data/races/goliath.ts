import { Languages, Skills } from "app/data";
import { FeatureType, TimeUnit } from "app/models/features";
import * as RaceModels from "app/models/races";

import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Goliath: RaceModels.Race = new RaceModels.Race({
    name: "Goliath",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 18, max: 90 },
    height: { base: 84, modifier: 12 },
    weight: { base: 280, modifier: 5 },
    nameDefinition: Names.Goliath,
    languages: { known: [Languages.Common, Languages.Giant] },
    abilityMods: { "STR": +2, "CON": +1 },
    features: [
        {
            name: "Natural Athlete", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: [Skills.Athletics] }],
            reference: { source: "VGM", page: 109, url: "https://www.dndbeyond.com/characters/races/goliath#NaturalAthlete" }
        }, {
            name: "Stone's Endurance", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            reference: { source: "VGM", page: 109, url: "https://www.dndbeyond.com/characters/races/goliath#StonesEndurance" }
        },
        CommonFeatures.powerfulBuild,
        {
            name: "Mountain Born", type: FeatureType.Passive,
            reference: { source: "VGM", page: 109, url: "https://www.dndbeyond.com/characters/races/goliath#MountainBorn" }
        }
    ],
    reference: { source: "VGM", page: 108, url: "https://www.dndbeyond.com/characters/races/goliath" },
    subraces: []
});

RaceList.push(Goliath);
