import { Languages, Skills } from "../../data";
import { RaceList } from "./race-list";

import * as RaceModels from "../../models/races";

export const Changeling: RaceModels.Race = {
    name: "Changeling",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 18, max: 80 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    languages: { known: [Languages.Common], other: 2 },
    abilityMods: { "DEX": +1, "CHA": +1 },
    features: [
        {
            name: "Duplicity", type: "passive",
            skillProficiencies: [Skills.Deception],
            proficiencyCount: 1, proficiencyType: "proficient",
            description: "You have proficiency in the Deception skill."
        }, {
            name: "Shapechanger", type: "active",
            description: `
                    As an action, you can polymorph into any humanoid of your size that you have seen,
                    or back into your true form. However, your equipment does not change with you.
                    If you die, you revert to your natural appearance.
                `
        }
    ],
    reference: { source: "UA", page: 1, document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf" },
    subraces: null
};

RaceList[Changeling.name] = Changeling;
