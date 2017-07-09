import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType, Item } from "../../models/equipment";
import { FeatureType } from "../../models/features";
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
    features: [
        {
            level: 1, name: "Divine Sense", type: FeatureType.Passive,
            reference: { source: "PHB", page: 84, url: "https://www.dndbeyond.com/characters/classes/paladin#DivineSense" }
        }, {
            level: 1, name: "Lay on Hands", type: FeatureType.Passive,
            reference: { source: "PHB", page: 84, url: "https://www.dndbeyond.com/characters/classes/paladin#LayonHands" }
        }, {
            level: 2, name: "Fighting Style", type: FeatureType.Passive,
            reference: { source: "PHB", page: 84, url: "https://www.dndbeyond.com/characters/classes/paladin#FightingStyle" }
        }, {
            level: 2, name: "Spellcasting", type: FeatureType.Passive,
            reference: { source: "PHB", page: 84, url: "https://www.dndbeyond.com/characters/classes/paladin#Spellcasting" }
        }, {
            level: 2, name: "Divine Smite", type: FeatureType.Passive,
            reference: { source: "PHB", page: 85, url: "https://www.dndbeyond.com/characters/classes/paladin#DivineSmite" }
        }, {
            level: 3, name: "Divine Health", type: FeatureType.Passive,
            reference: { source: "PHB", page: 85, url: "https://www.dndbeyond.com/characters/classes/paladin#DivineHealth" }
        }, {
            level: 5, name: "Extra Attack", type: FeatureType.Passive,
            reference: { source: "PHB", page: 85, url: "https://www.dndbeyond.com/characters/classes/paladin#ExtraAttack" }
        }, {
            level: 6, name: "Aura of Protection", type: FeatureType.Passive,
            reference: { source: "PHB", page: 85, url: "https://www.dndbeyond.com/characters/classes/paladin#AuraofProtection" }
        }, {
            level: 10, name: "Aura of Courage", type: FeatureType.Passive,
            reference: { source: "PHB", page: 85, url: "https://www.dndbeyond.com/characters/classes/paladin#AuraofCourage" }
        }, {
            level: 11, name: "Improved Divine Smite", type: FeatureType.Passive,
            reference: { source: "PHB", page: 85, url: "https://www.dndbeyond.com/characters/classes/paladin#ImprovedDivineSmite" }
        }, {
            level: 14, name: "Cleansing Touch", type: FeatureType.Passive,
            reference: { source: "PHB", page: 85, url: "https://www.dndbeyond.com/characters/classes/paladin#CleansingTouch" }
        }
    ],
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
            features: [
                {
                    level: 3, name: "Channel Divinity: Sacred Weapons", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 86, url: "https://www.dndbeyond.com/characters/classes/paladin#SacredWeapon" }
                }, {
                    level: 3, name: "Channel Divinity: Turn the Unholy", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 86, url: "https://www.dndbeyond.com/characters/classes/paladin#TurntheUnholy" }
                }, {
                    level: 7, name: "Aura of Devotion", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 86, url: "https://www.dndbeyond.com/characters/classes/paladin#AuraofDevotion" }
                }, {
                    level: 15, name: "Purity of Spirit", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 86, url: "https://www.dndbeyond.com/characters/classes/paladin#PurityofSpirit" }
                }, {
                    level: 20, name: "Holy Nimbus", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 86, url: "https://www.dndbeyond.com/characters/classes/paladin#HolyNimbus" }
                },
            ],
            reference: {
                source: "PHB", page: 85,
                url: "https://www.dndbeyond.com/characters/classes/paladin#OathOfDevotion"
            }
        }, {
            name: "Oath of the Ancients",
            features: [
                { level: 3, name: "Channel Divinity: Nature's Wrath", type: FeatureType.Passive, reference: { source: "PHB", page: 87 } },
                {
                    level: 3, name: "Channel Divinity: Turn the Faithless", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 87 }
                },
                { level: 7, name: "Aura of Warding", type: FeatureType.Passive, reference: { source: "PHB", page: 87 } },
                { level: 15, name: "Undying Sentinel", type: FeatureType.Passive, reference: { source: "PHB", page: 87 } },
                { level: 20, name: "Elder Champion", type: FeatureType.Passive, reference: { source: "PHB", page: 87 } },
            ],
            reference: { source: "PHB", page: 86 }
        }, {
            name: "Oath of Vengeance",
            features: [
                { level: 3, name: "Channel Divinity: Abjure Enemy", type: FeatureType.Passive, reference: { source: "PHB", page: 88 } },
                {
                    level: 3, name: "Channel Divinity: Vow of Enmity", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 88 }
                },
                { level: 7, name: "Relentless Avenger", type: FeatureType.Passive, reference: { source: "PHB", page: 88 } },
                { level: 15, name: "Soul of Vengeance", type: FeatureType.Passive, reference: { source: "PHB", page: 88 } },
                { level: 20, name: "Avenging Angel", type: FeatureType.Passive, reference: { source: "PHB", page: 88 } },
            ],
            reference: { source: "PHB", page: 87 }
        }, {
            name: "Oath of Conquest",
            features: [
                {
                    level: 3, name: "Channel Divinity: Conquering Presence", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=4"
                    }
                },
                {
                    level: 3, name: "Channel Divinity: Guided Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=4"
                    }
                },
                {
                    level: 7, name: "Aura of Conquest", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=4"
                    }
                },
                {
                    level: 15, name: "Scornful Rebuke", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=4"
                    }
                },
                {
                    level: 20, name: "Invincible Conqueror", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=4"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Revised Class Options", page: 3,
                url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=3"
            }
        }, {
            name: "Oath of Treachery",
            features: [
                {
                    level: 3, name: "Channel Divinity: Conjure Duplicate", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Paladin", page: 2,
                        url: "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf#page=2"
                    }
                },
                {
                    level: 3, name: "Channel Divinity: Poison Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Paladin", page: 2,
                        url: "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf#page=2"
                    }
                },
                {
                    level: 7, name: "Aura of Treachery", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Paladin", page: 2,
                        url: "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf#page=2"
                    }
                },
                {
                    level: 15, name: "Blackguard's Escape", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Paladin", page: 3,
                        url: "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf#page=3"
                    }
                },
                {
                    level: 20, name: "Icon of Deceit", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Paladin", page: 3,
                        url: "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf#page=3"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Paladin", page: 2,
                url: "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf#page=2"
            }
        },
    ]
});

ClassList.push(Paladin);
