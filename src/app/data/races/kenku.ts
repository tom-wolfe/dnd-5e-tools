import { Languages, Skills } from "app/data";
import { FeatureType } from "app/models/features/feature-type";
import * as RaceModels from "app/models/races";

import * as Names from "../names";
import { RaceList } from "./race-list";

export const Kenku: RaceModels.Race = new RaceModels.Race({
    name: "Kenku",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 12, max: 60 },
    height: { base: 54, modifier: 12 },
    weight: { base: 90, modifier: 3 },
    nameDefinition: Names.Kenku,
    languages: { known: [Languages.Common, Languages.Primordial] },
    abilityMods: { "DEX": +2, "WIS": +1 },
    features: [
        {
            name: "Export Forgery", type: FeatureType.Passive,
            description: `
                    You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce
                    forgeries or duplicates of existing objects.
                `
        }, {
            name: "Kenku Training", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: [Skills.Acrobatics, Skills.Deception, Skills.Stealth, Skills.SleightOfHand], count: 2 }],
            description: `
                    You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.
                `
        }, {
            name: "Mimicry", type: FeatureType.Passive,
            description: `
                    You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are
                    imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.
                `
        }
    ],
    reference: { source: "VGM", page: 110 },
    subraces: []
});

RaceList.push

RaceList.push(Kenku);

