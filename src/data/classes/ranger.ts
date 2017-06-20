import { Languages, Skills } from "../../data";
import { ClassList } from "./class-list";
import * as ClassModels from "../../models/classes";

export const Ranger: ClassModels.Class = {
    name: "Ranger",
    primaryStat: "DEX",
    reference: { source: "PHB", page: 89, url: "https://www.dndbeyond.com/characters/classes/ranger" },
    archetypes: [
        {
            name: "Hunter",
            reference: {
                source: "PHB", page: 93,
                url: "https://www.dndbeyond.com/characters/classes/ranger#Hunter"
            }
        }, {
            name: "Beast Master",
            reference: {
                source: "PHB", page: 93,
                url: ""
            }
        }, {
            name: "Horizon Walker",
            reference: {
                source: "UA", document: "Ranger & Rogue", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=1"
            }
        }, {
            name: "Primeval Guardian",
            reference: {
                source: "UA", document: "Ranger & Rogue", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
            }
        },
    ]
};

ClassList[Ranger.name] = Ranger;
