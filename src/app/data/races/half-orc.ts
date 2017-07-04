import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const HalfOrc: RaceModels.Race = new RaceModels.Race({
    name: "Half-orc",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 14, max: 75 },
    height: { base: 58, modifier: 20 },
    weight: { base: 140, modifier: 12 },
    abilityMods: { "STR": +2, "CON": +1 },
    nameDefinition: Names.HalfOrc,
    languages: { known: [Languages.Common, Languages.Orc] },
    features: [
        CommonFeatures.menacing,
        {
            name: "Relentless Endurance", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.LongRest },
            reference: { source: "PHB", page: 41, url: "https://www.dndbeyond.com/characters/races/half-orc#RelentlessEndurance" }
        }, {
            name: "Savage Attacks", type: FeatureType.Passive,
            reference: { source: "PHB", page: 41, url: "https://www.dndbeyond.com/characters/races/half-orc#SavageAttacks" }
        }
    ],
    reference: { source: "PHB", page: 40, url: "https://www.dndbeyond.com/characters/races/half-orc" },
    subraces: []
});

RaceList.push(HalfOrc);
