import { Skills } from "app/data";
import * as Armor from "app/data/armor";
import * as Packs from "app/data/packs";
import * as Tools from "app/data/tools";
import * as Weapons from "app/data/weapons";
import * as _ from "lodash";

import * as ClassModels from "../../models/classes";
import { ArmorType, WeaponProperty, WeaponType, Item } from "../../models/equipment";
import { ClassList } from "./class-list";


export const Druid: ClassModels.Class = new ClassModels.Class({
    name: "Druid",
    primaryAbility: "WIS",
    castingAbility: "WIS",
    hitDie: 8,
    savingThrows: ["INT", "WIS"],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Shield] }],
    weaponProficiencies: [{
        proficiencies: [
            Weapons.Club, Weapons.Dagger, Weapons.Dart, Weapons.Javelin, Weapons.Mace, Weapons.Quarterstaff, Weapons.Scimitar,
            Weapons.Sickle, Weapons.Sling, Weapons.Spear
        ]
    }],
    toolProficiencies: [{ proficiencies: [Tools.HerbalismKit] }],
    skillProficiencies: [{
        proficiencies: [
            Skills.Arcana, Skills.AnimalHandling, Skills.Insight, Skills.Medicine, Skills.Nature, Skills.Perception, Skills.Religion,
            Skills.Survival
        ], count: 2
    }],
    otherProficiencies: [],
    equipment: [
        { items: [Armor.Shield, { items: Weapons.SimpleWeapons, count: 1 }], count: 1 },
        { items: [Weapons.Scimitar, { items: Weapons.SimpleMeleeWeapons, count: 1 }], count: 1 },
        { items: [Armor.Leather, Packs.ExplorerPack, new Item("Druidic focus")], count: 1 }
    ],
    archetypeName: { singular: "Druid Circle", plural: "Druid Circles" },
    reference: { source: "PHB", page: 64, url: "https://www.dndbeyond.com/characters/classes/druid" },
    archetypes: [
        {
            name: "Circle of Dreams",
            reference: {
                source: "UA", document: "Druid", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
            }
        }, {
            name: "Circle of the Land",
            reference: {
                source: "PHB", page: 68,
                url: "https://www.dndbeyond.com/characters/classes/druid#CircleOfTheLand"
            }
        }, {
            name: "Circle of the Moon",
            reference: {
                source: "PHB", page: 69,
                url: ""
            }
        }, {
            name: "Circle of the Shepherd",
            reference: {
                source: "UA", document: "Druid", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
            }
        }, {
            name: "Circle of Twilight",
            reference: {
                source: "UA", document: "Druid", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=2"
            }
        },
    ]
});

ClassList.push(Druid);
