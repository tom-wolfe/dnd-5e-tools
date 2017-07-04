import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType, Item } from "../../models/equipment";
import { ItemQuantity } from "../../models/equipment/item-quantity";
import * as Armor from "../armor";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";

export const Warlock: ClassModels.Class = new ClassModels.Class({
    name: "Warlock",
    primaryAbility: "CHA",
    hitDie: 8,
    savingThrows: ["WIS", "CHA"],
    armorProficiencies: [{ proficiencies: [ArmorType.Light] }],
    weaponProficiencies: [{ proficiencies: Weapons.SimpleWeapons }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [
            Skills.Arcana, Skills.Deception, Skills.History, Skills.Intimidation, Skills.Investigation, Skills.Nature, Skills.Religion
        ], count: 2
    }],
    otherProficiencies: [],
    equipment: [
        {
            items: [[Weapons.LightCrossbow, new ItemQuantity(new Item("crossbow bolts"), 20)],
            { items: Weapons.SimpleWeapons, count: 1 }], count: 1
        },
        { items: [new Item("component pouch"), new Item("arcane focus")], count: 1 },
        { items: [Packs.DungeoneerPack, Packs.ScholarPack], count: 1 },
        { items: [Armor.Leather, Weapons.Dagger, Weapons.Dagger, { items: Weapons.SimpleWeapons, count: 1 }] }
    ],
    archetypeName: { singular: "Otherworldly Patron", plural: "Otherworldly Patrons" },
    reference: { source: "PHB", page: 105, url: "https://www.dndbeyond.com/characters/classes/warlock" },
    archetypes: [
        {
            name: "The Archfey",
            reference: {
                source: "PHB", page: 108,
                url: ""
            }
        }, {
            name: "The Fiend",
            reference: {
                source: "PHB", page: 109,
                url: "https://www.dndbeyond.com/characters/classes/warlock#TheFiend"
            }
        }, {
            name: "The Great Old One",
            reference: {
                source: "PHB", page: 109,
                url: ""
            }
        }, {
            name: "The Hexblade",
            reference: {
                source: "UA", document: "Warlock & Wizard", page: 1,
                url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=1"
            }
        }, {
            name: "The Raven Queen",
            reference: {
                source: "UA", document: "Warlock & Wizard", page: 2,
                url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=2"
            }
        }, {
            name: "The Seeker",
            reference: {
                source: "UA", document: "The Faithful", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=1"
            }
        }
    ]
});

ClassList.push(Warlock);
