import * as RaceModels from "../models/races";

export const Races: RaceModels.Race[] = [
     {
        name: "Aarakocra",
        size: "Medium",
        speed: { walk: 25, fly: 50, climb: 0, swim: 0 },
        statMods: { dexterity: +2, wisdom: +1 },
        reference: { source: "EE", page: 2, url: "https://www.dndbeyond.com/characters/races/aarakocra" },
        subraces: null
    }, {
        name: "Aasimar",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { charisma: +2 },
        reference: { source: "VGM", page: 104, url: "" },
        subraces: [
            {
                name: "Protector", statMods: { wisdom: +1 },
                reference: { source: "VGM", page: 105, url: "" }
            }, {
                name: "Scourge", statMods: { constitution: +1 },
                reference: { source: "VGM", page: 105, url: "" }
            }, {
                name: "Fallen", statMods: { strength: +1 },
                reference: { source: "VGM", page: 105, url: "" }
            }
        ]
    }, {
        name: "Bugbear",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { strength: +2, dexterity: +1 },
        reference: { source: "VGM", page: 119, url: "" },
        subraces: null
    }, {
        name: "Dragonborn",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
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
        speed: { walk: 25, fly: 0, climb: 0, swim: 0 },
        statMods: { constitution: +2 },
        reference: { source: "PHB", page: 18, url: "https://www.dndbeyond.com/characters/races/dwarf" },
        subraces: [
            {
                name: "Hill",
                statMods: { wisdom: +1 },
                reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#HillDwarf" }
            }, {
                name: "Mountain",
                statMods: { strength: +2 },
                reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#MountainDwarf" }
            }, {
                name: "Duergar",
                statMods: { strength: +1 },
                reference: { source: "SCG", page: 104, url: "" }
            }
        ]
    }, {
        name: "Elf",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
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
                reference: { source: "PHB", page: 24, url: "" }
            }, {
                name: "Eladrin",
                statMods: { intelligence: +1 },
                reference: { source: "DMG", page: 286, url: "" }
            }
        ]
    }, {
        name: "Firbolg",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { strength: +1, wisdom: +2 },
        reference: { source: "VGM", page: 106, url: "" },
        subraces: null
    }, {
        name: "Genasi",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { constitution: +2 },
        reference: { source: "EE", page: 6, url: "https://www.dndbeyond.com/characters/races/genasi" },
        subraces: [
            {
                name: "Air",
                statMods: { dexterity: +1 },
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#AirGenasi" }
            }, {
                name: "Earth",
                statMods: { strength: +1 },
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#EarthGenasi" }
            }, {
                name: "Fire",
                statMods: { intelligence: +1 },
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#FireGenasi" }
            }, {
                name: "Water",
                statMods: { wisdom: +1 },
                reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#WaterGenasi" }
            },
        ]
    }, {
        name: "Gnome",
        size: "Small",
        speed: { walk: 25, fly: 0, climb: 0, swim: 0 },
        statMods: { intelligence: +2 },
        reference: { source: "PHB", page: 35, url: "https://www.dndbeyond.com/characters/races/gnome" },
        subraces: [
            {
                name: "Forest",
                statMods: { dexterity: +1 },
                reference: { source: "PHB", page: 37, url: "" }
            }, {
                name: "Rock",
                statMods: { constitution: +1 },
                reference: { source: "PHB", page: 37, url: "https://www.dndbeyond.com/characters/races/gnome#RockGnome" }
            }, {
                name: "Deep",
                statMods: { dexterity: +1 },
                reference: { source: "EE", page: 4, url: "https://www.dndbeyond.com/characters/races/gnome#DeepGnome" }
            }
        ]
    }, {
        name: "Goblin",
        size: "Small",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { dexterity: +2, constitution: +1 },
        reference: { source: "VGM", page: 119, url: "" },
        subraces: null
    }, {
        name: "Goliath",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { strength: +2, constitution: +1 },
        reference: { source: "VGM", page: 108, url: "https://www.dndbeyond.com/characters/races/goliath" },
        subraces: null
    }, {
        name: "Half-elf",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { charisma: +2, additionalPoints: 2 },
        reference: { source: "PHB", page: 38, url: "https://www.dndbeyond.com/characters/races/half-elf" },
        subraces: null
    }, {
        name: "Half-orc",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { strength: +2, constitution: +1 },
        reference: { source: "PHB", page: 40, url: "https://www.dndbeyond.com/characters/races/half-orc" },
        subraces: null
    }, {
        name: "Halfling",
        size: "Small",
        statMods: { dexterity: +2 },
        speed: { walk: 25, fly: 0, climb: 0, swim: 0 },
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
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { constitution: +2, intelligence: +1 },
        reference: { source: "VGM", page: 119, url: "" },
        subraces: null
    }, {
        name: "Human",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
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
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { dexterity: +2, wisdom: +1 },
        reference: { source: "VGM", page: 110, url: "" },
        subraces: null
    }, {
        name: "Kobold",
        size: "Small",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { dexterity: +2, strength: -2 },
        reference: { source: "VGM", page: 119, url: "" },
        subraces: null
    }, {
        name: "Lizardfolk",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { constitution: +2, wisdom: +1 },
        reference: { source: "VGM", page: 111, url: "" },
        subraces: null
    }, {
        name: "Orc",
        size: "Medium",
        statMods: { strength: +2, constitution: +1 },
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 120, url: "" },
        subraces: null
    }, {
        name: "Tabaxi",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 20, swim: 0 },
        statMods: { dexterity: +2, charisma: +1 },
        reference: { source: "VGM", page: 113, url: "" },
        subraces: null
    }, {
        name: "Triton",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 30 },
        statMods: { strength: +1, constitution: +1, charisma: +1 },
        reference: { source: "VGM", page: 113, url: "" },
        subraces: null
    }, {
        name: "Tiefling",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        statMods: { intelligence: +1, charisma: +2 },
        reference: { source: "PHB", page: 42, url: "https://www.dndbeyond.com/characters/races/tiefling" },
        subraces: null
    }, {
        name: "Yuan-ti Pureblood",
        size: "Medium",
        statMods: { charisma: +2, intelligence: +1 },
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 120, url: "" },
        subraces: null
    }
];
