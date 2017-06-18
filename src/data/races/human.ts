import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Human: RaceModels.Race = {
    name: "Human",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 18, max: 80 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    languages: { known: [ Languages.Common ], other: 1 },
    statMods: {},
    reference: {
        source: "PHB",
        page: 29,
        url: "https://www.dndbeyond.com/characters/races/human"
    },
    subraces: [
        {
            name: "Normal",
            statMods: { "STR": +1, "DEX": +1, "CON": +1, "WIS": +1, "INT": +1, "CHA": +1 },
            reference: { source: "PHB", page: 29, url: "https://www.dndbeyond.com/characters/races/human" }
        }, {
            name: "Variant",
            statMods: { additionalPoints: 2 },
            reference: { source: "PHB", page: 31, url: "https://www.dndbeyond.com/characters/races/human#VariantHuman" }
        }
    ]
};

Races[Human.name] = Human;
