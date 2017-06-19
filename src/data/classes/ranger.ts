import { Languages, Skills } from "../../data";
import { Classes as ClassesImport } from "./class-list";
import * as ClassModels from "../../models/classes";

namespace Classes {
    export const Ranger: ClassModels.Class = {
        name: "Ranger",
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

    ClassesImport.ClassList[Ranger.name] = Ranger;
};
