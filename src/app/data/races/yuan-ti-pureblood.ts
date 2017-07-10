import { Languages } from "../../data/languages";
import { Condition } from "../../models/condition";
import { DamageType } from "../../models/equipment";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const YuanTiPureblood: RaceModels.Race = new RaceModels.Race({
    name: "Yuan-ti Pureblood",
    size: "Medium",
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 80 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.YuanTi,
    languages: { known: [Languages.Common, Languages.Abyssal, Languages.Draconic] },
    abilityMods: { "CHA": +2, "INT": +1 },
    speed: { walk: 30 },
    features: [
        {
            name: "Innate Spellcasting", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            reference: { source: "VGM", page: 120 },
        }, {
            name: "Magic Resistance", type: FeatureType.Passive,
            reference: { source: "VGM", page: 120 },
        }, {
            name: "Poison Immunity", type: FeatureType.Passive,
            damageImmunities: [DamageType.Poison],
            conditionImmunities: [Condition.Poisoned],
            reference: { source: "VGM", page: 120 },
        }
    ],
    reference: { source: "VGM", page: 120 },
    subraces: []
});

RaceList.push(YuanTiPureblood);
