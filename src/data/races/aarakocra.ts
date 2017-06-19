import { Languages } from "../../data/languages";
import { Races as RacesImport } from "./race-list";

import * as RaceModels from "../../models/races";

namespace Races {
    export const Aarakocra: RaceModels.Race = {
        name: "Aarakocra",
        size: "Medium",
        speed: { walk: 25, fly: 50 },
        age: { maturity: 3, max: 35 },
        height: { base: 54, modifier: 12 },
        weight: { base: 80, modifier: 2 },
        languages: { known: [Languages.Common, Languages.Aarakocra, Languages.Primordial] },
        abilityMods: { "DEX": +2, "WIS": +1 },
        features: [
            {
                name: "Flight", type: "passive",
                description: "You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor."
            }, {
                name: "Talons", type: "active",
                description: "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit."
            }
        ],
        reference: { source: "EE", page: 2, url: "https://www.dndbeyond.com/characters/races/aarakocra" },
        subraces: null
    };

    RacesImport.RaceList[Aarakocra.name] = Aarakocra;
};
