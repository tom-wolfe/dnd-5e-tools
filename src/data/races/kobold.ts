import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Kobold: RaceModels.Race = {
    name: "Kobold",
    size: "Small",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    statMods: { dexterity: +2, strength: -2 },
    features: [
        {
            name: "Pack Tactics", type: "passive",
            description: `
                You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the
                creature and the ally isn't incapacitated.
            `
        }, {
            name: "Grovel, Cower, and Beg", type: "active",
            usage: { times: 1, timeUnit: "shortRest" },
            description: `
                As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn,
                your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use
                this trait, you can't use it again until you finish a short or long rest.
            `
        },
        CommonFeatures.sunlightSensitivity
    ],
    reference: { source: "VGM", page: 119 },
    subraces: null
};

Races[Kobold.name] = Kobold;
