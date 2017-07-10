import { Languages } from "../../data/languages";
import { DamageType } from "../../models/equipment/damage-type";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Genasi: RaceModels.Race = new RaceModels.Race({
    name: "Genasi",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 18, max: 120 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.Human,
    languages: { known: [Languages.Common, Languages.Primordial] },
    abilityMods: { "CON": +2 },
    features: [],
    reference: { source: "EE", page: 6, url: "https://www.dndbeyond.com/characters/races/genasi" },
    subraces: [
        {
            name: "Air",
            nameDefinition: Names.GenasiAir,
            abilityMods: { "DEX": +1 },
            features: [
                {
                    name: "Unending Breath", type: FeatureType.Passive,
                    reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#UndyingBreath" }
                }, {
                    name: "Mingle with the Wind", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#MinglewiththeWind" }
                }
            ],
            reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#AirGenasi" }
        }, {
            name: "Earth",
            nameDefinition: Names.GenasiEarth,
            abilityMods: { "STR": +1 },
            features: [
                {
                    name: "Earth Walk", type: FeatureType.Passive,
                    reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#EarthWalk" }
                }, {
                    name: "Mingle with Stone", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#MinglewithStone" }
                }
            ],
            reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#EarthGenasi" }
        }, {
            name: "Fire",
            nameDefinition: Names.GenasiFire,
            abilityMods: { "INT": +1 },
            senses: { darkvision: 60 },
            features: [
                {
                    name: "Fire Resistance", type: FeatureType.Passive,
                    damageResistances: [DamageType.Fire],
                    reference: { source: "EE", page: 10, url: "https://www.dndbeyond.com/characters/races/genasi#FireResistance" }
                }, {
                    name: "Reach to the Blaze", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "EE", page: 10, url: "https://www.dndbeyond.com/characters/races/genasi#ReachtotheBlaze" }
                }
            ],
            reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#FireGenasi" }
        }, {
            name: "Water",
            nameDefinition: Names.GenasiWater,
            speed: { swim: 30 },
            abilityMods: { "WIS": +1 },
            features: [
                {
                    name: "Acid Resistance", type: FeatureType.Passive,
                    damageResistances: [DamageType.Acid],
                    reference: { source: "EE", page: 10, url: "https://www.dndbeyond.com/characters/races/genasi#AcidResistance" }
                }, {
                    name: "Amphibious", type: FeatureType.Passive,
                    reference: { source: "EE", page: 10, url: "https://www.dndbeyond.com/characters/races/genasi#Amphibious" }
                }, {
                    name: "Call to the Wave", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "EE", page: 10, url: "https://www.dndbeyond.com/characters/races/genasi#CalltotheWave" }
                }
            ],
            reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#WaterGenasi" }
        },
    ]
});

RaceList.push(Genasi);
