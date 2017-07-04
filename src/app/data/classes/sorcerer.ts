import { Skills } from "app/data";
import * as Weapons from "app/data/weapons";
import { Item } from "app/models/equipment";

import * as ClassModels from "../../models/classes";
import { ItemQuantity } from "../../models/equipment/item-quantity";
import * as Packs from "../packs";
import { ClassList } from "./class-list";

export const Sorcerer: ClassModels.Class = new ClassModels.Class({
    name: "Sorcerer",
    primaryAbility: "CHA",
    hitDie: 6,
    savingThrows: ["CHA", "CON"],
    armorProficiencies: [],
    weaponProficiencies: [{
        proficiencies: [Weapons.Dagger, Weapons.Dart, Weapons.Sling, Weapons.Quarterstaff, Weapons.LightCrossbow]
    }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [
            Skills.Arcana, Skills.Deception, Skills.Insight, Skills.Intimidation, Skills.Persuasion, Skills.Religion
        ], count: 2
    }],
    otherProficiencies: [],
    equipment: [
        {
            items: [
                [Weapons.LightCrossbow, new ItemQuantity(new Item("crossbow bolts"), 20)],
                { items: Weapons.SimpleWeapons, count: 1 }], count: 1
        },
        { items: [new Item("component pouch"), new Item("arcane focus")], count: 1 },
        { items: [Packs.DungeoneerPack, Packs.ExplorerPack], count: 1 },
        { items: [Weapons.Dagger, Weapons.Dagger] }
    ],
    archetypeName: { singular: "Sorcerous Origin", plural: "Sorcerous Origins" },
    reference: { source: "PHB", page: 99, url: "https://www.dndbeyond.com/characters/classes/sorcerer" },
    archetypes: [
        {
            name: "Draconic Bloodline",
            reference: {
                source: "PHB", page: 102,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#DraconicBloodline"
            }
        }, {
            name: "Wild Magic",
            reference: {
                source: "PHB", page: 103,
                url: ""
            }
        }, {
            name: "Storm Sorcerer",
            reference: {
                source: "SCG", page: 137,
                url: ""
            }
        }, {
            name: "Favored Soul",
            reference: {
                source: "UA", document: "Sorcerer", page: 1,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
            }
        }, {
            name: "Phoenix",
            reference: {
                source: "UA", document: "Sorcerer", page: 1,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
            }
        }, {
            name: "Sea",
            reference: {
                source: "UA", document: "Sorcerer", page: 2,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=2"
            }
        }, {
            name: "Stone",
            reference: {
                source: "UA", document: "Sorcerer", page: 3,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=3"
            }
        }
    ]
});

ClassList.push(Sorcerer);
