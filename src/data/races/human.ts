import { Languages, Skills } from "../../data";
import { RaceList } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";
import * as Names from "../names";

export const Human: RaceModels.Race = {
    name: "Human",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 18, max: 80 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.Human,
    languages: { known: [Languages.Common], other: 1 },
    features: [],
    abilityMods: {},
    reference: {
        source: "PHB",
        page: 29,
        url: "https://www.dndbeyond.com/characters/races/human"
    },
    subraces: [
        {
            name: "Normal",
            abilityMods: { "STR": +1, "DEX": +1, "CON": +1, "WIS": +1, "INT": +1, "CHA": +1 },
            reference: { source: "PHB", page: 29, url: "https://www.dndbeyond.com/characters/races/human" }
        }, {
            name: "Variant",
            abilityMods: { additionalPoints: 2 },
            features: [
                {
                    name: "Skill Proficiency", type: "passive",
                    skillProficiencies: Object.keys(Skills.SkillList).map((skill) => Skills.SkillList[skill]),
                    proficiencyCount: 1, proficiencyType: "proficient",
                    description: "You gain proficiency in one skill of your choice."
                }
            ],
            reference: { source: "PHB", page: 31, url: "https://www.dndbeyond.com/characters/races/human#VariantHuman" }
        }
    ]
};

RaceList[Human.name] = Human;
