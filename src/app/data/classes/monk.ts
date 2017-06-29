import { Skills } from "app/data";
import * as Weapons from "app/data/weapons";
import * as Packs from "app/data/packs";
import * as _ from "lodash";

import * as ClassModels from "../../models/classes";
import { WeaponType } from "../../models/equipment";
import { ArtisanToolList } from "../artisan-tools";
import { InstrumentList } from "../instruments";
import { ClassList } from "./class-list";

export const Monk: ClassModels.Class = new ClassModels.Class({
    name: "Monk",
    primaryStat: "DEX",
    hitDie: 8,
    savingThrows: ["STR", "DEX"],
    armorProficiencies: [],
    weaponProficiencies: [{ proficiencies: [...Weapons.SimpleWeapons, Weapons.Shortsword] }],
    toolProficiencies: [{ proficiencies: _.union(ArtisanToolList, InstrumentList), count: 1 }],
    skillProficiencies: [{
        proficiencies: [Skills.Acrobatics, Skills.Athletics, Skills.History, Skills.Insight, Skills.Religion, Skills.Stealth], count: 2
    }],
    otherProficiencies: [],
    equipment: [
        { items: [Weapons.Shortsword, Weapons.SimpleWeapons], count: 1 },
        { items: [Packs.ExplorerPack, Packs.DungeoneerPack], count: 1 },
        { items: [{ name: "10 darts" }], count: 1 },

    ],
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
