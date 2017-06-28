import * as ClassModels from "../../models/classes";
import { ClassList } from "./class-list";

export const Monk: ClassModels.Class = new ClassModels.Class();
Object.assign(Monk, {
    name: "Monk",
    primaryStat: "DEX",
    archetypeName: { singular: "Monastic Tradition", plural: "Monastic Traditions" },
    reference: { source: "PHB", page: 76, url: "https://www.dndbeyond.com/characters/classes/monk" },
    archetypes: [
        {
            name: "Way of the Open Hand",
            reference: {
                source: "PHB", page: 79,
                url: "https://www.dndbeyond.com/characters/classes/monk#WayOfTheOpenHand"
            }
        }, {
            name: "Way of the Shadow",
            reference: {
                source: "PHB", page: 80,
                url: ""
            }
        }, {
            name: "Way of the Four Elements",
            reference: {
                source: "PHB", page: 73,
                url: ""
            }
        }, {
            name: "Way of the Kensei",
            reference: {
                source: "UA", document: "Monk", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=1"
            }
        }, {
            name: "Way of Tranquility",
            reference: {
                source: "UA", document: "Monk", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=1"
            }
        },
    ]
});

ClassList.push(Monk);
