import { Languages, Skills } from "../../data";
import { Classes as ClassesImport } from "./class-list";
import * as ClassModels from "../../models/classes";

namespace Classes {
    export const Druid: ClassModels.Class = {
        name: "Druid",
        reference: { source: "PHB", page: 64, url: "https://www.dndbeyond.com/characters/classes/druid" },
        archetypes: [
            {
                name: "Circle of Dreams",
                reference: {
                    source: "UA", document: "Druid", page: 1,
                    url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
                }
            }, {
                name: "Circle of the Land",
                reference: {
                    source: "PHB", page: 68,
                    url: "https://www.dndbeyond.com/characters/classes/druid#CircleOfTheLand"
                }
            }, {
                name: "Circle of the Moon",
                reference: {
                    source: "PHB", page: 69,
                    url: ""
                }
            }, {
                name: "Circle of the Shepherd",
                reference: {
                    source: "UA", document: "Druid", page: 1,
                    url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
                }
            }, {
                name: "Circle of Twilight",
                reference: {
                    source: "UA", document: "Druid", page: 2,
                    url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=2"
                }
            },
        ]
    };

    ClassesImport.ClassList[Druid.name] = Druid;
};
