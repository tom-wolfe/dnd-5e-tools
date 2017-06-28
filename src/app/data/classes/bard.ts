import * as ClassModels from "../../models/classes";
import { ClassList } from "./class-list";

export const Bard: ClassModels.Class = new ClassModels.Class({
    name: "Bard",
    primaryStat: "CHA",
    savingThrows: ["DEX", "CHA"],
    archetypeName: { singular: "Bard College", plural: "Bard Colleges" },
    reference: { source: "PHB", page: 51, url: "https://www.dndbeyond.com/characters/classes/bard" },
    archetypes: [
        {
            name: "College of Glamour",
            reference: {
                source: "UA", document: "Bard", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=1"
            }
        }, {
            name: "College of Lore",
            reference: {
                source: "PHB", page: 54,
                url: ""
            },
        }, {
            name: "College of Satire",
            reference: {
                source: "UA", document: "Kits of Old", page: 2,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page2"
            },
        }, {
            name: "College of Swords",
            reference: {
                source: "UA", document: "Kits of Old", page: 1,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page1"
            },
        }, {
            name: "College of Valor",
            reference: { source: "PHB", page: 55, url: "" },
        }, {
            name: "College of Whispers",
            reference: {
                source: "UA", document: "Bard", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=2"
            },
        }
    ]
});

ClassList.push(Bard);
