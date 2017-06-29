import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType, Item } from "../../models/equipment";
import * as Armor from "../armor";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";

export const Ranger: ClassModels.Class = new ClassModels.Class({
    name: "Ranger",
    primaryStat: "DEX",
    hitDie: 10,
    savingThrows: ["DEX", "WIS"],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Shield] }],
    weaponProficiencies: [{ proficiencies: Weapons.WeaponList }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [
            Skills.AnimalHandling, Skills.Athletics, Skills.Insight, Skills.Investigation, Skills.Nature,
            Skills.Perception, Skills.Stealth, Skills.Survival
        ], count: 3
    }],
    equipment: [
        { items: [Armor.ScaleMail, Armor.Leather], count: 1 },
        { items: [Packs.DungeoneerPack, Packs.ExplorerPack], count: 1 },
        { items: [Weapons.Longbow, new Item({ name: "20 arrows" })], count: 1 },
        {
            items: [
                [Weapons.Shortsword, Weapons.Shortsword],
                [{ items: Weapons.SimpleWeapons, count: 1 }, { items: Weapons.SimpleWeapons, count: 1 }]
            ], count: 1
        },
    ],
    otherProficiencies: [],
    archetypeName: { singular: "Ranger Archetype", plural: "Ranger Archetypes" },
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
});

ClassList.push(Ranger);
