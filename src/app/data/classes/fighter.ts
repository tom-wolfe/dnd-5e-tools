import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType, Item } from "../../models/equipment";
import { ItemQuantity } from "../../models/equipment/item-quantity";
import { FeatureType } from "../../models/features";
import * as Armor from "../armor";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { WeaponList } from "../weapons";
import { ClassList } from "./class-list";

export const Fighter: ClassModels.Class = new ClassModels.Class({
    name: "Fighter",
    primaryAbility: "STR",
    hitDie: 10,
    archetypeLevel: 3,
    savingThrows: ["STR", "CON"],
    features: [
        {
            level: 1, name: "Fighting Style", type: FeatureType.Passive,
            reference: { source: "PHB", page: 72, url: "https://www.dndbeyond.com/characters/classes/fighter#FightingStyle" }
        }, {
            level: 1, name: "Second Wind", type: FeatureType.Passive,
            reference: { source: "PHB", page: 72, url: "https://www.dndbeyond.com/characters/classes/fighter#SecondWind" }
        }, {
            level: 2, name: "Action Surge", type: FeatureType.Passive,
            reference: { source: "PHB", page: 72, url: "https://www.dndbeyond.com/characters/classes/fighter#ActionSurge" }
        }, {
            level: 3, name: "Martial Archetype", type: FeatureType.Passive,
            reference: { source: "PHB", page: 72, url: "https://www.dndbeyond.com/characters/classes/fighter#MartialArchetype" }
        }, {
            level: 5, name: "Extra Attack", type: FeatureType.Passive,
            reference: { source: "PHB", page: 72, url: "https://www.dndbeyond.com/characters/classes/fighter#ExtraAttack" }
        }, {
            level: 9, name: "Indomitable", type: FeatureType.Passive,
            reference: { source: "PHB", page: 72, url: "https://www.dndbeyond.com/characters/classes/fighter#Indomitable" }
        }
    ],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Heavy, ArmorType.Shield] }],
    weaponProficiencies: [{ proficiencies: WeaponList }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [
            Skills.Acrobatics, Skills.AnimalHandling, Skills.Athletics, Skills.History, Skills.Insight, Skills.Intimidation,
            Skills.Perception, Skills.Survival
        ], count: 2
    }],
    equipment: [
        { items: [Armor.ChainMail, [Armor.Leather, Weapons.Longbow, new ItemQuantity(new Item("arrows"), 20)]], count: 1 },
        {
            items: [
                [Armor.Shield, { items: Weapons.MartialWeapons, count: 1 }],
                [{ items: Weapons.MartialWeapons, count: 1 }, { items: Weapons.MartialWeapons, count: 1 }]
            ], count: 1
        },
        {
            items: [
                [Weapons.LightCrossbow, new ItemQuantity(new Item("crossbow bolts"), 20)],
                [Weapons.Handaxe, Weapons.Handaxe]
            ], count: 1
        },
        { items: [Packs.ExplorerPack, Packs.DungeoneerPack], count: 1 },
    ],
    otherProficiencies: [],
    archetypeName: { singular: "Martial Archetype", plural: "Martial Archetypes" },
    reference: { source: "PHB", page: 70, url: "https://www.dndbeyond.com/characters/classes/fighter" },
    archetypes: [
        {
            name: "Arcane Archer",
            features: [
                {
                    level: 3, name: "Arcane Arrow", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=1"
                    }
                }, {
                    level: 3, name: "Archer's Lore", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=1"
                    }
                }, {
                    level: 7, name: "Conjure Arrows", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=1"
                    }
                }, {
                    level: 15, name: "Ever-Ready Arrow", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=1"
                    }
                }, {
                    level: 15, name: "Deadly Arrow", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=1"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Fighter", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=1"
            }
        }, {
            name: "Champion",
            features: [
                {
                    level: 3, name: "Improved Critical", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 72, url: "https://www.dndbeyond.com/characters/classes/fighter#FightingStyle" }
                }, {
                    level: 7, name: "Remarkable Athlete", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 72, url: "https://www.dndbeyond.com/characters/classes/fighter#RemarkableAthlete" }
                }, {
                    level: 10, name: "Additional Fighting Style", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 73,
                        url: "https://www.dndbeyond.com/characters/classes/fighter#AdditionalFightingStyle"
                    }
                }, {
                    level: 15, name: "Superior Critical", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 73, url: "https://www.dndbeyond.com/characters/classes/fighter#SuperiorCritical" }
                }, {
                    level: 18, name: "Survivor", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 73, url: "https://www.dndbeyond.com/characters/classes/fighter#Survivor" }
                }
            ],
            reference: {
                source: "PHB", page: 72,
                url: "https://www.dndbeyond.com/characters/classes/fighter#Champion"
            }
        }, {
            name: "Battlemaster",
            features: [
                { level: 3, name: "Combat Superiority", type: FeatureType.Passive, reference: { source: "PHB", page: 73 } },
                { level: 3, name: "Student of War", type: FeatureType.Passive, reference: { source: "PHB", page: 73 } },
                { level: 7, name: "Know Your Enemy", type: FeatureType.Passive, reference: { source: "PHB", page: 73 } },
                { level: 10, name: "Improved Combat Superiority", type: FeatureType.Passive, reference: { source: "PHB", page: 74 } },
                { level: 15, name: "Relentless", type: FeatureType.Passive, reference: { source: "PHB", page: 74 } }
            ],
            reference: { source: "PHB", page: 73 }
        }, {
            name: "Eldritch Knight",
            castingAbility: "INT",
            features: [
                { level: 3, name: "Spellcasting", type: FeatureType.Passive, reference: { source: "PHB", page: 75 } },
                { level: 3, name: "Weapon Bond", type: FeatureType.Passive, reference: { source: "PHB", page: 75 } },
                { level: 7, name: "War Magic", type: FeatureType.Passive, reference: { source: "PHB", page: 75 } },
                { level: 10, name: "Eldritch Strike", type: FeatureType.Passive, reference: { source: "PHB", page: 75 } },
                { level: 15, name: "Arcane Charge", type: FeatureType.Passive, reference: { source: "PHB", page: 75 } },
                { level: 18, name: "Improved War Magic", type: FeatureType.Passive, reference: { source: "PHB", page: 75 } }
            ],
            reference: { source: "PHB", page: 74 }
        }, {
            name: "Knight",
            features: [
                {
                    level: 3, name: "Born to the Saddle", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=2"
                    }
                }, {
                    level: 3, name: "Implacable Mark", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=2"
                    }
                }, {
                    level: 7, name: "Noble Cavalry", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=2"
                    }
                }, {
                    level: 10, name: "Hold the Line", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=2"
                    }
                }, {
                    level: 15, name: "Rapid Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
                    }
                }, {
                    level: 18, name: "Defender's Blade", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Fighter", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=2"
            }
        }, {
            name: "Samurai",
            features: [
                {
                    level: 3, name: "Fighting Spirit", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
                    }
                }, {
                    level: 7, name: "Elegant Courtier", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=2"
                    }
                }, {
                    level: 10, name: "Unbreakable Will", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
                    }
                }, {
                    level: 15, name: "Rapid Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
                    }
                }, {
                    level: 18, name: "Strength Before Death", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Fighter", page: 3,
                url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
            }
        }, {
            name: "Sharpshooter",
            features: [
                {
                    level: 3, name: "Steady Aim", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
                    }
                }, {
                    level: 7, name: "Careful Eyes", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 4, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=4"
                    }
                }, {
                    level: 10, name: "Close-Quarters Shooting", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 4, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=4"
                    }
                }, {
                    level: 15, name: "Rapid Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 4, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=4"
                    }
                }, {
                    level: 18, name: "Snap Shot", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 4, document: "Fighter",
                        url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=4"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Fighter", page: 3,
                url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
            }
        }, {
            name: "Cavalier",
            features: [
                {
                    level: 3, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 3,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
                    }
                }, {
                    level: 3, name: "Born to the Saddle", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 3,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
                    }
                }, {
                    level: 3, name: "Combat Superiority", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 3,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
                    }
                }, {
                    level: 7, name: "Ferocious Charger", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 3,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
                    }
                }, {
                    level: 10, name: "Improved Combat Superiority", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 3,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
                    }
                }, {
                    level: 15, name: "Relentless", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 3,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Kits of Old", page: 3,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
            },
        }, {
            name: "Scout",
            features: [
                {
                    level: 3, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page4"
                    }
                }, {
                    level: 3, name: "Combat Superiority", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page4"
                    }
                }, {
                    level: 3, name: "Natural Explorer", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page4"
                    }
                }, {
                    level: 10, name: "Improved Combat Superiority", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page4"
                    }
                }, {
                    level: 15, name: "Relentless", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 4,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page4"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Kits of Old", page: 4,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page4"
            },
        },
    ]
});

ClassList.push(Fighter);
