import { Skills } from "app/data";
import * as Tools from "app/data/tools";
import * as Weapons from "app/data/weapons";
import { ArmorType } from "app/models/equipment";
import { FeatureType } from "app/models/features";

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
    features: [
        {
            level: 1, name: "Expertise", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#Expertise" }
        }, {
            level: 1, name: "Sneak Attack", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#SneakAttack" }
        }, {
            level: 1, name: "Thieves' Cant", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#ThievesCant" }
        }, {
            level: 2, name: "Cunning Action", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#CunningAction" }
        }, {
            level: 3, name: "Roguish Archetype", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#RoguishArchetype" }
        }, {
            level: 5, name: "Uncanny Dodge", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#UncannyDodge" }
        }, {
            level: 7, name: "Evasion", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#Evasion" }
        }, {
            level: 11, name: "Reliable Talent", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#ReliableTalent" }
        }, {
            level: 14, name: "Blindsense", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#Blindsense" }
        }, {
            level: 15, name: "Slippery Mind", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#SlipperyMind" }
        }, {
            level: 18, name: "Elusive", type: FeatureType.Passive,
            reference: { source: "PHB", page: 96, url: "https://www.dndbeyond.com/characters/classes/rogue#Elusive" }
        }, {
            level: 20, name: "Stroke of Luck", type: FeatureType.Passive,
            reference: { source: "PHB", page: 97, url: "https://www.dndbeyond.com/characters/classes/rogue#StrokeofLuck" }
        }
    ],
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
            features: [
                {
                    level: 3, name: "Fast Hands", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 97, url: "https://www.dndbeyond.com/characters/classes/rogue#FastHands" }
                }, {
                    level: 3, name: "Second-Story Work", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 97, url: "https://www.dndbeyond.com/characters/classes/rogue#SecondStoryWork" }
                }, {
                    level: 9, name: "Supreme Sneak", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 97, url: "https://www.dndbeyond.com/characters/classes/rogue#SupremeSneak" }
                }, {
                    level: 13, name: "Use Magic Device", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 97, url: "https://www.dndbeyond.com/characters/classes/rogue#UseMagicDevice" }
                }, {
                    level: 17, name: "Thief's Reflexes", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 97, url: "https://www.dndbeyond.com/characters/classes/rogue#ThiefsRelaxes" }
                }
            ],
            reference: { source: "PHB", page: 97, url: "https://www.dndbeyond.com/characters/classes/rogue#Thief" }
        }, {
            name: "Assassin",
            features: [
                { level: 3, name: "Bonus Proficiencies", type: FeatureType.Passive, reference: { source: "PHB", page: 97 } },
                { level: 3, name: "Assassinate", type: FeatureType.Passive, reference: { source: "PHB", page: 97 } },
                { level: 9, name: "Infiltration Expertise", type: FeatureType.Passive, reference: { source: "PHB", page: 97 } },
                { level: 13, name: "Impostor", type: FeatureType.Passive, reference: { source: "PHB", page: 97 } },
                { level: 17, name: "Death Strike", type: FeatureType.Passive, reference: { source: "PHB", page: 97 } },
            ],
            reference: { source: "PHB", page: 97 }
        }, {
            name: "Arcane Trickster",
            castingAbility: "INT",
            features: [
                { level: 3, name: "Spellcasting", type: FeatureType.Passive, reference: { source: "PHB", page: 98 } },
                { level: 3, name: "Mage Hand Legerdemain", type: FeatureType.Passive, reference: { source: "PHB", page: 98 } },
                { level: 9, name: "Magical Ambush", type: FeatureType.Passive, reference: { source: "PHB", page: 98 } },
                { level: 13, name: "Versatile Trickster", type: FeatureType.Passive, reference: { source: "PHB", page: 98 } },
                { level: 17, name: "Spell Thief", type: FeatureType.Passive, reference: { source: "PHB", page: 98 } },
            ],
            reference: { source: "PHB", page: 97 }
        }, {
            name: "Mastermind",
            features: [
                { level: 3, name: "Master of Intrigue", type: FeatureType.Passive, reference: { source: "SCG", page: 135 } },
                { level: 3, name: "Master of Tactics", type: FeatureType.Passive, reference: { source: "SCG", page: 135 } },
                { level: 9, name: "Insightful Manipulator", type: FeatureType.Passive, reference: { source: "SCG", page: 135 } },
                { level: 13, name: "Misdirection", type: FeatureType.Passive, reference: { source: "SCG", page: 135 } },
                { level: 17, name: "Soul of Deceit", type: FeatureType.Passive, reference: { source: "SCG", page: 135 } },
            ],
            reference: { source: "SCG", page: 135 }
        }, {
            name: "Swashbuckler",
            features: [
                { level: 3, name: "Fancy Footwork", type: FeatureType.Passive, reference: { source: "SCG", page: 135 } },
                { level: 3, name: "Rakish Audacity", type: FeatureType.Passive, reference: { source: "SCG", page: 136 } },
                { level: 9, name: "Panache", type: FeatureType.Passive, reference: { source: "SCG", page: 136 } },
                { level: 13, name: "Elegant Maneuver", type: FeatureType.Passive, reference: { source: "SCG", page: 136 } },
                { level: 17, name: "Master Duelist", type: FeatureType.Passive, reference: { source: "SCG", page: 136 } },
            ],
            reference: { source: "SCG", page: 135 }
        }, {
            name: "Scout",
            features: [
                {
                    level: 3, name: "Survivalist", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=3"
                    }
                }, {
                    level: 3, name: "Skirmisher", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=3"
                    }
                }, {
                    level: 9, name: "Superior Mobility", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=3"
                    }
                }, {
                    level: 13, name: "Ambush Master", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=3"
                    }
                }, {
                    level: 17, name: "Sudden Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Ranger & Rogue", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=3"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Ranger & Rogue", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
            }
        }
    ]
});

ClassList.push(Rogue);
