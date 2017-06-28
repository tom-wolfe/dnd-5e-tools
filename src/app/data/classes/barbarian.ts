import * as ClassModels from "../../models/classes";
import { ArmorType } from "../../models/equipment";
import { WeaponType } from "../../models/equipment";
import { WeaponList } from "../weapons";
import { ClassList } from "./class-list";
import { Skills } from "app/data";
import * as Packs from "../packs";
import * as Weapons from "../weapons";

export const Barbarian: ClassModels.Class = new ClassModels.Class({
    name: "Barbarian",
    primaryStat: "STR",
    hitDie: 12,
    equipment: [
        {
            items: [
                Weapons.Greataxe,
                { items: WeaponList.filter(w => w.type === WeaponType.Martial).map(w => [w]), count: 1 }
            ], count: 1
        },
        {
            items: [
                [Weapons.Handaxe, Weapons.Handaxe],
                { items: WeaponList.filter(w => w.type === WeaponType.Simple).map(w => [w]), count: 1 }
            ], count: 1
        },
        { items: [[Weapons.Javelin, Weapons.Javelin, Weapons.Javelin, Weapons.Javelin], Packs.ExplorerPack] },
    ],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Shield] }],
    weaponProficiencies: [{ proficiencies: WeaponList }],
    toolProficiencies: [],
    skillProficiencies: [
        {
            proficiencies: [Skills.AnimalHandling, Skills.Athletics, Skills.Intimidation, Skills.Nature,
            Skills.Perception, Skills.Survival], count: 2
        },
    ],
    otherProficiencies: [],
    savingThrows: ["STR", "CON"],
    archetypeName: { singular: "Primal Path", plural: "Primal Paths" },
    reference: { source: "PHB", page: 46, url: "https://www.dndbeyond.com/characters/classes/barbarian" },
    archetypes: [
        {
            name: "Path of the Ancestral Guardian",
            reference: {
                source: "UA", document: "Barbarian", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
            },
        }, {
            name: "Path of the Beserker",
            reference: {
                source: "PHB", page: 49,
                url: "https://www.dndbeyond.com/characters/classes/barbarian#PathoftheBerserker"
            },
        }, {
            name: "Path of the Storm Herald",
            reference: {
                source: "UA", document: "Barbarian", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
            },
        }, {
            name: "Path of the Totem",
            reference: { source: "PHB", page: 50, url: "" },
        }, {
            name: "Path of the Zealot",
            reference: {
                source: "UA", document: "Barbarian", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
            },
        },
    ]
});

ClassList.push(Barbarian);
