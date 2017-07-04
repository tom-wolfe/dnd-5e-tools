import { Skills } from "app/data";
import * as Armor from "app/data/armor";

import * as ClassModels from "../../models/classes";
import { ArmorType } from "../../models/equipment";
import { WeaponType } from "../../models/equipment";
import { InstrumentList } from "../instruments";
import * as Instruments from "../instruments";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";

export const Bard: ClassModels.Class = new ClassModels.Class({
    name: "Bard",
    primaryAbility: "CHA",
    castingAbility: "CHA",
    archetypeLevel: 3,
    hitDie: 8,
    savingThrows: ["DEX", "CHA"],
    equipment: [
        { items: [Weapons.Rapier, Weapons.Longsword, { items: Weapons.SimpleWeapons, count: 1 }], count: 1 },
        { items: [Packs.DiplomatPack, Packs.EntertainerPack], count: 1 },
        { items: [Instruments.Lute, { items: Instruments.InstrumentList, count: 1 }], count: 1 },
        { items: [Armor.Leather, Weapons.Dagger] },
    ],
    armorProficiencies: [{ proficiencies: [ArmorType.Light] }],
    weaponProficiencies: [{
        proficiencies: [
            ...Weapons.SimpleWeapons,
            Weapons.HandCrossbow, Weapons.Longsword, Weapons.Rapier, Weapons.Shortsword
        ]
    }],
    toolProficiencies: [{ proficiencies: InstrumentList, count: 3 }],
    skillProficiencies: [{ proficiencies: Skills.SkillList, count: 3 }],
    otherProficiencies: [],
    archetypeName: { singular: "Bard College", plural: "Bard Colleges" },
    reference: { source: "PHB", page: 51, url: "https://www.dndbeyond.com/characters/classes/bard" },
    archetypes: [
        {
            name: "College of Glamour",
            reference: {
                source: "UA", document: "Bard", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=1"
            }
        }, {
            name: "College of Lore",
            reference: {
                source: "PHB", page: 54,
                url: ""
            },
        }, {
            name: "College of Satire",
            reference: {
                source: "UA", document: "Kits of Old", page: 2,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page2"
            },
        }, {
            name: "College of Swords",
            reference: {
                source: "UA", document: "Kits of Old", page: 1,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page1"
            },
        }, {
            name: "College of Valor",
            reference: { source: "PHB", page: 55, url: "" },
        }, {
            name: "College of Whispers",
            reference: {
                source: "UA", document: "Bard", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=2"
            },
        }
    ]
});

ClassList.push(Bard);
