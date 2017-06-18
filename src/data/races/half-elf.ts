import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const HalfElf: RaceModels.Race = {
    name: "Half-elf",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 200 },
    height: { base: 57, modifier: 16 },
    weight: { base: 110, modifier: 8 },
    languages: { known: [ Languages.Common, Languages.Elvish ], other: 1 },
    statMods: { charisma: +2, additionalPoints: 2 },
    features: [
        CommonFeatures.feyAncestry,
        {
            name: "Skill Versatility", type: "singleMod",
            description: "You gain proficiency in two skills of your choice."
        }
    ],
    reference: { source: "PHB", page: 38, url: "https://www.dndbeyond.com/characters/races/half-elf" },
    subraces: null
};

Races[HalfElf.name] = HalfElf;
