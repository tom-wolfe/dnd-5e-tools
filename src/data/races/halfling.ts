import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Halfling: RaceModels.Race = {
    name: "Halfling",
    size: "Small",
    statMods: { "DEX": +2 },
    languages: { known: [Languages.Common, Languages.Halfling] },
    age: { maturity: 20, max: 105 },
    height: { base: 31, modifier: 8 },
    weight: { base: 35, modifier: 1 },
    speed: { walk: 25 },
    features: [
        {
            name: "Lucky", type: "passive",
            description: `
                    When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
                `
        }, {
            name: "Brave", type: "passive",
            description: `
                    You have advantage on saving throws against being frightened.
                `
        }, {
            name: "Halfling Nimbleness", type: "passive",
            description: "You can move through the space of any creature that is of a size larger than yours."
        }
    ],
    reference: { source: "PHB", page: 26, url: "https://www.dndbeyond.com/characters/races/halfling" },
    subraces: [
        {
            name: "Lightfoot",
            statMods: { "CHA": +1 },
            features: [
                {
                    name: "Naturally Stealthy", type: "passive",
                    description: `
                            You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.
                        `
                }
            ],
            reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
        }, {
            name: "Stout",
            statMods: { "CON": +1 },
            features: [
                {
                    name: "Stout Resilience", type: "passive",
                    description: `
                            You have advantage on saving throws against poison, and you have resistance against poison damage.
                        `
                }
            ],
            reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
        }
    ]
};

Races[Halfling.name] = Halfling;
