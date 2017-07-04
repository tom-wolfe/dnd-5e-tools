import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Firbolg: RaceModels.Race = new RaceModels.Race({
    name: "Firbolg",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 30, max: 500 },
    height: { base: 84, modifier: 12 },
    weight: { base: 240, modifier: 5 },
    nameDefinition: Names.Firbolg,
    languages: { known: [Languages.Common, Languages.Elvish, Languages.Giant] },
    abilityMods: { "STR": +1, "WIS": +2 },
    features: [
        {
            name: "Firbolg Magic", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            reference: { source: "VGM", page: 107 },
        }, {
            name: "Hidden Step", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            reference: { source: "VGM", page: 107 },
        },
        CommonFeatures.powerfulBuild,
        {
            name: "Speech of Beast and Leaf", type: FeatureType.Passive,
            reference: { source: "VGM", page: 107 },
        }
    ],
    reference: { source: "VGM", page: 106 },
    subraces: []
});

RaceList.push(Firbolg);
