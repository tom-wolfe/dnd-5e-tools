import { Languages, Skills } from "../../data";
import { Races as RacesImport } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

namespace Races {
    export const HalfElf: RaceModels.Race = {
        name: "Half-elf",
        size: "Medium",
        speed: { walk: 30 },
        senses: { darkvision: 60 },
        age: { maturity: 18, max: 200 },
        height: { base: 57, modifier: 16 },
        weight: { base: 110, modifier: 8 },
        languages: { known: [Languages.Common, Languages.Elvish], other: 1 },
        statMods: { "CHA": +2, additionalPoints: 2 },
        features: [
            CommonFeatures.feyAncestry,
            {
                name: "Skill Versatility", type: "passive",
                skillProficiencies: Object.keys(Skills.SkillList).map((skill) => Skills.SkillList[skill]),
                skillProficiencyCount: 2,
                description: "You gain proficiency in two skills of your choice."
            }
        ],
        reference: { source: "PHB", page: 38, url: "https://www.dndbeyond.com/characters/races/half-elf" },
        subraces: null
    };

    RacesImport.RaceList[HalfElf.name] = HalfElf;
};
