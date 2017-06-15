import { Race, Subrace } from "../models/race";

export const Races: Race[] = [
     {
        name: "Aarakocra",
        size: "Medium",
        speed: { walk: 25, fly: 50, climb: 0, swim: 0 },
        reference: { source: "EE", page: 2, url: "https://www.dndbeyond.com/characters/races/aarakocra" },
        subraces: null
    }, {
        name: "Aasimar",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 104, url: "" },
        subraces: [
            {
                name: "Protector",
                reference: { source: "VGM", page: 105, url: "" }
            }, {
                name: "Scourge",
                reference: { source: "VGM", page: 105, url: "" }
            }, {
                name: "Fallen",
                reference: { source: "VGM", page: 105, url: "" }
            }
        ]
    }, {
        name: "Bugbear",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 119, url: "" },
        subraces: null
    }, {
        name: "Dragonborn",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
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
        reference: { source: "PHB", page: 18, url: "https://www.dndbeyond.com/characters/races/dwarf" },
        subraces: [
            {
                name: "Hill",
                reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#HillDwarf" }
            }, {
                name: "Mountain",
                reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#MountainDwarf" }
            }, {
                name: "Duergar",
                reference: { source: "SCG", page: 104, url: "" }
            }
        ]
    }, {
        name: "Elf",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "PHB", page: 21, url: "https://www.dndbeyond.com/characters/races/elf" },
        subraces: [
            {
                name: "High",
                reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#HighElf" }
            }, {
                name: "Wood",
                reference: { source: "PHB", page: 24, url: "https://www.dndbeyond.com/characters/races/elf#WoodElf" }
            }, {
                name: "Drow",
                reference: { source: "PHB", page: 24, url: "" }
            }, {
                name: "Eladrin",
                reference: { source: "DMG", page: 286, url: "" }
            }
        ]
    }, {
        name: "Firbolg",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 106, url: "" },
        subraces: null
    }, {
        name: "Genasi",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "EE", page: 6, url: "https://www.dndbeyond.com/characters/races/genasi" },
        subraces: [
            {
                name: "Air",
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#AirGenasi" }
            }, {
                name: "Earth",
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#EarthGenasi" }
            }, {
                name: "Fire",
                reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#FireGenasi" }
            }, {
                name: "Water",
                reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#WaterGenasi" }
            },
        ]
    }, {
        name: "Gnome",
        size: "Small",
        speed: { walk: 25, fly: 0, climb: 0, swim: 0 },
        reference: { source: "PHB", page: 35, url: "https://www.dndbeyond.com/characters/races/gnome" },
        subraces: [
            {
                name: "Forest",
                reference: { source: "PHB", page: 37, url: "" }
            }, {
                name: "Rock",
                reference: { source: "PHB", page: 37, url: "https://www.dndbeyond.com/characters/races/gnome#RockGnome" }
            }, {
                name: "Deep",
                reference: { source: "EE", page: 4, url: "https://www.dndbeyond.com/characters/races/gnome#DeepGnome" }
            }
        ]
    }, {
        name: "Goblin",
        size: "Small",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 119, url: "" },
        subraces: null
    }, {
        name: "Goliath",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 108, url: "https://www.dndbeyond.com/characters/races/goliath" },
        subraces: null
    }, {
        name: "Half-elf",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "PHB", page: 38, url: "https://www.dndbeyond.com/characters/races/half-elf" },
        subraces: null
    }, {
        name: "Half-orc",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "PHB", page: 40, url: "https://www.dndbeyond.com/characters/races/half-orc" },
        subraces: null
    }, {
        name: "Halfling",
        size: "Small",
        speed: { walk: 25, fly: 0, climb: 0, swim: 0 },
        reference: { source: "PHB", page: 26, url: "https://www.dndbeyond.com/characters/races/halfling" },
        subraces: [
            {
                name: "Lightfoot",
                reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
            }, {
                name: "Stout",
                reference: { source: "PHB", page: 28, url: "https://www.dndbeyond.com/characters/races/halfling#Stout" }
            }
        ]
    }, {
        name: "Hobgoblin",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 119, url: "" },
        subraces: null
    }, {
        name: "Human",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: {
            source: "PHB",
            page: 29,
            url: "https://www.dndbeyond.com/characters/races/human"
        },
        subraces: [
            {
                name: "Normal",
                reference: { source: "PHB", page: 29, url: "https://www.dndbeyond.com/characters/races/human" }
            }, {
                name: "Variant",
                reference: { source: "PHB", page: 31, url: "https://www.dndbeyond.com/characters/races/human#VariantHuman" }
            }
        ]
    }, {
        name: "Kenku",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 110, url: "" },
        subraces: null
    }, {
        name: "Kobold",
        size: "Small",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 119, url: "" },
        subraces: null
    }, {
        name: "Lizardfolk",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 111, url: "" },
        subraces: null
    }, {
        name: "Orc",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 120, url: "" },
        subraces: null
    }, {
        name: "Tabaxi",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 20, swim: 0 },
        reference: { source: "VGM", page: 113, url: "" },
        subraces: null
    }, {
        name: "Triton",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 30 },
        reference: { source: "VGM", page: 113, url: "" },
        subraces: null
    }, {
        name: "Tiefling",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "PHB", page: 42, url: "https://www.dndbeyond.com/characters/races/tiefling" },
        subraces: null
    }, {
        name: "Yuan-ti Pureblood",
        size: "Medium",
        speed: { walk: 30, fly: 0, climb: 0, swim: 0 },
        reference: { source: "VGM", page: 120, url: "" },
        subraces: null
    }
];
