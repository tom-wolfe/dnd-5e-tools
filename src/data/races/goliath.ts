import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Goliath: RaceModels.Race = {
    name: "Goliath",
    size: "Medium",
    speed: { walk: 30 },
    languages: { known: [ Languages.Common, Languages.Giant ] },
    statMods: { strength: +2, constitution: +1 },
    features: [
        {
            name: "Natural Athlete", type: "singleMod",
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

Races[Goliath.name] = Goliath;
