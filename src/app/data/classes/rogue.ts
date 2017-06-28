import * as ClassModels from "../../models/classes";
import { ClassList } from "./class-list";

export const Rogue: ClassModels.Class = new ClassModels.Class({
    name: "Rogue",
    primaryStat: "DEX",
    savingThrows: ["DEX", "INT"],
    archetypeName: { singular: "Rogueish Archetypes", plural: "Roguish Archetypes" },
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
});

ClassList.push(Rogue);
