import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType, Item } from "../../models/equipment";
import { ItemQuantity } from "../../models/equipment/item-quantity";
import { FeatureType } from "../../models/features";
import * as Armor from "../armor";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";

export const Warlock: ClassModels.Class = new ClassModels.Class({
    name: "Warlock",
    primaryAbility: "CHA",
    hitDie: 8,
    archetypeLevel: 1,
    savingThrows: ["WIS", "CHA"],
    abilityScoreImprovements: [ 4, 8, 12, 16, 19 ],
    features: [
        {
            level: 1, name: "Pact Magic", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 107,
                url: "https://www.dndbeyond.com/characters/classes/warlock#PactMagic"
            }
        }, {
            level: 2, name: "Eldritch Invocations", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 107,
                url: "https://www.dndbeyond.com/characters/classes/warlock#EldritchInvocations"
            }
        }, {
            level: 3, name: "Pact Boon", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 107,
                url: "https://www.dndbeyond.com/characters/classes/warlock#PactBoon"
            }
        }, {
            level: 11, name: "Mystic Arcanum", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 108,
                url: "https://www.dndbeyond.com/characters/classes/warlock#MysticArcanum"
            }
        }, {
            level: 20, name: "Eldritch Master", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 108,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#EldritchMaster"
            }
        }
    ],
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
            features: [
                { level: 1, name: "Fey Presence", type: FeatureType.Passive, reference: { source: "PHB", page: 109 } },
                { level: 6, name: "Misty Escape", type: FeatureType.Passive, reference: { source: "PHB", page: 109 } },
                { level: 10, name: "Beguiling Defenses", type: FeatureType.Passive, reference: { source: "PHB", page: 109 } },
                { level: 14, name: "Dark Delirium", type: FeatureType.Passive, reference: { source: "PHB", page: 109 } }
            ],
            reference: { source: "PHB", page: 108 }
        }, {
            name: "The Fiend",
            features: [
                {
                    level: 1, name: "Dark One's Blessing", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 109,
                        url: "https://www.dndbeyond.com/characters/classes/warlock#DarkOnesBlessing"
                    }
                }, {
                    level: 6, name: "Dark One's Own Luck", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 109,
                        url: "https://www.dndbeyond.com/characters/classes/warlock#DarkOnesOwnLuck"
                    }
                }, {
                    level: 10, name: "Fiendish Resilience", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 109,
                        url: "https://www.dndbeyond.com/characters/classes/warlock#FiendishResilience"
                    }
                }, {
                    level: 14, name: "Hurl Through Hell", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 109,
                        url: "https://www.dndbeyond.com/characters/classes/warlock#HurlThroughHell"
                    }
                },
            ],
            reference: {
                source: "PHB", page: 109,
                url: "https://www.dndbeyond.com/characters/classes/warlock#TheFiend"
            }
        }, {
            name: "The Great Old One",
            features: [
                { level: 1, name: "Awakened Mine", type: FeatureType.Passive, reference: { source: "PHB", page: 110 } },
                { level: 6, name: "Entropic Ward", type: FeatureType.Passive, reference: { source: "PHB", page: 110 } },
                { level: 10, name: "Thought Shield", type: FeatureType.Passive, reference: { source: "PHB", page: 110 } },
                { level: 14, name: "Create Thrall", type: FeatureType.Passive, reference: { source: "PHB", page: 110 } }
            ],
            reference: { source: "PHB", page: 109 }
        }, {
            name: "The Hexblade",
            features: [
                {
                    level: 1, name: "Hex Warrior", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=1"
                    }
                }, {
                    level: 1, name: "Hexblade's Curse", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=1"
                    }
                }, {
                    level: 6, name: "Shadow Hound", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=1"
                    }
                }, {
                    level: 10, name: "Armor of Hexes", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=2"
                    }
                }, {
                    level: 14, name: "Master of Hexes", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=1"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Warlock & Wizard", page: 1,
                url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=1"
            }
        }, {
            name: "The Raven Queen",
            features: [
                {
                    level: 1, name: "Sentinel Raven", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=2"
                    }
                }, {
                    level: 6, name: "Soul of the Raven", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=2"
                    }
                }, {
                    level: 10, name: "Raven's Shield", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 3,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=3"
                    }
                }, {
                    level: 14, name: "Queen's Right Hand", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Warlock & Wizard", page: 3,
                        url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=3"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Warlock & Wizard", page: 2,
                url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=2"
            }
        }, {
            name: "The Celestial",
            features: [
                {
                    level: 1, name: "Bonus Cantrips", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 5,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=5"
                    }
                }, {
                    level: 1, name: "Healing Light", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 5,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=5"
                    }
                }, {
                    level: 6, name: "Radiant Soul", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 5,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=5"
                    }
                }, {
                    level: 10, name: "Celestial Resilience", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 5,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=5"
                    }
                }, {
                    level: 14, name: "Searing Vengeance", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 5,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=5"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Revised Class Options", page: 4,
                url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=4"
            }
        }, {
            name: "The Seeker",
            features: [
                {
                    level: 1, name: "Shielding Aurora", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=1"
                    }
                }, {
                    level: 3, name: "Pact Boon: Pact of the Stair Chain", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=1"
                    }
                }, {
                    level: 6, name: "Astral Refuge", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
                    }
                }, {
                    level: 10, name: "Far Wanderer", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
                    }
                }, {
                    level: 14, name: "Astral Sequestration", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
                    }
                }
            ],
            reference: {
                source: "UA", document: "The Faithful", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=1"
            }
        }, {
            name: "The Undying",
            features: [
                { level: 1, name: "Among the Dead", type: FeatureType.Passive, reference: { source: "SCG", page: 139 } },
                { level: 6, name: "Defy Death", type: FeatureType.Passive, reference: { source: "SCG", page: 140 } },
                { level: 10, name: "Undying Nature", type: FeatureType.Passive, reference: { source: "SCG", page: 140 } },
                { level: 14, name: "Indestructible Life", type: FeatureType.Passive, reference: { source: "SCG", page: 140 } }
            ],
            reference: { source: "SCG", page: 139 }
        }
    ]
});

ClassList.push(Warlock);
