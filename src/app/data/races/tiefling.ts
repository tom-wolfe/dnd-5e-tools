import { Languages } from "../../data/languages";
import { DamageType } from "../../models/equipment/damage-type";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Tiefling: RaceModels.Race = new RaceModels.Race({
    name: "Tiefling",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    nameDefinition: Names.Tiefling,
    age: { maturity: 18, max: 90 },
    height: { base: 57, modifier: 16 },
    weight: { base: 110, modifier: 8 },
    languages: { known: [Languages.Common, Languages.Infernal] },
    abilityMods: { "INT": +1, "CHA": +2 },
    features: [
        {
            name: "Hellish Resistance", type: FeatureType.Passive,
            damageResistances: [DamageType.Fire],
            reference: { source: "PHB", page: 43, url: "https://www.dndbeyond.com/characters/races/tiefling#HellishResistance" },
        }, {
            name: "Infernal Legacy", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.Day },
            reference: { source: "PHB", page: 43, url: "https://www.dndbeyond.com/characters/races/tiefling#InfernalLegacy" },
        }
    ],
    reference: { source: "PHB", page: 42, url: "https://www.dndbeyond.com/characters/races/tiefling" },
    subraces: []
});

RaceList.push(Tiefling);
