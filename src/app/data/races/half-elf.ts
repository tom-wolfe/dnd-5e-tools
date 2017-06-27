import { Languages, Skills } from "app/data";
import { FeatureType } from "app/models/features/feature-type";
import * as RaceModels from "app/models/races";

import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

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
            name: "Skill Versatility", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: Skills.SkillList, count: 2 }],
            description: "You gain proficiency in two skills of your choice."
        }
    ],
    reference: { source: "PHB", page: 38, url: "https://www.dndbeyond.com/characters/races/half-elf" },
    subraces: []
};

RaceList[HalfElf.name] = HalfElf;
