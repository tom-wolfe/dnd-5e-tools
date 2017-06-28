import * as ClassModels from "../../models/classes";
import { ClassList } from "./class-list";

export const Wizard: ClassModels.Class = new ClassModels.Class({
    name: "Wizard",
    primaryStat: "INT",
    archetypeName: { singular: "Arcane Tradition", plural: "Arcane Traditions" },
    reference: { source: "PHB", page: 112, url: "https://www.dndbeyond.com/characters/classes/wizard" },
    archetypes: [
        {
            name: "School of Abjuration",
            reference: {
                source: "PHB", page: 115,
                url: ""
            }
        }, {
            name: "School of Conjuration",
            reference: {
                source: "PHB", page: 116,
                url: ""
            }
        }, {
            name: "School of Divination",
            reference: {
                source: "PHB", page: 116,
                url: ""
            }
        }, {
            name: "School of Enchantment",
            reference: {
                source: "PHB", page: 117,
                url: ""
            }
        }, {
            name: "School of Evocation",
            reference: {
                source: "PHB", page: 117,
                url: "https://www.dndbeyond.com/characters/classes/wizard#SchoolofEvocation"
            }
        }, {
            name: "School of Illusion",
            reference: {
                source: "PHB", page: 118,
                url: ""
            }
        }, {
            name: "School of Necromancy",
            reference: {
                source: "PHB", page: 118,
                url: ""
            }
        }, {
            name: "School of Transmutation",
            reference: {
                source: "PHB", page: 119,
                url: ""
            }
        }, {
            name: "Lore Mastery",
            reference: {
                source: "UA", document: "Warlock & Wizard", page: 5,
                url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=5"
            }
        }, {
            name: "Theurgy",
            reference: {
                source: "UA", document: "The Faithful", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
            }
        }, {
            name: "Artificer",
            reference: {
                source: "UA", document: "Eberron", page: 3,
                url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
            }
        }
    ]
});

ClassList.push(Wizard);
