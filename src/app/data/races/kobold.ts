import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Kobold: RaceModels.Race = new RaceModels.Race({
    name: "Kobold",
    size: "Small",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 6, max: 120 },
    height: { base: 31, modifier: 8 },
    weight: { base: 35, modifier: 1 },
    nameDefinition: Names.Kobold,
    languages: { known: [Languages.Common, Languages.Draconic] },
    abilityMods: { "DEX": +2, "STR": -2 },
    features: [
        {
            name: "Pack Tactics", type: FeatureType.Passive,
            reference: { source: "VGM", page: 119 }
        }, {
            name: "Grovel, Cower, and Beg", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            reference: { source: "VGM", page: 119 },
        },
        CommonFeatures.sunlightSensitivity
    ],
    reference: { source: "VGM", page: 119 },
    subraces: []
});

RaceList.push(Kobold);
