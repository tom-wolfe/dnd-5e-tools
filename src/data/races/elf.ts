import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Elf: RaceModels.Race = {
    name: "Elf",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    statMods: { dexterity: +2 },
    features: [
        {
            name: "Keen Senses", type: "passive",
            description: "Keen Senses.Vou have proficiency io the Perception skill."
        },
        CommonFeatures.feyAncestry,
        {
            name: "Trance", type: "passive",
            description: `
                Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The common word
                for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental
                exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit
                that a human does from 8 hours of sleep.
            `
        }
    ],
    reference: { source: "PHB", page: 21, url: "https://www.dndbeyond.com/characters/races/elf" },
    subraces: [
        {
            name: "High",
            statMods: { intelligence: +1 },
            features: [
                CommonFeatures.elfWeaponTraining,
                {
                    name: "Cantrip", type: "singleMod",
                    description: `
                        You know one Cantrip of your choice from the wizard spell list.
                        Intelligence is your spellcasting ability for it.
                    `
                },
            ],
            reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#HighElf" }
        }, {
            name: "Wood",
            speed: { walk: 35 },
            statMods: { wisdom: +1 },
            features: [
                CommonFeatures.elfWeaponTraining,
                {
                    name: "Fleet of Foot", type: "passive",
                    description: "Your base walking speed increase to 35 feet."
                }, {
                    name: "Mask of the Wild", type: "passive",
                    description: `
                        You can attempt to hide even when you are only lightly obscured by foliage, heavy rain,
                        falling snow, mist, and other natural phenomena.
                    `
                }
            ],
            reference: { source: "PHB", page: 24, url: "https://www.dndbeyond.com/characters/races/elf#WoodElf" }
        }, {
            name: "Drow",
            statMods: { charisma: +1 },
            senses: { darkvision: 120 },
            features: [
                CommonFeatures.sunlightSensitivity,
                {
                    name: "Drow Magic", type: "active",
                    usage: { times: 1, timeUnit: "longRest" },
                    description: `
                        You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell
                        once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is
                        your spellcasting ability for these spells.
                    `
                }, {
                    name: "Drow Weapon Training", type: "passive",
                    description: "You have proficiency with rapiers, shortswords, and hand crossbows."
                }
            ],
            reference: { source: "PHB", page: 24 }
        }, {
            name: "Eladrin",
            statMods: { intelligence: +1 },
            features: [
                CommonFeatures.elfWeaponTraining,
                {
                    name: "Fey Step", type: "active",
                    usage: { times: 1, timeUnit: "shortRest" },
                    description: `
                        You can cast the misty step spell once using this trait.
                        You regain the ability to do so when you finish a short or long rest.
                    `
                },
            ],
            reference: { source: "DMG", page: 286 }
        }
    ]
};

Races[Elf.name] = Elf;
