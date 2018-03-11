import { Skills } from "app/data";
import * as Packs from "app/data/packs";
import * as Weapons from "app/data/weapons";
import * as _ from "lodash";

import * as ClassModels from "../../models/classes";
import { Item, ItemQuantity } from "../../models/equipment";
import { FeatureType } from "../../models/features";
import { ArtisanToolList } from "../artisan-tools";
import { InstrumentList } from "../instruments";
import { ClassList } from "./class-list";

export const Monk: ClassModels.Class = new ClassModels.Class({
    name: "Monk",
    primaryAbility: "DEX",
    hitDie: 8,
    archetypeLevel: 3,
    savingThrows: ["STR", "DEX"],
    abilityScoreImprovements: [ 4, 8, 12, 16, 19 ],
    features: [
        {
            level: 1, name: "Unarmored Defense", type: FeatureType.Passive,
            // TODO: Set AC
            reference: { source: "PHB", page: 78, url: "https://www.dndbeyond.com/characters/classes/monk#UnarmoredDefense" }
        }, {
            level: 1, name: "Martial Arts", type: FeatureType.Passive,
            reference: { source: "PHB", page: 78, url: "https://www.dndbeyond.com/characters/classes/monk#MartialArts" }
        }, {
            level: 2, name: "Ki", type: FeatureType.Passive,
            reference: { source: "PHB", page: 78, url: "https://www.dndbeyond.com/characters/classes/monk#Ki" }
        }, {
            level: 2, name: "Unarmored Movement", type: FeatureType.Passive,
            // TODO: Set movement speed.
            reference: { source: "PHB", page: 78, url: "https://www.dndbeyond.com/characters/classes/monk#UnarmoredMovement" }
        }, {
            level: 3, name: "Monastic Tradition", type: FeatureType.Passive,
            reference: { source: "PHB", page: 78, url: "https://www.dndbeyond.com/characters/classes/monk#MonasticTradition" }
        }, {
            level: 3, name: "Deflect Missile", type: FeatureType.Passive,
            reference: { source: "PHB", page: 78, url: "https://www.dndbeyond.com/characters/classes/monk#DeflectMissiles" }
        }, {
            level: 4, name: "Slow Fall", type: FeatureType.Passive,
            reference: { source: "PHB", page: 78, url: "https://www.dndbeyond.com/characters/classes/monk#SlowFall" }
        }, {
            level: 5, name: "Extra Attack", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#ExtraAttack" }
        }, {
            level: 5, name: "Stunning Strike", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#StunningStrike" }
        }, {
            level: 6, name: "Ki-Empowered Strikes", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#KiEmpoweredStrikes" }
        }, {
            level: 7, name: "Evasion", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#Evasion" }
        }, {
            level: 7, name: "Stillness of Mind", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#StillnessofMind" }
        }, {
            level: 10, name: "Purity of Body", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#PurityofMind" }
        }, {
            level: 13, name: "Tongue of the Sun and Moon", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#TongueoftheSunandMoon" }
        }, {
            level: 14, name: "Diamond Soul", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#DiamondSoul" }
        }, {
            level: 15, name: "Timless Body", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#TimelessBody" }
        }, {
            level: 18, name: "Empty Body", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#EmptyBody" }
        }, {
            level: 20, name: "Perfect Self", type: FeatureType.Passive,
            reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#PerfectSelf" }
        },
    ],
    armorProficiencies: [],
    weaponProficiencies: [{ proficiencies: [...Weapons.SimpleWeapons, Weapons.Shortsword] }],
    toolProficiencies: [{ proficiencies: _.union(ArtisanToolList, InstrumentList), count: 1 }],
    skillProficiencies: [{
        proficiencies: [Skills.Acrobatics, Skills.Athletics, Skills.History, Skills.Insight, Skills.Religion, Skills.Stealth], count: 2
    }],
    otherProficiencies: [],
    equipment: [
        { items: [Weapons.Shortsword, { items: Weapons.SimpleWeapons, count: 1 }], count: 1 },
        { items: [Packs.ExplorerPack, Packs.DungeoneerPack], count: 1 },
        { items: [new ItemQuantity(Weapons.Dart, 10)], count: 1 },

    ],
    archetypeName: { singular: "Monastic Tradition", plural: "Monastic Traditions" },
    reference: { source: "PHB", page: 76, url: "https://www.dndbeyond.com/characters/classes/monk" },
    archetypes: [
        {
            name: "Way of the Open Hand",
            features: [
                {
                    level: 3, name: "Open Hand Technique", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#OpenHandTechnique" }
                }, {
                    level: 6, name: "Wholeness of Body", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 79, url: "https://www.dndbeyond.com/characters/classes/monk#WholnessofBody" }
                }, {
                    level: 11, name: "Tranquility", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 80, url: "https://www.dndbeyond.com/characters/classes/monk#Tranquility" }
                }, {
                    level: 17, name: "Quivering Palm", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 80, url: "https://www.dndbeyond.com/characters/classes/monk#QuiveringPalm" }
                }
            ],
            reference: {
                source: "PHB", page: 79,
                url: "https://www.dndbeyond.com/characters/classes/monk#WayOfTheOpenHand"
            }
        }, {
            name: "Way of Shadow",
            features: [
                { level: 3, name: "Shadow Arts", type: FeatureType.Passive, reference: { source: "PHB", page: 80 } },
                { level: 6, name: "Shadow Step", type: FeatureType.Passive, reference: { source: "PHB", page: 80 } },
                { level: 11, name: "Cloak of Shadows", type: FeatureType.Passive, reference: { source: "PHB", page: 80 } },
                { level: 17, name: "Opportunist", type: FeatureType.Passive, reference: { source: "PHB", page: 80 } }
            ],
            reference: { source: "PHB", page: 80 }
        }, {
            name: "Way of the Four Elements",
            features: [
                { level: 3, name: "Disciple of the Elements", type: FeatureType.Passive, reference: { source: "PHB", page: 80 } },
            ],
            reference: { source: "PHB", page: 80 }
        }, {
            name: "Way of the Kensei",
            features: [
                {
                    level: 3, name: "Path of the Kensei", type: FeatureType.Passive,
                    // TODO: Give proficiencies
                    reference: {
                        source: "UA", document: "Monk", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=1"
                    }
                }, {
                    level: 6, name: "One with the Blade", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Monk", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=1"
                    }
                }, {
                    level: 11, name: "Sharpen the Blade", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Monk", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=1"
                    }
                }, {
                    level: 17, name: "Unerring Accuracy", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Monk", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=1"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Monk", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=1"
            }
        }, {
            name: "Way of Tranquility",
            features: [
                {
                    level: 3, name: "Path of Tranquility", type: FeatureType.Passive,
                    // TODO: Give proficiencies
                    reference: {
                        source: "UA", document: "Monk", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=2"
                    }
                }, {
                    level: 3, name: "Healing Hands", type: FeatureType.Passive,
                    // TODO: Give proficiencies
                    reference: {
                        source: "UA", document: "Monk", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=2"
                    }
                }, {
                    level: 6, name: "Emissary of Peace", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Monk", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=2"
                    }
                }, {
                    level: 11, name: "Douse the Flames of War", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Monk", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=2"
                    }
                }, {
                    level: 17, name: "Anger of a Gentle Soul", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Monk", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=2"
                    }
                },
            ],
            reference: {
                source: "UA", document: "Monk", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf#page=1"
            }
        },
    ]
});

ClassList.push(Monk);
