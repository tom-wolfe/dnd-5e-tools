import { Languages, Skills } from "../../data";
import { ProficiencyType } from "../../models/abilities/proficiency-type";
import * as Characters from "../../models/characters";
import * as RaceModels from "../../models/races";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Elf: RaceModels.Race = {
    name: "Elf",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 750 },
    height: { base: 54, modifier: 20 },
    weight: { base: 90, modifier: 4 },
    nameDefinition: Names.Elf,
    languages: { known: [Languages.Common, Languages.Elvish] },
    abilityMods: { "DEX": +2 },
    features: [
        {
            name: "Keen Senses", type: "passive",
            skillProficiencies: [Skills.Perception],
            proficiencyCount: 1, proficiencyType: ProficiencyType.Proficient,
            description: "You have proficiency in the Perception skill."
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
            abilityMods: { "INT": +1 },
            features: [
                CommonFeatures.elfWeaponTraining,
                {
                    name: "Cantrip", type: "singleMod",
                    description: `
                            You know one Cantrip of your choice from the wizard spell list.
                            Intelligence is your spellcasting ability for it.
                        `,
                    apply(character: Characters.Character) {
                        // TODO: Apply random cantrip/
                    }
                },
            ],
            reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#HighElf" }
        }, {
            name: "Wood",
            speed: { walk: 35 },
            abilityMods: { "WIS": +1 },
            weight: { base: 100, modifier: 4 },
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
            nameDefinition: Names.Drow,
            abilityMods: { "CHA": +1 },
            senses: { darkvision: 120 },
            height: { base: 53, modifier: 12 },
            weight: { base: 75, modifier: 6 },
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
            abilityMods: { "INT": +1 },
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

RaceList[Elf.name] = Elf;

