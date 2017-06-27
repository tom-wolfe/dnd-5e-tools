import { Languages } from "../../data/languages";
import * as Weapons from "../../data/weapons";
import * as Characters from "../../models/characters";
import * as RaceModels from "../../models/races";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Dwarf: RaceModels.Race = {
    name: "Dwarf",
    size: "Medium",
    speed: { walk: 25 },
    age: { maturity: 18, max: 350 },
    senses: { darkvision: 60 },
    height: { base: 48, modifier: 8 },
    weight: { base: 130, modifier: 12 },
    nameDefinition: Names.DwarfTolkien,
    languages: { known: [Languages.Common, Languages.Dwarvish] },
    abilityMods: { "CON": +2 },
    features: [
        {
            name: "Dwarven Resilience", type: "passive",
            description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
        }, {
            name: "Dwarven Combat Training", type: "passive",
            weaponProficiencies: [Weapons.Club], // TODO: Change to: [Weapons.Battleaxe, Weapons.Handaxe, Weapons.LightHammer, Weapons.Warhammer],
            description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
            apply(character: Characters.Character) {
                // TODO: Apply weapon proficiencies.
            }
        }, {
            name: "Tool Proficiency", type: "singleMod",
            description: `
                    You gain proficiency with the artisan's tool of your choice:
                    smith's tools, brewer's supplies, or mason's tools.
                `,
            apply(character: Characters.Character) {
                // TODO: Apply tool proficiencies.
            }
        }, {
            name: "Stonecunning", type: "passive",
            description: `
                    Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered
                    proficient in the History skill and add double your proficiency bonus to the check, instead of your
                    normal proficiency bonus.
                `
        }
    ],
    reference: { source: "PHB", page: 18, url: "https://www.dndbeyond.com/characters/races/dwarf" },
    subraces: [
        {
            name: "Hill",
            abilityMods: { "WIS": +1 },
            height: { base: 44, modifier: 8 },
            weight: { base: 115, modifier: 12 },
            features: [
                {
                    name: "Dwarven Toughness", type: "onLevelMod",
                    description: "Your hit point maximum increases by 1 every time you gain a level."
                }
            ],
            reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#HillDwarf" }
        }, {
            name: "Mountain",
            abilityMods: { "STR": +2 },
            features: [
                {
                    name: "Dwarven Armor Training", type: "singleMod",
                    description: "You have proficiency with light and medium armor.",
                    apply(character: Characters.Character) {
                        // TODO: Apply armor proficiencies.
                    }
                }
            ],
            reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#MountainDwarf" }
        }, {
            name: "Duergar",
            abilityMods: { "STR": +1 },
            languages: { known: [Languages.Undercommon] },
            features: [
                {
                    name: "Duergar Resilience", type: "passive",
                    description: "You have advantage on saving throws against illusions and against being charmed or paralyzed."
                }, {
                    name: "Duergar Magic", type: "active",
                    usage: { times: 1, timeUnit: "longRest" },
                    description: `
                            When you reach 3rd level, you can cast the enlarge/reduce spell on yourself once with this trait, using only the
                            spell's enlarge option. When you reach 5th level, you can cast the invisibility spell on yourself once with this
                            trait. You don't need material components for either spell, and you can't cast them while you're in direct
                            sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with
                            this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.
                        `
                },
                CommonFeatures.sunlightSensitivity
            ],
            reference: { source: "SCG", page: 104 }
        }
    ]
};

RaceList[Dwarf.name] = Dwarf;
