import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const HalfOrc: RaceModels.Race = {
    name: "Half-orc",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 14, max: 75 },
    height: { base: 58, modifier: 20 },
    weight: { base: 140, modifier: 12 },
    statMods: { "STR": +2, "CON": +1 },
    languages: { known: [ Languages.Common, Languages.Orc ] },
    features: [
        CommonFeatures.menacing,
        {
            name: "Relentless Endurance", type: "active",
            usage: { times: 1, timeUnit: "longRest" },
            description: `
                When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead.
                You can't use this feature again until you finish a long rest.
            `
        }, {
            name: "Savage Attacks", type: "passive",
            description: `
                When you score a critical hit with a melee weapon attack,
                you can roll one of thc weapon's damage dice one additional time and add it to the extra damage of the critical hit.
            `
        }
    ],
    reference: { source: "PHB", page: 40, url: "https://www.dndbeyond.com/characters/races/half-orc" },
    subraces: null
};

Races[HalfOrc.name] = HalfOrc;
