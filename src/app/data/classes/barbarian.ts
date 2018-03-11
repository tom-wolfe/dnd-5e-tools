import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType } from "../../models/equipment";
import { FeatureType } from "../../models/features";
import * as Packs from "../packs";
import { WeaponList } from "../weapons";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";

export const Barbarian: ClassModels.Class = new ClassModels.Class({
    name: "Barbarian",
    primaryAbility: "STR",
    archetypeLevel: 3,
    hitDie: 12,
    abilityScoreImprovements: [ 4, 8, 12, 16, 19 ],
    features: [
        {
            level: 1, name: "Rage", type: FeatureType.Passive,
            reference: { source: "PHB", page: 48, url: "https://dndbeyond.com/characters/classes/barbarian#Rage" }
        }, {
            level: 1, name: "Unarmored Defense", type: FeatureType.Passive,
            // TODO: Set AC
            reference: { source: "PHB", page: 48, url: "https://dndbeyond.com/characters/classes/barbarian#UnarmoredDefense" }
        }, {
            level: 2, name: "Reckless Attack", type: FeatureType.Passive,
            reference: { source: "PHB", page: 48, url: "https://dndbeyond.com/characters/classes/barbarian#RecklessAttack" }
        }, {
            level: 2, name: "Danger Sense", type: FeatureType.Passive,
            reference: { source: "PHB", page: 48, url: "https://dndbeyond.com/characters/classes/barbarian#DangerSense" }
        }, {
            level: 3, name: "Primal Path", type: FeatureType.Passive,
            reference: { source: "PHB", page: 48, url: "https://dndbeyond.com/characters/classes/barbarian#PrimalPath" }
        }, {
            level: 5, name: "Extra Attack", type: FeatureType.Passive,
            reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#ExtraAttack" }
        }, {
            level: 5, name: "Fast Movement", type: FeatureType.Passive,
            // TODO: Set base speed.
            reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#FastMovement" }
        }, {
            level: 7, name: "Feral Instinct", type: FeatureType.Passive,
            reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#FeralInstinct" }
        }, {
            level: 9, name: "Brutal Critical", type: FeatureType.Passive,
            reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#BrutalCritical" }
        }, {
            level: 11, name: "Relentless Rage", type: FeatureType.Passive,
            reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#RelentlessRage" }
        }, {
            level: 15, name: "Persistant Rage", type: FeatureType.Passive,
            reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#PersistantRage" }
        }, {
            level: 18, name: "Indomitable Rage", type: FeatureType.Passive,
            reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#IndomitableMight" }
        }, {
            level: 20, name: "Primal Champion", type: FeatureType.Passive,
            reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#PrimalChampion" }
        }
    ],
    equipment: [
        { items: [Weapons.Greataxe, { items: Weapons.MartialWeapons, count: 1 }], count: 1 },
        { items: [[Weapons.Handaxe, Weapons.Handaxe], { items: Weapons.SimpleWeapons, count: 1 }], count: 1 },
        { items: [Weapons.Javelin, Weapons.Javelin, Weapons.Javelin, Weapons.Javelin, Packs.ExplorerPack] },
    ],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Shield] }],
    weaponProficiencies: [{ proficiencies: WeaponList }],
    toolProficiencies: [],
    skillProficiencies: [
        {
            proficiencies: [Skills.AnimalHandling, Skills.Athletics, Skills.Intimidation, Skills.Nature,
            Skills.Perception, Skills.Survival], count: 2
        },
    ],
    otherProficiencies: [],
    savingThrows: ["STR", "CON"],
    archetypeName: { singular: "Primal Path", plural: "Primal Paths" },
    reference: { source: "PHB", page: 46, url: "https://www.dndbeyond.com/characters/classes/barbarian" },
    archetypes: [
        {
            name: "Path of the Ancestral Guardian",
            features: [
                {
                    level: 3, name: "Ancestral Guardian", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
                    }
                }, {
                    level: 6, name: "Ancestral Shield", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
                    }
                }, {
                    level: 10, name: "Consult the Spirits", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
                    }
                }, {
                    level: 14, name: "Vengeful Ancestors", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 1, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Barbarian", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
            },
        }, {
            name: "Path of the Beserker",
            features: [
                {
                    level: 3, name: "Frenzy", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#Frenzy" }
                }, {
                    level: 6, name: "Mindless Rage", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#MindlessRage" }
                }, {
                    level: 10, name: "Intimidating Presence", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 49, url: "https://dndbeyond.com/characters/classes/barbarian#IntimidatingPresence" }
                }, {
                    level: 14, name: "Retaliation", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 50, url: "https://dndbeyond.com/characters/classes/barbarian#Retaliation" }
                }
            ],
            reference: {
                source: "PHB", page: 49,
                url: "https://www.dndbeyond.com/characters/classes/barbarian#PathoftheBerserker"
            },
        }, {
            name: "Path of the Storm Herald",
            features: [
                {
                    level: 3, name: "Storm of Fury", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
                    }
                }, {
                    level: 6, name: "Storm Soul", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
                    }
                }, {
                    level: 10, name: "Shield of the Storm", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
                    }
                }, {
                    level: 14, name: "Raging Storm", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Barbarian", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=1"
            },
        }, {
            name: "Path of the Totem",
            features: [
                { level: 3, name: "Spirit Seeker", type: FeatureType.Passive, reference: { source: "PHB", page: 50 } },
                { level: 3, name: "Totem Spirit", type: FeatureType.Passive, reference: { source: "PHB", page: 50 } },
                { level: 6, name: "Aspect of the Beast", type: FeatureType.Passive, reference: { source: "PHB", page: 50 } },
                { level: 10, name: "Spirit Walker", type: FeatureType.Passive, reference: { source: "PHB", page: 50 } },
                { level: 14, name: "Totemic Attunement", type: FeatureType.Passive, reference: { source: "PHB", page: 50 } }
            ],
            reference: { source: "PHB", page: 50, url: "" },
        }, {
            name: "Path of the Zealot",
            features: [
                {
                    level: 3, name: "Divine Fury", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
                    }
                }, {
                    level: 3, name: "Warrior of the Gods", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 2, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
                    }
                }, {
                    level: 6, name: "Storm Soul", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=3"
                    }
                }, {
                    level: 10, name: "Shield of the Storm", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=3"
                    }
                }, {
                    level: 14, name: "Raging Storm", type: FeatureType.Passive,
                    reference: {
                        source: "UA", page: 3, document: "Barbarian",
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=3"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Barbarian", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf#page=2"
            },
        },
    ]
});

ClassList.push(Barbarian);
