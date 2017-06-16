import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Bugbear: RaceModels.Race = {
    name: "Bugbear",
    size: "Medium",
    speed: { walk: 30 },
    statMods: { strength: +2, dexterity: +1 },
    features: [
        {
            name: "Long-Limbed", type: "passive",
            description: "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal."
        },
        CommonFeatures.powerfulBuild,
        {
            name: "Sneaky", type: "singleMod",
            description: `
                You are proficient in the Stealth skill.
            `
        }, {
            name: "Surprise Attack", type: "passive",
            description: `
                If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6
                damage to it. You can use this trait only once per combat.
            `
        }
    ],
    reference: { source: "VGM", page: 119 },
    subraces: null
};

Races[Bugbear.name] = Bugbear;
