import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType, Item, ItemQuantity } from "../../models/equipment";
import { FeatureType } from "../../models/features";
import * as Armor from "../armor";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";

export const Ranger: ClassModels.Class = new ClassModels.Class({
    name: "Ranger",
    primaryAbility: "DEX",
    castingAbility: "WIS",
    archetypeLevel: 3,
    hitDie: 10,
    savingThrows: ["DEX", "WIS"],
    abilityScoreImprovements: [ 4, 8, 12, 16, 19 ],
    features: [
        {
            level: 1, name: "Favored Enemy", type: FeatureType.Passive,
            reference: { source: "PHB", page: 91, url: "https://www.dndbeyond.com/characters/classes/ranger#FavoredEnemy" }
        }, {
            level: 1, name: "Natural Enemy", type: FeatureType.Passive,
            reference: { source: "PHB", page: 91, url: "https://www.dndbeyond.com/characters/classes/ranger#NaturalEnemy" }
        }, {
            level: 2, name: "Fighting Style", type: FeatureType.Passive,
            reference: { source: "PHB", page: 91, url: "https://www.dndbeyond.com/characters/classes/ranger#FightingStyle" }
        }, {
            level: 2, name: "Spellcasting", type: FeatureType.Passive,
            reference: { source: "PHB", page: 91, url: "https://www.dndbeyond.com/characters/classes/ranger#Spellcasting" }
        }, {
            level: 3, name: "Ranger Archetype", type: FeatureType.Passive,
            reference: { source: "PHB", page: 92, url: "https://www.dndbeyond.com/characters/classes/ranger#RangerArchetype" }
        }, {
            level: 3, name: "Primeval Awareness", type: FeatureType.Passive,
            reference: { source: "PHB", page: 92, url: "https://www.dndbeyond.com/characters/classes/ranger#PrimevalAwareness" }
        }, {
            level: 5, name: "Extra Attack", type: FeatureType.Passive,
            reference: { source: "PHB", page: 92, url: "https://www.dndbeyond.com/characters/classes/ranger#ExtraAttack" }
        }, {
            level: 8, name: "Land's Stride", type: FeatureType.Passive,
            reference: { source: "PHB", page: 92, url: "https://www.dndbeyond.com/characters/classes/ranger#LandsStride" }
        }, {
            level: 10, name: "Hide in Plain Sight", type: FeatureType.Passive,
            reference: { source: "PHB", page: 92, url: "https://www.dndbeyond.com/characters/classes/ranger#HideinPlainSight" }
        }, {
            level: 14, name: "Vanish", type: FeatureType.Passive,
            reference: { source: "PHB", page: 92, url: "https://www.dndbeyond.com/characters/classes/ranger#Vanish" }
        }, {
            level: 18, name: "Feral Senses", type: FeatureType.Passive,
            reference: { source: "PHB", page: 92, url: "https://www.dndbeyond.com/characters/classes/ranger#FeralSenses" }
        }, {
            level: 20, name: "Foe Slayer", type: FeatureType.Passive,
            reference: { source: "PHB", page: 92, url: "https://www.dndbeyond.com/characters/classes/ranger#FoeSlayer" }
        }
    ],
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
        { items: [Weapons.Longbow, new ItemQuantity(new Item("arrows"), 20)], count: 1 },
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
            features: [
                {
                    level: 3, name: "Hunter's Prey", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 93, url: "https://www.dndbeyond.com/characters/classes/ranger#HuntersPrey" }
                }, {
                    level: 7, name: "Defensive Tactics", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 93, url: "https://www.dndbeyond.com/characters/classes/ranger#DefensiveTactics" }
                }, {
                    level: 11, name: "Multiattack", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 93, url: "https://www.dndbeyond.com/characters/classes/ranger#Multiattack" }
                }, {
                    level: 15, name: "Superior Hunter's Defense", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 93, url: "https://www.dndbeyond.com/characters/classes/ranger#SuperiorHuntersDefense"
                    }
                }
            ],
            reference: {
                source: "PHB", page: 93,
                url: "https://www.dndbeyond.com/characters/classes/ranger#Hunter"
            }
        }, {
            name: "Beast Master",
            features: [
                { level: 3, name: "Ranger's Companion", type: FeatureType.Passive, reference: { source: "PHB", page: 93 } },
                { level: 7, name: "Exceptional Training", type: FeatureType.Passive, reference: { source: "PHB", page: 93 } },
                { level: 11, name: "Bestial Fury", type: FeatureType.Passive, reference: { source: "PHB", page: 93 } },
                { level: 15, name: "Share Spells", type: FeatureType.Passive, reference: { source: "PHB", page: 93 } }
            ],
            reference: { source: "PHB", page: 93 }
        }, {
            name: "Horizon Walker",
            features: [
                {
                    level: 3, name: "Planar Magic", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=1"
                    }
                }, {
                    level: 3, name: "Planar Warrior", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=1"
                    }
                }, {
                    level: 3, name: "Portal Lore", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=1"
                    }
                }, {
                    level: 7, name: "Ethereal Step", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=1"
                    }
                }, {
                    level: 11, name: "Distant Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=1"
                    }
                }, {
                    level: 15, name: "Spectral Defense", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=1"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Ranger & Rogue", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=1"
            }
        }, {
            name: "Primeval Guardian",
            features: [
                {
                    level: 3, name: "Guardian Magic", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
                    }
                }, {
                    level: 3, name: "Guardian Soul", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
                    }
                }, {
                    level: 3, name: "Piercing Thorns", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
                    }
                }, {
                    level: 7, name: "Ancient Fortitude", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
                    }
                }, {
                    level: 11, name: "Rooted Defense", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
                    }
                }, {
                    level: 15, name: "Guardian Aura", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Ranger & Rogue", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
            }
        },
    ]
});

ClassList.push(Ranger);
