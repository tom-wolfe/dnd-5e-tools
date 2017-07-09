import { Skills } from "app/data";
import * as Packs from "app/data/packs";
import * as Weapons from "app/data/weapons";
import { Item } from "app/models/equipment";
import { FeatureType } from "app/models/features";

import * as ClassModels from "../../models/classes";
import { ClassList } from "./class-list";

export const Wizard: ClassModels.Class = new ClassModels.Class({
    name: "Wizard",
    primaryAbility: "INT",
    hitDie: 6,
    archetypeLevel: 2,
    savingThrows: ["INT", "WIS"],
    armorProficiencies: [],
    features: [
        {
            level: 1, name: "Spellcasting", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 114,
                url: "https://www.dndbeyond.com/characters/classes/wizard#Spellcasting"
            }
        }, {
            level: 2, name: "Arcane Recovery", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 115,
                url: "https://www.dndbeyond.com/characters/classes/wizard#ArcaneRecovery"
            }
        }, {
            level: 2, name: "Arcane Tradition", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 115,
                url: "https://www.dndbeyond.com/characters/classes/wizard#ArcaneTradition"
            }
        }, {
            level: 18, name: "Spell Mastery", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 115,
                url: "https://www.dndbeyond.com/characters/classes/wizard#SpellMastery"
            }
        }, {
            level: 20, name: "Signature Spells", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 115,
                url: "https://www.dndbeyond.com/characters/classes/wizard#SignatureSpells"
            }
        }
    ],
    weaponProficiencies: [{
        proficiencies: [Weapons.Dagger, Weapons.Dart, Weapons.Sling, Weapons.Quarterstaff, Weapons.LightCrossbow]
    }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [
            Skills.Arcana, Skills.History, Skills.Insight, Skills.Investigation, Skills.Medicine, Skills.Religion
        ], count: 2
    }],
    equipment: [
        { items: [Weapons.Quarterstaff, Weapons.Dagger], count: 1 },
        { items: [new Item("component pouch"), new Item("arcane focus")], count: 1 },
        { items: [Packs.ExplorerPack, Packs.ScholarPack], count: 1 },
        { items: [new Item("spellbook")] }
    ],
    otherProficiencies: [],
    archetypeName: { singular: "Arcane Tradition", plural: "Arcane Traditions" },
    reference: { source: "PHB", page: 112, url: "https://www.dndbeyond.com/characters/classes/wizard" },
    archetypes: [
        {
            name: "School of Abjuration",
            features: [
                { level: 2, name: "Abjuration Savant", type: FeatureType.Passive, reference: { source: "PHB", page: 115 } },
                { level: 2, name: "Arcane Ward", type: FeatureType.Passive, reference: { source: "PHB", page: 115 } },
                { level: 6, name: "Projected Ward", type: FeatureType.Passive, reference: { source: "PHB", page: 115 } },
                { level: 10, name: "Improved Abjuration", type: FeatureType.Passive, reference: { source: "PHB", page: 115 } },
                { level: 14, name: "Spell Resistance", type: FeatureType.Passive, reference: { source: "PHB", page: 115 } }
            ],
            reference: { source: "PHB", page: 116 }
        }, {
            name: "School of Conjuration",
            features: [
                { level: 2, name: "Conjuration Savant", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } },
                { level: 2, name: "Minor Conjuration", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } },
                { level: 6, name: "Benign Transposition", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } },
                { level: 10, name: "Focused Conjuration", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } },
                { level: 14, name: "Durable Summons", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } }
            ],
            reference: { source: "PHB", page: 116 }
        }, {
            name: "School of Divination",
            features: [
                { level: 2, name: "Divination Savant", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } },
                { level: 2, name: "Portent", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } },
                { level: 6, name: "Expert Divination", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } },
                { level: 10, name: "The Third Eye", type: FeatureType.Passive, reference: { source: "PHB", page: 116 } },
                { level: 14, name: "Greater Portent", type: FeatureType.Passive, reference: { source: "PHB", page: 117 } }
            ],
            reference: { source: "PHB", page: 116 }
        }, {
            name: "School of Enchantment",
            features: [
                { level: 2, name: "Enchantment Savant", type: FeatureType.Passive, reference: { source: "PHB", page: 117 } },
                { level: 2, name: "Hypnotic Gaze", type: FeatureType.Passive, reference: { source: "PHB", page: 117 } },
                { level: 6, name: "Instinctive Charm", type: FeatureType.Passive, reference: { source: "PHB", page: 117 } },
                { level: 10, name: "Split Enchantment", type: FeatureType.Passive, reference: { source: "PHB", page: 117 } },
                { level: 14, name: "Alter Memories", type: FeatureType.Passive, reference: { source: "PHB", page: 117 } }
            ],
            reference: { source: "PHB", page: 117 }
        }, {
            name: "School of Evocation",
            features: [
                {
                    level: 2, name: "Evocation Savant", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 117,
                        url: "https://www.dndbeyond.com/characters/classes/wizard#SchoolofEvocation"
                    }
                }, {
                    level: 2, name: "Sculpt Spells", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 117,
                        url: "https://www.dndbeyond.com/characters/classes/wizard#SculptSpells"
                    }
                }, {
                    level: 6, name: "Potent Cantrip", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 117,
                        url: "https://www.dndbeyond.com/characters/classes/wizard#PotentCantrip"
                    }
                }, {
                    level: 10, name: "Empowered Evocation", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 117,
                        url: "https://www.dndbeyond.com/characters/classes/wizard#EmpoweredEvocation"
                    }
                }, {
                    level: 14, name: "Overchannel", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 118,
                        url: "https://www.dndbeyond.com/characters/classes/wizard#Overchannel"
                    }
                }
            ],
            reference: {
                source: "PHB", page: 117,
                url: "https://www.dndbeyond.com/characters/classes/wizard#SchoolofEvocation"
            }
        }, {
            name: "School of Illusion",
            features: [
                { level: 2, name: "Illusion Savant", type: FeatureType.Passive, reference: { source: "PHB", page: 118 } },
                { level: 2, name: "Improved Minor Illusion", type: FeatureType.Passive, reference: { source: "PHB", page: 118 } },
                { level: 6, name: "Malleable Illusions", type: FeatureType.Passive, reference: { source: "PHB", page: 118 } },
                { level: 10, name: "Illusory Self", type: FeatureType.Passive, reference: { source: "PHB", page: 118 } },
                { level: 14, name: "Illusory Reality", type: FeatureType.Passive, reference: { source: "PHB", page: 118 } }
            ],
            reference: { source: "PHB", page: 118 }
        }, {
            name: "School of Necromancy",
            features: [
                { level: 2, name: "Necromancy Savant", type: FeatureType.Passive, reference: { source: "PHB", page: 118 } },
                { level: 2, name: "Grim Harvest", type: FeatureType.Passive, reference: { source: "PHB", page: 118 } },
                { level: 6, name: "Undead Thralls", type: FeatureType.Passive, reference: { source: "PHB", page: 119 } },
                { level: 10, name: "Inured to Undeath", type: FeatureType.Passive, reference: { source: "PHB", page: 119 } },
                { level: 14, name: "Command Undead", type: FeatureType.Passive, reference: { source: "PHB", page: 119 } }
            ],
            reference: { source: "PHB", page: 118 }
        }, {
            name: "School of Transmutation",
            features: [
                { level: 2, name: "Transmutation Savant", type: FeatureType.Passive, reference: { source: "PHB", page: 119 } },
                { level: 2, name: "Minor Alchemy", type: FeatureType.Passive, reference: { source: "PHB", page: 119 } },
                { level: 6, name: "Transmuter's Stone", type: FeatureType.Passive, reference: { source: "PHB", page: 119 } },
                { level: 10, name: "Shapechanger", type: FeatureType.Passive, reference: { source: "PHB", page: 119 } },
                { level: 14, name: "Master Transmutation", type: FeatureType.Passive, reference: { source: "PHB", page: 119 } }
            ],
            reference: { source: "PHB", page: 119 }
        }, {
            name: "Lore Mastery",
            reference: {
                source: "UA", document: "Warlock & Wizard", page: 5,
                url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=5"
            }
        }, {
            name: "Theurgy",
            features: [
                {
                    level: 2, name: "Divine Inspiration", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
                    }
                }, {
                    level: 2, name: "Arcane Initiate", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
                    }
                }, {
                    level: 2, name: "Channel Arcana", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
                    }
                }, {
                    level: 6, name: "Arcane Acolyte", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=3"
                    }
                }, {
                    level: 10, name: "Arcane Priest", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=3"
                    }
                }, {
                    level: 14, name: "Arcane High Priest", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "The Faithful", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=3"
                    }
                }
            ],
            reference: {
                source: "UA", document: "The Faithful", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
            }
        }, {
            name: "Artificer",
            features: [
                {
                    level: 2, name: "Infuse Potions", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Eberron", page: 3,
                        url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
                    }
                }, {
                    level: 2, name: "Infuse Scrolls", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Eberron", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=4"
                    }
                }, {
                    level: 6, name: "Infuse Weapons and Armor", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Eberron", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=4"
                    }
                }, {
                    level: 10, name: "Superior Artificer", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Eberron", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=4"
                    }
                }, {
                    level: 14, name: "Master Artificer", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Eberron", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=4"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Eberron", page: 3,
                url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
            }
        }
    ]
});

ClassList.push(Wizard);
