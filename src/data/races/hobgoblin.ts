import { Languages } from "../../data/languages";
import { Races as RacesImport } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as Characters from "../../models/characters";
import * as RaceModels from "../../models/races";

namespace Races {
    export const Hobgoblin: RaceModels.Race = {
        name: "Hobgoblin",
        size: "Medium",
        speed: { walk: 30 },
        senses: { darkvision: 60 },
        age: { maturity: 18, max: 80 },
        height: { base: 60, modifier: 12 },
        weight: { base: 150, modifier: 4 },
        languages: { known: [Languages.Common, Languages.Goblin] },
        abilityMods: { "CON": +2, "INT": +1 },
        features: [
            {
                name: "Martial Training", type: "singleMod",
                description: "You are proficient with two martial weapons of your choice and with light armor.",
                apply(character: Characters.Character) {
                    // TODO: Apply random proficiencies.
                }
            }, {
                name: "Saving Face", type: "active",
            usage: { times: 1, timeUnit: "shortRest" },
            description: `
                Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss
                with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the
                number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't
                use it again until you finish a short or long rest.
            `
        }
        ],
    reference: { source: "VGM", page: 119 },
    subraces: null
};

RacesImport.RaceList[Hobgoblin.name] = Hobgoblin;
};
