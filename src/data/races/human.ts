import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Human: RaceModels.Race = {
    name: "Human",
    size: "Medium",
    speed: { walk: 30 },
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
            statMods: { strength: +1, dexterity: +1, constitution: +1, wisdom: +1, intelligence: +1, charisma: +1 },
            reference: { source: "PHB", page: 29, url: "https://www.dndbeyond.com/characters/races/human" }
        }, {
            name: "Variant",
            statMods: { additionalPoints: 2 },
            reference: { source: "PHB", page: 31, url: "https://www.dndbeyond.com/characters/races/human#VariantHuman" }
        }
    ]
};

Races[Human.name] = Human;
