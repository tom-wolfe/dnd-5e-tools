import { Languages } from "../../data/languages";
import { RaceList } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

export const Goblin: RaceModels.Race = {
    name: "Goblin",
    size: "Small",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 8, max: 60 },
    height: { base: 33, modifier: 8 },
    weight: { base: 40, modifier: 3 },
    languages: { known: [Languages.Common, Languages.Goblin] },
    abilityMods: { "DEX": +2, "CON": +1 },
    features: [
        {
            name: "Fury of the Small", type: "active",
            usage: { times: 1, timeUnit: "shortRest" },
            description: `
                    When you damage a creature with an attack or a spell and the creature's size is larger than yours, you
                    can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level.
                    Once you use this trait, you can't use it again until you finish a short or long rest.
                `
        }, {
            name: "Nimble Escape", type: "active",
            description: "You can take the Disengage or Hide action as a bonus action on each of your turns."
        }
    ],
    reference: { source: "VGM", page: 119 },
    subraces: []
};

RaceList[Goblin.name] = Goblin;
