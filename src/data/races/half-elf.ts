import { Languages, Skills } from "../../data";
import { RaceList } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as Names from "../names";
import * as RaceModels from "../../models/races";

export const HalfElf: RaceModels.Race = {
    name: "Half-elf",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    nameDefinition: Names.HalfElf,
    age: { maturity: 18, max: 200 },
    height: { base: 57, modifier: 16 },
    weight: { base: 110, modifier: 8 },
    languages: { known: [Languages.Common, Languages.Elvish], other: 1 },
    abilityMods: { "CHA": +2, additionalPoints: 2 },
    features: [
        CommonFeatures.feyAncestry,
        {
            name: "Skill Versatility", type: "passive",
            skillProficiencies: Object.keys(Skills.SkillList).map((skill) => Skills.SkillList[skill]),
            proficiencyCount: 2, proficiencyType: "proficient",
            description: "You gain proficiency in two skills of your choice."
        }
    ],
    reference: { source: "PHB", page: 38, url: "https://www.dndbeyond.com/characters/races/half-elf" },
    subraces: []
};

RaceList[HalfElf.name] = HalfElf;
