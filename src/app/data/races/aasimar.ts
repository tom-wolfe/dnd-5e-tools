import { DamageType } from "app/models/equipment";

import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Aasimar: RaceModels.Race = new RaceModels.Race({
    name: "Aasimar",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 160 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.Aasimar,
    languages: { known: [Languages.Common, Languages.Celestial] },
    abilityMods: { "CHA": +2 },
    features: [
        {
            name: "Celestial Resistance", type: FeatureType.Passive,
            damageResistances: [DamageType.Necrotic, DamageType.Radiant],
            reference: { source: "VGM", page: 105 },
        }, {
            name: "Healing Hands", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.LongRest },
            reference: { source: "VGM", page: 105 },
        }, {
            name: "Light Bearer", type: FeatureType.Active,
            // TODO: Add light cantrip (CHA).
            reference: { source: "VGM", page: 105 },
        }
    ],
    reference: { source: "VGM", page: 104 },
    subraces: [
        {
            name: "Protector", abilityMods: { "WIS": +1 },
            features: [
                {
                    name: "Radiant Soul", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "VGM", page: 105 },
                },
            ],
            reference: { source: "VGM", page: 105 }
        }, {
            name: "Scourge", abilityMods: { "CON": +1 },
            features: [
                {
                    name: "Radiant Consumption", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "VGM", page: 105 },
                },
            ],
            reference: { source: "VGM", page: 105 }
        }, {
            name: "Fallen", abilityMods: { "STR": +1 },
            features: [
                {
                    name: "Necrotic Shroud", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "VGM", page: 105 },
                },
            ],
            reference: { source: "VGM", page: 105 }
        }
    ]
});

RaceList.push(Aasimar);
