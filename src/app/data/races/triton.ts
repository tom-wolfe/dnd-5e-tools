import { Languages } from "../../data/languages";
import { DamageType } from "../../models/equipment/damage-type";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Triton: RaceModels.Race = new RaceModels.Race({
    name: "Triton",
    size: "Medium",
    speed: { walk: 30, swim: 30 },
    age: { maturity: 15, max: 200 },
    height: { base: 50, modifier: 20 },
    weight: { base: 120, modifier: 8 },
    nameDefinition: Names.Triton,
    languages: { known: [Languages.Common, Languages.Primordial] },
    abilityMods: { "STR": +1, "CON": +1, "CHA": +1 },
    features: [
        {
            name: "Amphibious", type: FeatureType.Passive,
            reference: { source: "VGM", page: 118 },
        }, {
            name: "Control Air and Water", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.LongRest },
            reference: { source: "VGM", page: 118 },
        }, {
            name: "Emissary of the Sea", type: FeatureType.Passive,
            reference: { source: "VGM", page: 118 },
        }, {
            name: "Guardians of the Depths", type: FeatureType.Passive,
            damageResistances: [DamageType.Cold],
            reference: { source: "VGM", page: 118 },
        }
    ],
    reference: { source: "VGM", page: 113 },
    subraces: []
});

RaceList.push(Triton);
