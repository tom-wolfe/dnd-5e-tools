import { Skills } from "app/data";
import * as Tools from "app/data/tools";
import * as Weapons from "app/data/weapons";
import { ArmorType } from "app/models/equipment";

import * as ClassModels from "../../models/classes";
import { Item, ItemQuantity } from "../../models/equipment";
import * as Armor from "../armor";
import * as Packs from "../packs";
import { ClassList } from "./class-list";

export const Rogue: ClassModels.Class = new ClassModels.Class({
    name: "Rogue",
    primaryAbility: "DEX",
    hitDie: 8,
    archetypeLevel: 3,
    savingThrows: ["DEX", "INT"],
    armorProficiencies: [{ proficiencies: [ArmorType.Light] }],
    weaponProficiencies: [{
        proficiencies: [
            ...Weapons.SimpleWeapons,
            Weapons.HandCrossbow, Weapons.Longsword, Weapons.Rapier, Weapons.Shortsword
        ]
    }],
    equipment: [
        { items: [Weapons.Rapier, Weapons.Shortsword], count: 1 },
        { items: [[Weapons.Shortbow, new ItemQuantity(new Item("arrows"), 20)], Weapons.Shortsword], count: 1 },
        { items: [Packs.BurglarPack, Packs.DungeoneerPack, Packs.ExplorerPack], count: 1 },
        { items: [Armor.Leather, Weapons.Dagger, Weapons.Dagger, Tools.ThievesTools], count: 1 },
    ],
    toolProficiencies: [{ proficiencies: [Tools.ThievesTools] }],
    skillProficiencies: [{
        proficiencies: [
            Skills.Acrobatics, Skills.Athletics, Skills.Deception, Skills.Insight, Skills.Intimidation, Skills.Investigation,
            Skills.Perception, Skills.Performance, Skills.Persuasion, Skills.SleightOfHand, Skills.Stealth
        ], count: 4
    }],
    otherProficiencies: [],
    archetypeName: { singular: "Rogueish Archetypes", plural: "Roguish Archetypes" },
    reference: { source: "PHB", page: 94, url: "https://www.dndbeyond.com/characters/classes/rogue" },
    archetypes: [
        {
            name: "Thief",
            reference: {
                source: "PHB", page: 97,
                url: "https://www.dndbeyond.com/characters/classes/rogue#Thief"
            }
        }, {
            name: "Assassin",
            reference: {
                source: "PHB", page: 97,
                url: ""
            }
        }, {
            name: "Arcane Trickster",
            castingAbility: "INT",
            reference: {
                source: "PHB", page: 97,
                url: ""
            }
        }, {
            name: "Mastermind",
            reference: {
                source: "SCG", page: 135,
                url: ""
            }
        }, {
            name: "Swashbuckler",
            reference: {
                source: "SCG", page: 135,
                url: ""
            }
        }, {
            name: "Scout",
            reference: {
                source: "UA", document: "Ranger & Rogue", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
            }
        }
    ]
});

ClassList.push(Rogue);
