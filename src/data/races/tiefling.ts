import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Tiefling: RaceModels.Race = {
    name: "Tiefling",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    statMods: { intelligence: +1, charisma: +2 },
    features: [
        {
            name: "Hellish Resistance", type: "passive",
            description: "You have resistance to fire damage."
        }, {
            name: "Infernal Legacy", type: "active",
            usage: { times: 1, timeUnit: "day" },
            description: `
                You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a
                2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting
                ability for these spells.
            `
        }
    ],
    reference: { source: "PHB", page: 42, url: "https://www.dndbeyond.com/characters/races/tiefling" },
    subraces: null
};

Races[Tiefling.name] = Tiefling;
