import { Languages, Skills } from "../../data";
import { Classes as ClassesImport } from "./class-list";
import * as ClassModels from "../../models/classes";

namespace Classes {
    export const Artificer: ClassModels.Class = {
        name: "Artificer",
        nameFormat: "{class}} {{archetype}}",
        reference: { source: "UA", page: 1, url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=1" },
        archetypes: [
            {
                name: "Alchemist",
                reference: {
                    source: "UA", page: 5,
                    url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=5"
                },
            }, {
                name: "Gunsmith",
                reference: {
                    source: "UA", page: 6,
                    url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=6"
                },
            }
        ]
    };

    ClassesImport.ClassList[Artificer.name] = Artificer;
};
