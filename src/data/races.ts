import { Race, Subrace } from "../models/race";

export const Races: Race[] = [
    {
        name: "Dragonborn",
        size: "Medium",
        speed: 30,
        reference: {
            source: "PHB",
            page: 32,
            url: "https://www.dndbeyond.com/characters/races/dragonborn"
        },
        subraces: null
    }, {
        name: "Dwarf",
        size: "Medium",
        speed: 25,
        reference: { source: "PHB", page: 18, url: "https://www.dndbeyond.com/characters/races/dwarf" },
        subraces: [
            {
                name: "Hill",
                reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#HillDwarf" }
            }, {
                name: "Mountain",
                reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#MountainDwarf" }
            },
            {
                name: "Duergar",
                reference: { source: "SCG", page: 104, url: "" }
            }
        ]
    }, {
        name: "Elf",
        size: "Medium",
        speed: 25,
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
            }
        ]
    }, {
        name: "Gnome",
        size: "Small",
        speed: 25,
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
                reference: { source: "SCG", page: 115, url: "https://www.dndbeyond.com/characters/races/gnome#DeepGnome" }
            }
        ]
    }, {
        name: "Halfling",
        size: "Small",
        speed: 25,
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
        name: "Human",
        size: "Medium",
        speed: 30,
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
    }
];
