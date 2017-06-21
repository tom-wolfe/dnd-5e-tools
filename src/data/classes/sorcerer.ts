import { Languages, Skills } from "../../data";
import { ClassList } from "./class-list";
import * as ClassModels from "../../models/classes";

export const Sorcerer: ClassModels.Class = {
    name: "Sorcerer",
    primaryStat: "CHA",
    archetypeName: { singular: "Sorcerous Origin", plural: "Sorcerous Origins" },
    reference: { source: "PHB", page: 99, url: "https://www.dndbeyond.com/characters/classes/sorcerer" },
    archetypes: [
        {
            name: "Draconic Bloodline",
            reference: {
                source: "PHB", page: 102,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#DraconicBloodline"
            }
        }, {
            name: "Wild Magic",
            reference: {
                source: "PHB", page: 103,
                url: ""
            }
        }, {
            name: "Storm Sorcerer",
            reference: {
                source: "SCG", page: 137,
                url: ""
            }
        }, {
            name: "Favored Soul",
            reference: {
                source: "UA", document: "Sorcerer", page: 1,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
            }
        }, {
            name: "Phoenix",
            reference: {
                source: "UA", document: "Sorcerer", page: 1,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
            }
        }, {
            name: "Sea",
            reference: {
                source: "UA", document: "Sorcerer", page: 2,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=2"
            }
        }, {
            name: "Stone",
            reference: {
                source: "UA", document: "Sorcerer", page: 3,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=3"
            }
        }
    ]
};

ClassList[Sorcerer.name] = Sorcerer;
