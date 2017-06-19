import { Languages } from "../../data/languages";
import { Races as RacesImport } from "./race-list";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

namespace Races {
    export const Firbolg: RaceModels.Race = {
        name: "Firbolg",
        size: "Medium",
        speed: { walk: 30 },
        age: { maturity: 30, max: 500 },
        height: { base: 84, modifier: 12 },
        weight: { base: 240, modifier: 5 },
        languages: { known: [Languages.Common, Languages.Elvish, Languages.Giant] },
        abilityMods: { "STR": +1, "WIS": +2 },
        features: [
            {
                name: "Firbolg Magic", type: "active",
                usage: { times: 1, timeUnit: "shortRest" },
                description: `
                You can cast detect magic and disguise self with this trait, using Wisdom as your spell casting ability for them.
                Once you cast either spell, you can't cast it again with this trait until you finish a short or long rest. When
                you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily
                blend in with humans and elves.
            `
            }, {
                name: "Hidden Step", type: "active",
                usage: { times: 1, timeUnit: "shortRest" },
                description: `
                As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a
                damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until you
                finish a short or long rest.
            `
            },
            CommonFeatures.powerfulBuild,
            {
                name: "Speech of Beast and Leaf", type: "passive",
                description: `
                You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning
                of your words, though you have no special ability to understand them in return. You have advantage on all
                Charisma checks you make to influence them.
            `
            }
        ],
        reference: { source: "VGM", page: 106 },
        subraces: null
    };

    RacesImport.RaceList[Firbolg.name] = Firbolg;
};
