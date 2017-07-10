import { Skills } from "app/data";
import * as Weapons from "app/data/weapons";
import { Item } from "app/models/equipment";

import * as ClassModels from "../../models/classes";
import { ItemQuantity } from "../../models/equipment/item-quantity";
import { FeatureType } from "../../models/features";
import * as Packs from "../packs";
import { ClassList } from "./class-list";

export const Sorcerer: ClassModels.Class = new ClassModels.Class({
    name: "Sorcerer",
    primaryAbility: "CHA",
    hitDie: 6,
    archetypeLevel: 1,
    abilityScoreImprovements: [ 4, 8, 12, 16, 19 ],
    features: [
        {
            level: 1, name: "Spellcasting", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 101,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#Spellcasting"
            }
        }, {
            level: 1, name: "Sorcerous Origin", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 101,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#SorcerousOrigin"
            }
        }, {
            level: 2, name: "Font of Magic", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 101,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#FontofMagic"
            }
        }, {
            level: 3, name: "Metamagic", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 101,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#Metamagic"
            }
        }, {
            level: 20, name: "Sorcerous Restoration", type: FeatureType.Passive,
            reference: {
                source: "PHB", page: 102,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#SorcerousRestoration"
            }
        }
    ],
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
                { items: Weapons.SimpleWeapons, count: 1 }
            ], count: 1
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
            features: [
                {
                    level: 1, name: "Dragon Ancestor", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 102,
                        url: "https://www.dndbeyond.com/characters/classes/sorcerer#DragonAncestor"
                    }
                },
                {
                    level: 1, name: "Draconic Resilience", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 102,
                        url: "https://www.dndbeyond.com/characters/classes/sorcerer#DraconicResilience"
                    }
                },
                {
                    level: 6, name: "Elemental Affinity", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 102,
                        url: "https://www.dndbeyond.com/characters/classes/sorcerer#ElementalAffinity"
                    }
                },
                {
                    level: 14, name: "Dragon Wings", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 103,
                        url: "https://www.dndbeyond.com/characters/classes/sorcerer#DragonWings"
                    }
                },
                {
                    level: 18, name: "Draconic Presence", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 103,
                        url: "https://www.dndbeyond.com/characters/classes/sorcerer#DraconicPresence"
                    }
                }
            ],
            reference: {
                source: "PHB", page: 102,
                url: "https://www.dndbeyond.com/characters/classes/sorcerer#DraconicBloodline"
            }
        }, {
            name: "Wild Magic",
            features: [
                { level: 1, name: "Wild Magic Surge", type: FeatureType.Passive, reference: { source: "PHB", page: 103 } },
                { level: 1, name: "Tides of Chaos", type: FeatureType.Passive, reference: { source: "PHB", page: 103 } },
                { level: 6, name: "Bend Luck", type: FeatureType.Passive, reference: { source: "PHB", page: 103 } },
                { level: 14, name: "Controlled Chaos", type: FeatureType.Passive, reference: { source: "PHB", page: 103 } },
                { level: 18, name: "Spell Bombardment", type: FeatureType.Passive, reference: { source: "PHB", page: 103 } }
            ],
            reference: { source: "PHB", page: 103 }
        }, {
            name: "Storm Sorcerer",
            features: [
                { level: 1, name: "Wind Speaker", type: FeatureType.Passive, reference: { source: "SCG", page: 137 } },
                { level: 1, name: "Tempestuous Magic", type: FeatureType.Passive, reference: { source: "SCG", page: 137 } },
                { level: 6, name: "Heart of the Storm", type: FeatureType.Passive, reference: { source: "SCG", page: 137 } },
                { level: 6, name: "Storm Guide", type: FeatureType.Passive, reference: { source: "SCG", page: 137 } },
                { level: 14, name: "Storm's Fury", type: FeatureType.Passive, reference: { source: "SCG", page: 137 } },
                { level: 14, name: "Wind Soul", type: FeatureType.Passive, reference: { source: "SCG", page: 137 } },
            ],
            reference: { source: "SCG", page: 137 }
        }, {
            name: "Favored Soul",
            features: [
                {
                    level: 1, name: "Supernatural Resilience", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
                    }
                }, {
                    level: 1, name: "Favored by the Gods", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
                    }
                }, {
                    level: 6, name: "Blessed Countenance", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
                    }
                }, {
                    level: 14, name: "Divine Purity", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
                    }
                }, {
                    level: 18, name: "Unearthly Recovery", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Sorcerer", page: 1,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
            }
        }, {
            name: "Phoenix",
            features: [
                {
                    level: 1, name: "Ignite", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=2"
                    }
                }, {
                    level: 1, name: "Mantle of Flame", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=2"
                    }
                }, {
                    level: 6, name: "Phoenix Spark", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=2"
                    }
                }, {
                    level: 14, name: "Nourishing Fire", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=2"
                    }
                }, {
                    level: 18, name: "Form of the Phoenix", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=2"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Sorcerer", page: 1,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf"
            }
        }, {
            name: "Sea",
            features: [
                {
                    level: 1, name: "Soul of the Sea", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 3,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=3"
                    }
                }, {
                    level: 1, name: "Curse of the Sea", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 3,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=3"
                    }
                }, {
                    level: 6, name: "Watery Defense", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 3,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=3"
                    }
                }, {
                    level: 14, name: "Shifting Form", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 3,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=3"
                    }
                }, {
                    level: 18, name: "Water Soul", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 3,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=3"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Sorcerer", page: 2,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=2"
            }
        }, {
            name: "Stone",
            features: [
                {
                    level: 1, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=4"
                    }
                }, {
                    level: 1, name: "Metal Magic", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=4"
                    }
                }, {
                    level: 1, name: "Stone's Durability", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=4"
                    }
                }, {
                    level: 6, name: "Stone Aegis", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=4"
                    }
                }, {
                    level: 14, name: "Stone's Edge", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=4"
                    }
                }, {
                    level: 18, name: "Earth Master's Aegis", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Sorcerer", page: 4,
                        url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=4"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Sorcerer", page: 3,
                url: "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf#page=3"
            }
        }
    ]
});

ClassList.push(Sorcerer);
