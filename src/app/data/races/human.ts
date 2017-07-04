import { Languages, Skills } from "app/data";
import { FeatureType } from "app/models/features";
import * as RaceModels from "app/models/races";

import * as Names from "../names";
import { RaceList } from "./race-list";

export const Human: RaceModels.Race = new RaceModels.Race({
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
    reference: { source: "PHB", page: 29, url: "https://www.dndbeyond.com/characters/races/human" },
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
                    name: "Skill Proficiency", type: FeatureType.Passive,
                    skillProficiencies: [{ proficiencies: Skills.SkillList, count: 1 }],
                    reference: { source: "PHB", page: 29, url: "https://www.dndbeyond.com/characters/races/human#Skills" },
                },
            ],
            reference: { source: "PHB", page: 31, url: "https://www.dndbeyond.com/characters/races/human#VariantHuman" }
        }
    ]
});

RaceList.push(Human);
