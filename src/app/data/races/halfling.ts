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
            description: `
                    When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
                `
        }, {
            name: "Brave", type: FeatureType.Passive,
            description: `
                    You have advantage on saving throws against being frightened.
                `
        }, {
            name: "Halfling Nimbleness", type: FeatureType.Passive,
            description: "You can move through the space of any creature that is of a size larger than yours."
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
                    description: `
                            You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.
                        `
                }
            ],
            reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
        }, {
            name: "Stout",
            abilityMods: { "CON": +1 },
            features: [
                {
                    name: "Stout Resilience", type: FeatureType.Passive,
                    damageResistances: [DamageType.Poison],
                    description: `
                            You have advantage on saving throws against poison, and you have resistance against poison damage.
                        `
                }
            ],
            reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
        }
    ]
});

RaceList.push

RaceList.push(Halfling);
