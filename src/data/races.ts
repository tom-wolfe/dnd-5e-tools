import * as RaceModels from "../models/races";

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
        reference: { source: "VGM", page: 104 },
        subraces: [
            {
                name: "Protector", statMods: { wisdom: +1 },
                reference: { source: "VGM", page: 105 }
            }, {
                name: "Scourge", statMods: { constitution: +1 },
                reference: { source: "VGM", page: 105 }
            }, {
                name: "Fallen", statMods: { strength: +1 },
                reference: { source: "VGM", page: 105 }
            }
        ]
    }, {
        name: "Bugbear",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { strength: +2, dexterity: +1 },
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
                    }, {
                        name: "Sunlight Sensitivity", type: "passive",
                        description: `
                            You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you,
                            the target of your attack, or whatever you are trying to perceive is in direct sunlight..
                        `
                    }
                ],
                reference: { source: "SCG", page: 104 }
            }
        ]
    }, {
        name: "Elf",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { dexterity: +2 },
        reference: { source: "PHB", page: 21, url: "https://www.dndbeyond.com/characters/races/elf" },
        subraces: [
            {
                name: "High",
                statMods: { intelligence: +1 },
                reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#HighElf" }
            }, {
                name: "Wood",
                statMods: { wisdom: +1 },
                reference: { source: "PHB", page: 24, url: "https://www.dndbeyond.com/characters/races/elf#WoodElf" }
            }, {
                name: "Drow",
                statMods: { charisma: +1 },
                reference: { source: "PHB", page: 24 }
            }, {
                name: "Eladrin",
                statMods: { intelligence: +1 },
                reference: { source: "DMG", page: 286 }
            }
        ]
    }, {
        name: "Firbolg",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { strength: +1, wisdom: +2 },
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
        reference: { source: "VGM", page: 119 },
        subraces: null
    }, {
        name: "Goliath",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { strength: +2, constitution: +1 },
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
        reference: { source: "VGM", page: 110 },
        subraces: null
    }, {
        name: "Kobold",
        size: "Small",
        speed: { walk: 30 },
        statMods: { dexterity: +2, strength: -2 },
        reference: { source: "VGM", page: 119 },
        subraces: null
    }, {
        name: "Lizardfolk",
        size: "Medium",
        speed: { walk: 30 },
        statMods: { constitution: +2, wisdom: +1 },
        reference: { source: "VGM", page: 111 },
        subraces: null
    }, {
        name: "Orc",
        size: "Medium",
        statMods: { strength: +2, constitution: +1 },
        speed: { walk: 30 },
        reference: { source: "VGM", page: 120 },
        subraces: null
    }, {
        name: "Tabaxi",
        size: "Medium",
        speed: { walk: 30, climb: 20 },
        statMods: { dexterity: +2, charisma: +1 },
        reference: { source: "VGM", page: 113 },
        subraces: null
    }, {
        name: "Triton",
        size: "Medium",
        speed: { walk: 30, swim: 30 },
        statMods: { strength: +1, constitution: +1, charisma: +1 },
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
        reference: { source: "VGM", page: 120 },
        subraces: null
    }
];
