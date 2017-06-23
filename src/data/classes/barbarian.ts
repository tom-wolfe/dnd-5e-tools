import * as ClassModels from "../../models/classes";
import { ClassList } from "./class-list";

export const Barbarian: ClassModels.Class = {
    name: "Barbarian",
    primaryStat: "STR",
    archetypeName: { singular: "Primal Path", plural: "Primal Paths" },
    reference: { source: "PHB", page: 46, url: "https://www.dndbeyond.com/characters/classes/barbarian" },
    archetypes: [
        {
            name: "Path of the Ancestral Guardian",
            reference: {
                source: "UA", document: "Barbarian", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
            },
        }, {
            name: "Path of the Beserker",
            reference: {
                source: "PHB", page: 49,
                url: "https://www.dndbeyond.com/characters/classes/barbarian#PathoftheBerserker"
            },
        }, {
            name: "Path of the Storm Herald",
            reference: {
                source: "UA", document: "Barbarian", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
            },
        }, {
            name: "Path of the Totem",
            reference: { source: "PHB", page: 50, url: "" },
        }, {
            name: "Path of the Zealot",
            reference: {
                source: "UA", document: "Barbarian", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
            },
        },
    ]
};

ClassList[Barbarian.name] = Barbarian;
