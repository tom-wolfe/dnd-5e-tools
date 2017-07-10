import { Languages } from "../../data/languages";
import { DamageType } from "../../models/equipment/damage-type";
import { FeatureType } from "../../models/features/feature-type";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Halfling: RaceModels.Race = new RaceModels.Race({
    name: "Halfling",
    size: "Small",
    abilityMods: { "DEX": +2 },
    nameDefinition: Names.Halfling,
    languages: { known: [Languages.Common, Languages.Halfling] },
    age: { maturity: 20, max: 105 },
    height: { base: 31, modifier: 8 },
    weight: { base: 35, modifier: 1 },
    speed: { walk: 25 },
    features: [
        {
            name: "Lucky", type: FeatureType.Passive,
            reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Lucky" }
        }, {
            name: "Brave", type: FeatureType.Passive,
            reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Brave" }
        }, {
            name: "Halfling Nimbleness", type: FeatureType.Passive,
            reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#HalflingNimbleness" }
        }
    ],
    reference: { source: "PHB", page: 26, url: "https://www.dndbeyond.com/characters/races/halfling" },
    subraces: [
        {
            name: "Lightfoot",
            abilityMods: { "CHA": +1 },
            features: [
                {
                    name: "Naturally Stealthy", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 28 }
                }
            ],
            reference: { source: "PHB", page: 28 }
        }, {
            name: "Stout",
            abilityMods: { "CON": +1 },
            features: [
                {
                    name: "Stout Resilience", type: FeatureType.Passive,
                    damageResistances: [DamageType.Poison],
                    reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#StoutResilience" }
                }
            ],
            reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
        }
    ]
});

RaceList.push(Halfling);
