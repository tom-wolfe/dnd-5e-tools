import { Languages, Skills } from "../../data";
import { Classes as ClassesImport } from "./class-list";
import * as ClassModels from "../../models/classes";

namespace Classes {
    export const Rogue: ClassModels.Class = {
        name: "Rogue",
        primaryStat: "DEX",
        reference: { source: "PHB", page: 94, url: "https://www.dndbeyond.com/characters/classes/rogue" },
        archetypes: [
            {
                name: "Thief",
                reference: {
                    source: "PHB", page: 97,
                    url: "https://www.dndbeyond.com/characters/classes/rogue#Thief"
                }
            }, {
                name: "Assassin",
                reference: {
                    source: "PHB", page: 97,
                    url: ""
                }
            }, {
                name: "Arcane Trickster",
                reference: {
                    source: "PHB", page: 97,
                    url: ""
                }
            }, {
                name: "Mastermind",
                reference: {
                    source: "SCG", page: 135,
                    url: ""
                }
            }, {
                name: "Swashbuckler",
                reference: {
                    source: "SCG", page: 135,
                    url: ""
                }
            }, {
                name: "Scout",
                reference: {
                    source: "UA", document: "Ranger & Rogue", page: 2,
                    url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
                }
            }
        ]
    };

    ClassesImport.ClassList[Rogue.name] = Rogue;
};
