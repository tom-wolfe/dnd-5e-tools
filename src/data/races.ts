import * as RaceModels from "../models/races";
import { CommonFeatures } from "./common-features";

export const Races: RaceModels.Race[] = [
    {
        name: "Aarakocra",
        size: "Medium",
        speed: { walk: 25, fly: 50 },
        statMods: { dexterity: +2, wisdom: +1 },
        features: [
            {
                name: "Flight", type: "passive",
                description: "You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor."
            }, {
                name: "Talons", type: "active",
                description: "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit."
            }
        ],
        reference: { source: "EE", page: 2, url: "https://www.dndbeyond.com/characters/races/aarakocra" },
        subraces: null
    }, {
        name: "Aasimar",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { charisma: +2 },
        features: [
            {
                name: "Celestial Resistance", type: "passive",
                description: "You have resistance to necrotic damage and radiant damage."
            }, {
                name: "Healing Hands", type: "active",
                usage: { times: 1, timeUnit: "longRest" },
                description: `
                    As an action, you can touch a creature and cause it to regain a number of hit points equal to your level.
                    Once you use this trait, you can't use it again until you finish a long rest.
                `
            }, {
                name: "Light Bearer", type: "active",
                description: "You know the light cantrip. Charisma is your spellcasting ability for it."
            }
        ],
        reference: { source: "VGM", page: 104 },
        subraces: [
            {
                name: "Protector", statMods: { wisdom: +1 },
                features: [
                    {
                        name: "Radiant Soul", type: "active",
                        usage: { times: 1, timeUnit: "longRest" },
                        description: `
                            Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes
                            to glimmer and two luminous, incorporeal wings to sprout from your back.

                            Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed
                            of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage
                            to it with an attack or a spell. The extra radiant damage equals your level.

                            Once you use this trait, you can't use it again until you finish a long rest.
                        `
                    },
                ],
                reference: { source: "VGM", page: 105 }
            }, {
                name: "Scourge", statMods: { constitution: +1 },
                features: [
                    {
                        name: "Radiant Consumption", type: "active",
                        usage: { times: 1, timeUnit: "longRest" },
                        description: `
                            Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing
                            light to radiate from you, pour out of your eyes and mouth, and threaten to char you.

                            Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light
                            in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each
                            creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on
                            each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack
                            or a spell. The extra radiant damage equals your level.

                            Once you use this trait, you can't use it again until you finish a long rest.
                        `
                    },
                ],
                reference: { source: "VGM", page: 105 }
            }, {
                name: "Fallen", statMods: { strength: +1 },
                features: [
                    {
                        name: "Necrotic Shroud", type: "active",
                        usage: { times: 1, timeUnit: "longRest" },
                        description: `
                            Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes
                            to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant
                            you transform, other creatures within 10 feet of you that can see you must each succeed on a Charisma saving
                            throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your
                            next turn.

                            Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your
                            turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell.
                            The extra necrotic damage equals your level.

                            Once you use this trait, you can't use it again until you finish a long rest.
                        `
                    },
                ],
                reference: { source: "VGM", page: 105 }
            }
        ]
    }, {
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
    }, {
        name: "Dragonborn",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { strength: +2, charisma: +1 },
        reference: {
            source: "PHB",
            page: 32,
            url: "https://www.dndbeyond.com/characters/races/dragonborn"
        },
        subraces: null
    }, {
        name: "Dwarf",
        size: "Medium",
        speed: { walk: 25 },
        statMods: { constitution: +2 },
        features: [
            {
                name: "Dwarven Resilience", type: "passive",
                description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
            }, {
                name: "Dwarven Combat Training", type: "singleMod",
                description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
            }, {
                name: "Tool Proficiency", type: "singleMod",
                description: `
                    You gain proficiency with the artisan's tool of your choice:
                    smith's tools, brewer's supplies, or mason's tools.
                `
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
                statMods: { wisdom: +1 },
                features: [
                    {
                        name: "Dwarven Toughness", type: "onLevelMod",
                        description: "Your hit point maximum increases by 1 every time you gain a level."
                    }
                ],
                reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#HillDwarf" }
            }, {
                name: "Mountain",
                statMods: { strength: +2 },
                features: [
                    {
                        name: "Dwarven Armor Training", type: "singleMod",
                        description: "You have proficiency with light and medium armor."
                    }
                ],
                reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#MountainDwarf" }
            }, {
                name: "Duergar",
                statMods: { strength: +1 },
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
    }, {
        name: "Elf",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { dexterity: +2 },
        features: [
            {
                name: "Keen Senses", type: "passive",
                description: "Keen Senses.Vou have proficiency io the Perception skill."
            }, {
                name: "Fey Ancestry", type: "passive",
                description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
            }, {
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
                            You know one Cantrip of your choice from the wizard spelllist.
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
    }, {
        name: "Firbolg",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { strength: +1, wisdom: +2 },
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
    }, {
        name: "Genasi",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { constitution: +2 },
        reference: { source: "EE", page: 6, url: "https://www.dndbeyond.com/characters/races/genasi" },
        subraces: [
            {
                name: "Air",
                statMods: { dexterity: +1 },
                features: [
                    {
                        name: "Unending Breath", type: "passive",
                        description: "You can hold your breath indefinitely while you’re not incapacitated."
                    }, {
                        name: "Mingle with the Wind", type: "active",
                        usage: { times: 1, timeUnit: "longRest" },
                        description: `
                            You can cast the levitate spell once with this trait, requiring no material components, and you regain the
                            ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this
                            spell.
                        `
                    }
                ],
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#AirGenasi" }
            }, {
                name: "Earth",
                statMods: { strength: +1 },
                features: [
                    {
                        name: "Earth Walk", type: "passive",
                        description: "You can move across difficult terrain made of earth or stone without expending extra movement."
                    }, {
                        name: "Mingle with Stone", type: "active",
                        usage: { times: 1, timeUnit: "longRest" },
                        description: `
                            You can cast the pass without trace spell once with this trait, requiring no material components, and you
                            regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting
                            ability for this spell.
                        `
                    }
                ],
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#EarthGenasi" }
            }, {
                name: "Fire",
                statMods: { intelligence: +1 },
                features: [
                    {
                        name: "Fire Resistance", type: "passive",
                        description: "You have resistance to fire damage."
                    }, {
                        name: "Reach to the Blaze", type: "active",
                        usage: { times: 1, timeUnit: "longRest" },
                        description: `
                            You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with
                            this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest.
                            Constitution is your spellcasting ability for these spells.
                        `
                    }
                ],
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#FireGenasi" }
            }, {
                name: "Water",
                speed: { swim: 30 },
                statMods: { wisdom: +1 },
                features: [
                    {
                        name: "Acid Resistance", type: "passive",
                        description: "You have resistance to acid damage."
                    }, {
                        name: "Amphibious", type: "passive",
                        description: "You can breathe air and water."
                    }, {
                        name: "Call to the Wave", type: "active",
                        usage: { times: 1, timeUnit: "longRest" },
                        description: `
                            You know the shape water cantrip (see chapter 2). When you reach 3rd level, you can cast the create or destroy
                            water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you
                            finish a long rest. Constitution is your spellcasting ability for these spells.
                        `
                    }
                ],
                reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#WaterGenasi" }
            },
        ]
    }, {
        name: "Gnome",
        size: "Small",
        speed: { walk: 25 },
        statMods: { intelligence: +2 },
        features: [
            {
                name: "Gnome Cunning", type: "passive",
                description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
            }
        ],
        reference: { source: "PHB", page: 35, url: "https://www.dndbeyond.com/characters/races/gnome" },
        subraces: [
            {
                name: "Forest",
                statMods: { dexterity: +1 },
                reference: { source: "PHB", page: 37 }
            }, {
                name: "Rock",
                statMods: { constitution: +1 },
                reference: { source: "PHB", page: 37, url: "https://www.dndbeyond.com/characters/races/gnome#RockGnome" }
            }, {
                name: "Deep",
                statMods: { dexterity: +1 },
                features: [
                    {
                        name: "Stone Camouflage", type: "passive",
                        description: "You have advantage on Dexterity (stealth) checks to hide in rocky terrain."
                    }
                ],
                reference: { source: "EE", page: 4, url: "https://www.dndbeyond.com/characters/races/gnome#DeepGnome" }
            }
        ]
    }, {
        name: "Goblin",
        size: "Small",
        speed: { walk: 30 },
        statMods: { dexterity: +2, constitution: +1 },
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
        subraces: null
    }, {
        name: "Goliath",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { strength: +2, constitution: +1 },
        features: [
            {
                name: "Natural Athlete", type: "singleMod",
                description: "You have proficiency in the Athletics skill."
            }, {
                name: "Stone's Endurance", type: "active",
                usage: { times: 1, timeUnit: "shortRest" },
                description: `
                    You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12.
                    Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you
                    can’t use it again until you finish a short or long rest.
                `
            },
            CommonFeatures.powerfulBuild,
            {
                name: "Mountain Born", type: "passive",
                description: `
                    You’re acclimated to high altitude, including elevations above 20,000 feet. You’re also naturally adapted to cold
                    climates, as described in chapter 5 of the Dungeon Master’s Guide.
                `
            }
        ],
        reference: { source: "VGM", page: 108, url: "https://www.dndbeyond.com/characters/races/goliath" },
        subraces: null
    }, {
        name: "Half-elf",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { charisma: +2, additionalPoints: 2 },
        reference: { source: "PHB", page: 38, url: "https://www.dndbeyond.com/characters/races/half-elf" },
        subraces: null
    }, {
        name: "Half-orc",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { strength: +2, constitution: +1 },
        reference: { source: "PHB", page: 40, url: "https://www.dndbeyond.com/characters/races/half-orc" },
        subraces: null
    }, {
        name: "Halfling",
        size: "Small",
        statMods: { dexterity: +2 },
        speed: { walk: 25 },
        reference: { source: "PHB", page: 26, url: "https://www.dndbeyond.com/characters/races/halfling" },
        subraces: [
            {
                name: "Lightfoot",
                statMods: { charisma: +1 },
                reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
            }, {
                name: "Stout",
                statMods: { constitution: +1 },
                reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
            }
        ]
    }, {
        name: "Hobgoblin",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { constitution: +2, intelligence: +1 },
        features: [
            {
                name: "Martial Training", type: "singleMod",
                description: "You are proficient with two martial weapons of your choice and with light armor."
            }, {
                name: "Saving Face", type: "active",
                usage: { times: 1, timeUnit: "shortRest" },
                description: `
                    Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss
                    with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the
                    number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't
                    use it again until you finish a short or long rest.
                `
            }
        ],
        reference: { source: "VGM", page: 119 },
        subraces: null
    }, {
        name: "Human",
        size: "Medium",
        speed: { walk: 30 },
        statMods: {},
        reference: {
            source: "PHB",
            page: 29,
            url: "https://www.dndbeyond.com/characters/races/human"
        },
        subraces: [
            {
                name: "Normal",
                statMods: { strength: +1, dexterity: +1, constitution: +1, wisdom: +1, intelligence: +1, charisma: +1 },
                reference: { source: "PHB", page: 29, url: "https://www.dndbeyond.com/characters/races/human" }
            }, {
                name: "Variant",
                statMods: { additionalPoints: 2 },
                reference: { source: "PHB", page: 31, url: "https://www.dndbeyond.com/characters/races/human#VariantHuman" }
            }
        ]
    }, {
        name: "Kenku",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { dexterity: +2, wisdom: +1 },
        features: [
            {
                name: "Export Forgery", type: "passive",
                description: `
                    You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce
                    forgeries or duplicates of existing objects.
                `
            }, {
                name: "Kenku Training", type: "singleMod",
                description: `
                    You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.
                `
            }, {
                name: "Mimicry", type: "passive",
                description: `
                    You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are
                    imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.
                `
            }
        ],
        reference: { source: "VGM", page: 110 },
        subraces: null
    }, {
        name: "Kobold",
        size: "Small",
        speed: { walk: 30 },
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
    }, {
        name: "Lizardfolk",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { constitution: +2, wisdom: +1 },
        features: [
            {
                name: "Bite", type: "active",
                description: `
                    Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing
                    damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
                `
            }, {
                name: "Cunning Artisan", type: "active",
                usage: { times: 1, timeUnit: "shortRest" },
                description: `
                    As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant
                    creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or ld4 darts or
                    blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as
                    leatherworker's tools.
                `
            }, {
                name: "Hold Breath", type: "passive",
                description: "You can hold your breath for up to 15 minutes at a time."
            }, {
                name: "Hunter's Lore", type: "singleMod",
                description: `
                    You gain proficiency with two of the following skills of your choice:
                    Animal Handling, Nature, Perception, Stealth, and Survival.
                `
            }, {
                name: "Natural Armor", type: "passive",
                description: `
                    You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your
                    natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply
                    as normal while you use your natural armor.
                `
            }, {
                name: "Hungry Jaws", type: "active",
                description: `
                    In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack
                    with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1)
                    equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.
                `
            }
        ],
        reference: { source: "VGM", page: 111 },
        subraces: null
    }, {
        name: "Orc",
        size: "Medium",
        statMods: { strength: +2, constitution: +1 },
        speed: { walk: 30 },
        features: [
            {
                name: "Aggressive", type: "active",
                description: `
                    As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear.
                    You must end this move closer to the enemy than you started.
                `
            }, {
                name: "Menacing", type: "singleMod",
                description: "You are trained in the Intimidation skill."
            },
            CommonFeatures.powerfulBuild,
            {
                name: "Natural Armor", type: "passive",
                description: `
                    You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your
                    natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply
                    as normal while you use your natural armor.
                `
            }, {
                name: "Hungry Jaws", type: "active",
                description: `
                    In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack
                    with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1)
                    equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.
                `
            }
        ],
        reference: { source: "VGM", page: 120 },
        subraces: null
    }, {
        name: "Tabaxi",
        size: "Medium",
        speed: { walk: 30, climb: 20 },
        statMods: { dexterity: +2, charisma: +1 },
        features: [
            {
                name: "Feline Agility", type: "active",
                description: `
                    Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can
                    double your speed until the end of the tum. Once you use this trait, you can't use it again until you move O feet
                    on one of your turns.
                `
            }, {
                name: "Cat's Claws", type: "active",
                usage: { times: 1, timeUnit: "shortRest" },
                description: `
                    Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you
                    can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to ld4 + your Strength modifier,
                    instead of the bludgeoning damage normal for an unarmed strike.
                `
            }, {
                name: "Cat's Talent", type: "singleMod",
                description: "You have proficiency in the Perception and Stealth skills."
            }
        ],
        reference: { source: "VGM", page: 113 },
        subraces: null
    }, {
        name: "Triton",
        size: "Medium",
        speed: { walk: 30, swim: 30 },
        statMods: { strength: +1, constitution: +1, charisma: +1 },
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
    }, {
        name: "Tiefling",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { intelligence: +1, charisma: +2 },
        reference: { source: "PHB", page: 42, url: "https://www.dndbeyond.com/characters/races/tiefling" },
        subraces: null
    }, {
        name: "Yuan-ti Pureblood",
        size: "Medium",
        statMods: { charisma: +2, intelligence: +1 },
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
];
