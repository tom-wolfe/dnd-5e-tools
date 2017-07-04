import { Skills } from "app/data/skills";
import * as Tools from "app/data/tools";
import * as ArtisanTools from "app/data/artisan-tools";
import { FeatureType } from "app/models/features/feature-type";
import * as Armor from "../../data/armor";
import * as ClassModels from "../../models/classes";
import { ArmorType, Item, ItemQuantity } from "../../models/equipment";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";

export const Artificer: ClassModels.Class = new ClassModels.Class({
    name: "Artificer",
    primaryAbility: "INT",
    castingAbility: "INT",
    hitDie: 8,
    features: [
        {
            level: 1, name: "Artificer Specialist", type: FeatureType.Active,
            reference: {
                source: "UA", document: "Artificer", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=2"
            }
        }, {
            level: 2, name: "Tool Expertise", type: FeatureType.Passive,
            // TODO: Apply tool expertise
            reference: {
                source: "UA", document: "Artificer", page: 3,
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=3"
            }
        }, {
            level: 2, name: "Wondrous Invention", type: FeatureType.SingleMod,
            // TODO: Apply random item of equipment
            reference: {
                source: "UA", document: "Artificer", page: 3,
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=3"
            }
        }, {
            level: 3, name: "Spellcasting", type: FeatureType.Passive,
            reference: {
                source: "UA", document: "Artificer", page: 3,
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=3"
            }
        }, {
            level: 5, name: "Superior Attunement", type: FeatureType.Passive,
            reference: {
                source: "UA", document: "Artificer", page: 4,
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=4"
            }
        }, {
            level: 6, name: "Mechanical Servant", type: FeatureType.Passive,
            reference: {
                source: "UA", document: "Artificer", page: 4,
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=4"
            }
        },  {
            level: 20, name: "Soul of Artifice", type: FeatureType.Passive,
            reference: {
                source: "UA", document: "Artificer", page: 4,
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=4"
            }
        },
    ],
    equipment: [
        { items: [{ items: Weapons.SimpleWeapons, count: 1 }, { items: Weapons.SimpleWeapons, count: 1 }] },
        { items: [Weapons.LightCrossbow, new ItemQuantity(new Item("crossbow bolts"), 20)] },
        { items: [Armor.ScaleMail, Armor.StuddedLeather], count: 1 },
        { items: [Tools.ThievesTools, Packs.DungeoneerPack] },
    ],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium] }],
    weaponProficiencies: [{ proficiencies: Weapons.SimpleWeapons }],
    toolProficiencies: [
        { proficiencies: [Tools.ThievesTools] },
        { proficiencies: Tools.ToolList, count: 2 },
    ],
    skillProficiencies: [
        {
            proficiencies: [Skills.Arcana, Skills.Deception, Skills.History, Skills.Investigation,
            Skills.Medicine, Skills.Nature, Skills.Religion, Skills.SleightOfHand], count: 3
        },
    ],
    otherProficiencies: [],
    savingThrows: ["INT", "CON"],
    archetypeName: { singular: "Artificer Specialist", plural: "Artificer Specialties" },
    reference: {
        source: "UA", document: "Artificer", page: 1,
        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=1"
    },
    archetypes: [
        {
            name: "Alchemist",
            features: [
                {
                    level: 1, name: "Alchemist's Satchel", type: FeatureType.SingleMod,
                    // TODO: Add equipment 'Alchemist's Satchel'
                    reference: {
                        source: "UA", document: "Artificer", page: 5,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=5"
                    }
                }, {
                    level: 1, name: "Alchemical Formula", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Artificer", page: 5,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=5"
                    }
                }
            ],
            reference: {
                source: "UA", page: 5, document: "Artificer",
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=5"
            },
        }, {
            name: "Gunsmith",
            features: [
                {
                    level: 1, name: "Master Smith", type: FeatureType.SingleMod,
                    toolProficiencies: [{ proficiencies: [ArtisanTools.SmithsTools] }],
                    // TODO: Apply mending cantrip
                    reference: {
                        source: "UA", document: "Artificer", page: 6,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=6"
                    }
                }, {
                    level: 1, name: "Thunder Cannon", type: FeatureType.SingleMod,
                    // TODO: Add Thunder Cannon to equipment.
                    reference: {
                        source: "UA", document: "Artificer", page: 6,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=6"
                    }
                }, {
                    level: 1, name: "Arcane Magazine", type: FeatureType.SingleMod,
                    // TODO: Add Arcane Magazine to equipment.
                    reference: {
                        source: "UA", document: "Artificer", page: 6,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=6"
                    }
                }, {
                    level: 3, name: "Thunder Monger", type: FeatureType.Active,
                    reference: {
                        source: "UA", document: "Artificer", page: 6,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=6"
                    }
                }, {
                    level: 9, name: "Blast Wave", type: FeatureType.Active,
                    reference: {
                        source: "UA", document: "Artificer", page: 6,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=6"
                    }
                }, {
                    level: 14, name: "Piercing Round", type: FeatureType.Active,
                    reference: {
                        source: "UA", document: "Artificer", page: 6,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=6"
                    }
                }, {
                    level: 17, name: "Explosive Round", type: FeatureType.Active,
                    reference: {
                        source: "UA", document: "Artificer", page: 7,
                        url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=7"
                    }
                }
            ],
            reference: {
                source: "UA", page: 6, document: "Artificer",
                url: "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf#page=6"
            },
        }
    ]
});

ClassList.push(Artificer);
