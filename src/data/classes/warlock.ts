import { Languages, Skills } from "../../data";
import { Classes as ClassesImport } from "./class-list";
import * as ClassModels from "../../models/classes";

namespace Classes {
    export const Warlock: ClassModels.Class = {
        name: "Warlock",
        reference: { source: "PHB", page: 105, url: "https://www.dndbeyond.com/characters/classes/warlock" },
        archetypes: [
            {
                name: "The Archfey",
                reference: {
                    source: "PHB", page: 108,
                    url: ""
                }
            }, {
                name: "The Fiend",
                reference: {
                    source: "PHB", page: 109,
                    url: "https://www.dndbeyond.com/characters/classes/warlock#TheFiend"
                }
            }, {
                name: "The Great Old One",
                reference: {
                    source: "PHB", page: 109,
                    url: ""
                }
            }, {
                name: "The Hexblade",
                reference: {
                    source: "UA", document: "Warlock & Wizard", page: 1,
                    url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=1"
                }
            }, {
                name: "The Raven Queen",
                reference: {
                    source: "UA", document: "Warlock & Wizard", page: 2,
                    url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=2"
                }
            }, {
                name: "The Seeker",
                reference: {
                    source: "UA", document: "The Faithful", page: 1,
                    url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=1"
                }
            }
        ]
    };

    ClassesImport.ClassList[Warlock.name] = Warlock;
};
