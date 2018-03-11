import { Skills } from "app/data";
import * as Armor from "app/data/armor";
import * as Packs from "app/data/packs";
import * as Tools from "app/data/tools";
import * as Weapons from "app/data/weapons";
import * as _ from "lodash";

import * as ClassModels from "../../models/classes";
import { ArmorType, Item, WeaponProperty, WeaponType } from "../../models/equipment";
import { FeatureType } from "../../models/features";
import { ClassList } from "./class-list";


export const Druid: ClassModels.Class = new ClassModels.Class({
    name: "Druid",
    primaryAbility: "WIS",
    castingAbility: "WIS",
    archetypeLevel: 2,
    hitDie: 8,
    savingThrows: ["INT", "WIS"],
    abilityScoreImprovements: [ 4, 8, 12, 16, 19 ],
    features: [
        {
            level: 1, name: "Spellcasting", type: FeatureType.Passive,
            reference: { source: "PHB", page: 66, url: "https://www.dndbeyond.com/characters/classes/druid#Spellcasting" }
        }, {
            level: 2, name: "Wild Shape", type: FeatureType.Passive,
            reference: { source: "PHB", page: 66, url: "https://www.dndbeyond.com/characters/classes/druid#WildShape" }
        }, {
            level: 2, name: "Druid Circle", type: FeatureType.Passive,
            reference: { source: "PHB", page: 67, url: "https://www.dndbeyond.com/characters/classes/druid#DruidCircle" }
        }, {
            level: 18, name: "Timeless Body", type: FeatureType.Passive,
            reference: { source: "PHB", page: 67, url: "https://www.dndbeyond.com/characters/classes/druid#TimelessBody" }
        }, {
            level: 18, name: "Beast Spells", type: FeatureType.Passive,
            reference: { source: "PHB", page: 67, url: "https://www.dndbeyond.com/characters/classes/druid#BeastSpells" }
        }, {
            level: 20, name: "Archdruid", type: FeatureType.Passive,
            reference: { source: "PHB", page: 67, url: "https://www.dndbeyond.com/characters/classes/druid#Archdruid" }
        }
    ],
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
            features: [
                {
                    level: 2, name: "Balm of the Summer Court", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Druid", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
                    }
                }, {
                    level: 6, name: "Hearth of Moonlight and Shadow", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Druid", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
                    }
                }, {
                    level: 10, name: "Hidden Paths", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Druid", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
                    }
                }, {
                    level: 14, name: "Purifying Light", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Druid", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Druid", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
            }
        }, {
            name: "Circle of the Land",
            features: [
                {
                    level: 2, name: "Bonus Cantrip", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 68, url: "https://www.dndbeyond.com/characters/classes/druid#BonusCantrip" }
                }, {
                    level: 2, name: "Natural Recovery", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 68, url: "https://www.dndbeyond.com/characters/classes/druid#NaturalRecovery" }
                }, {
                    level: 3, name: "Circle Spells", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 68, url: "https://www.dndbeyond.com/characters/classes/druid#CircleSpells" }
                }, {
                    level: 6, name: "Land's Stride", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 69, url: "https://www.dndbeyond.com/characters/classes/druid#LandsStride" }
                }, {
                    level: 10, name: "Nature's Ward", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 69, url: "https://www.dndbeyond.com/characters/classes/druid#NaturesWard" }
                }, {
                    level: 14, name: "Nature's Sanctuary", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 69, url: "https://www.dndbeyond.com/characters/classes/druid#NaturesSanctuary" }
                }
            ],
            reference: {
                source: "PHB", page: 68,
                url: "https://www.dndbeyond.com/characters/classes/druid#CircleOfTheLand"
            }
        }, {
            name: "Circle of the Moon",
            features: [
                { level: 2, name: "Combat Wild Shape", type: FeatureType.Passive, reference: { source: "PHB", page: 69 } },
                { level: 2, name: "Circle Forms", type: FeatureType.Passive, reference: { source: "PHB", page: 69 } },
                { level: 6, name: "Primal Strike", type: FeatureType.Passive, reference: { source: "PHB", page: 69 } },
                { level: 10, name: "Elemental Wild Shape", type: FeatureType.Passive, reference: { source: "PHB", page: 69 } },
                { level: 14, name: "Thousand Forms", type: FeatureType.Passive, reference: { source: "PHB", page: 69 } }
            ],
            reference: { source: "PHB", page: 69, url: "" }
        }, {
            name: "Circle of the Shepherd",
            features: [
                {
                    level: 2, name: "Speech of the Woods", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=1"
                    }
                }, {
                    level: 2, name: "Spirit Totem", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 1,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=1"
                    }
                }, {
                    level: 6, name: "Mighty Summoner", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=2"
                    }
                }, {
                    level: 10, name: "Guardian Spirit", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=2"
                    }
                },  {
                    level: 14, name: "Faithful Summons", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Revised Class Options", page: 2,
                        url: "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf#page=2"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Druid", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=1"
            }
        }, {
            name: "Circle of Twilight",
            features: [
                {
                    level: 2, name: "Harvest's Scythe", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Druid", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=3"
                    }
                }, {
                    level: 6, name: "Speech Beyond the Grave", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Druid", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=3"
                    }
                }, {
                    level: 10, name: "Watcher at the Threshold", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Druid", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=3"
                    }
                }, {
                    level: 14, name: "Paths of the Dead", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Druid", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=3"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Druid", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf#page=2"
            }
        },
    ]
});

ClassList.push(Druid);
