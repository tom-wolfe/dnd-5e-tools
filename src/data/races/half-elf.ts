import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const HalfElf: RaceModels.Race = {
    name: "Half-elf",
    size: "Medium",
    speed: { walk: 30 },
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
