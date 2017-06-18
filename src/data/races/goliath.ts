import { Languages, Skills } from "../../data";
import { Races as RacesImport } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

namespace Races {
    export const Goliath: RaceModels.Race = {
        name: "Goliath",
        size: "Medium",
        speed: { walk: 30 },
        age: { maturity: 18, max: 90 },
        height: { base: 84, modifier: 12 },
        weight: { base: 280, modifier: 5 },
        languages: { known: [Languages.Common, Languages.Giant] },
        statMods: { "STR": +2, "CON": +1 },
        features: [
            {
                name: "Natural Athlete", type: "passive",
                skillProficiencies: [ Skills.Athletics ],
                proficiencyCount: 1, proficiencyType: "proficient",
                description: "You have proficiency in the Athletics skill."
            }, {
                name: "Stone's Endurance", type: "active",
                usage: { times: 1, timeUnit: "shortRest" },
                description: `
                    You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12.
                    Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you
                    can’t use it again until you finish a short or long rest.
                `
            },
            CommonFeatures.powerfulBuild,
            {
                name: "Mountain Born", type: "passive",
                description: `
                    You’re acclimated to high altitude, including elevations above 20,000 feet. You’re also naturally adapted to cold
                    climates, as described in chapter 5 of the Dungeon Master’s Guide.
                `
            }
        ],
        reference: { source: "VGM", page: 108, url: "https://www.dndbeyond.com/characters/races/goliath" },
        subraces: null
    };

    RacesImport.RaceList[Goliath.name] = Goliath;
};
