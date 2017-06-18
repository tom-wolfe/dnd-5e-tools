import * as Languages from "../../data/languages";
import { Races as RacesImport } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

namespace Races {
    export const YuanTiPureblood: RaceModels.Race = {
        name: "Yuan-ti Pureblood",
        size: "Medium",
        senses: { darkvision: 60 },
        age: { maturity: 18, max: 80 },
        height: { base: 56, modifier: 20 },
        weight: { base: 110, modifier: 8 },
        languages: { known: [Languages.Common, Languages.Abyssal, Languages.Draconic] },
        statMods: { "CHA": +2, "INT": +1 },
        speed: { walk: 30 },
        features: [
            {
                name: "Innate Spellcasting", type: "active",
                usage: { times: 1, timeUnit: "shortRest" },
                description: `
                    You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait,
                    but you can target only snakes with it. Starting at 3rd level, you can also cast suggestion with this trait. Once
                    you cast it, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.
                `
            }, {
                name: "Magic Resistance", type: "passive",
                description: "You have advantage on saving throws against spells and other magical effects."
            }, {
                name: "Poison Immunity", type: "passive",
                description: "You are immune to poison damage and the poisoned condition."
            }
        ],
        reference: { source: "VGM", page: 120 },
        subraces: null
    }

    RacesImport.RaceList[YuanTiPureblood.name] = YuanTiPureblood;
};
