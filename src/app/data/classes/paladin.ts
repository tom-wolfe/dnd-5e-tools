import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType, Item } from "../../models/equipment";
import * as Armor from "../armor";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";

export const Paladin: ClassModels.Class = new ClassModels.Class({
    name: "Paladin",
    primaryAbility: "STR",
    castingAbility: "CHA",
    archetypeLevel: 3,
    hitDie: 10,
    savingThrows: ["STR", "CHA"],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Heavy, ArmorType.Shield] }],
    weaponProficiencies: [{ proficiencies: Weapons.WeaponList }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [
            Skills.Athletics, Skills.Insight, Skills.Intimidation, Skills.Medicine, Skills.Persuasion, Skills.Religion
        ], count: 2
    }],
    otherProficiencies: [],
    equipment: [
        {
            items: [
                [Armor.Shield, { items: Weapons.MartialWeapons, count: 1 }],
                [{ items: Weapons.MartialWeapons, count: 1 }, { items: Weapons.MartialWeapons, count: 1 }]
            ], count: 1
        },
        {
            items: [
                [Weapons.Javelin, Weapons.Javelin, Weapons.Javelin, Weapons.Javelin, Weapons.Javelin],
                { items: Weapons.SimpleMeleeWeapons, count: 1 }
            ], count: 1
        },
        { items: [Packs.ExplorerPack, Packs.PriestPack], count: 1 },
        { items: [Armor.ChainMail, new Item("holy symbol")], count: 1 },
    ],
    archetypeName: { singular: "Sacred Oath", plural: "Sacred Oaths" },
    reference: { source: "PHB", page: 82, url: "https://www.dndbeyond.com/characters/classes/paladin" },
    archetypes: [
        {
            name: "Oathbreaker",
            reference: {
                source: "DMG", page: 97
            }
        }, {
            name: "Oath of Devotion",
            reference: {
                source: "PHB", page: 85,
                url: "https://www.dndbeyond.com/characters/classes/paladin#OathOfDevotion"
            }
        }, {
            name: "Oath of the Ancients",
            reference: {
                source: "PHB", page: 86,
                url: ""
            }
        }, {
            name: "Oath of Vengeance",
            reference: {
                source: "PHB", page: 87,
                url: ""
            }
        }, {
            name: "Oath of Conquest",
            reference: {
                source: "UA", document: "Paladin", page: 1,
                url: "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf#page=1"
            }
        }, {
            name: "Oath of Treachery",
            reference: {
                source: "UA", document: "Paladin", page: 2,
                url: "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf#page=2"
            }
        },
    ]
});

ClassList.push(Paladin);
