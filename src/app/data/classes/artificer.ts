import { Skills } from "app/data/skills";
import * as Tools from "app/data/tools";

import * as Armor from "../../data/armor";
import * as ClassModels from "../../models/classes";
import { ArmorType } from "../../models/equipment";
import { WeaponType } from "../../models/equipment";
import { WeaponList } from "../weapons";
import * as Weapons from "../weapons";
import * as Packs from "../packs";
import { ClassList } from "./class-list";

export const Artificer: ClassModels.Class = new ClassModels.Class({
    name: "Artificer",
    primaryStat: "INT",
    hitDie: 8,
    equipment: [
        {
            items: [
                [{ items: WeaponList.filter(w => w.type === WeaponType.Simple).map(w => [w]), count: 1 }],
                [{ items: WeaponList.filter(w => w.type === WeaponType.Simple).map(w => [w]), count: 1 }]
            ]
        },
        { items: [[Weapons.LightCrossbow, { name: "20 crossbow bolts" }]] },
        { items: [[Armor.ScaleMail], [Armor.StuddedLeather]], count: 1 },
        { items: [[Tools.ThievesTools], Packs.DungeoneerPack] },
    ],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium] }],
    weaponProficiencies: [{ proficiencies: WeaponList.filter(w => w.type === WeaponType.Simple) }],
    toolProficiencies: [
        { proficiencies: [Tools.ThievesTools] },
        { proficiencies: Tools.ToolList, count: 2 },
    ],
    skillProficiencies: [
        {
            proficiencies: [Skills.Arcana, Skills.Deception, Skills.History, Skills.Investigation,
            Skills.Medicine, Skills.Nature, Skills.Religion, Skills.SleightOfHand], count: 3
        },
    ],
    otherProficiencies: [],
    savingThrows: ["INT", "CON"],
    archetypeName: { singular: "Artificer Specialist", plural: "Artificer Specialties" },
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
});

ClassList.push(Artificer);
