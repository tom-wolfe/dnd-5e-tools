import * as Languages from "../../data/languages";
import { Races as RacesImport } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

namespace Races {
    export const Triton: RaceModels.Race = {
        name: "Triton",
        size: "Medium",
        speed: { walk: 30, swim: 30 },
        age: { maturity: 15, max: 200 },
        height: { base: 50, modifier: 20 },
        weight: { base: 120, modifier: 8 },
        languages: { known: [Languages.Common, Languages.Primordial] },
        statMods: { "STR": +1, "CON": +1, "CHA": +1 },
        features: [
            {
                name: "Amphibious", type: "passive",
                description: "You can breathe air and water."
            }, {
                name: "Control Air and Water", type: "active",
                usage: { times: 1, timeUnit: "longRest" },
                description: `
                    A child of the sea, you can call on the magic of elemental air and water. You can cast fog cloud with this trait.
                    Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water
                    with it (see the spell in the sidebar). Once you cast a spell with this trait, you can't do so again until you finish
                    a long rest. Charisma is your spellcasting ability for these spells.
                `
            }, {
                name: "Emissary of the Sea", type: "passive",
                description: `
                    Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that
                    can breathe water. They can understand the meaning of your words, though you have no special ability to understand
                    them in return.
                `
            }, {
                name: "Guardians of the Depths", type: "passive",
                description: `
                    Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks
                    caused by a deep, underwater environment.
                `
            }
        ],
        reference: { source: "VGM", page: 113 },
        subraces: null
    };

    RacesImport.RaceList[Triton.name] = Triton;
};
