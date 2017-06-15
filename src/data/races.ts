import { Race, Subrace } from "../models/race";

export const Races: Race[] = [
    {
        name: "Human",
        size: "Medium",
        speed: 30,
        reference: {
            source: "PHB",
            page: 192,
            url: "https://www.dndbeyond.com/characters/races/human"
        },
        subraces: [
            { name: "Normal" },
            { name: "Variant" }
        ]
    }
];
