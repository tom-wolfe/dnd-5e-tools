import { Skills } from "app/data";
import * as Armor from "app/data/armor";

import * as ClassModels from "../../models/classes";
import { ArmorType } from "../../models/equipment";
import { WeaponType } from "../../models/equipment";
import { InstrumentList } from "../instruments";
import * as Instruments from "../instruments";
import * as Packs from "../packs";
import * as Weapons from "../weapons";
import { ClassList } from "./class-list";
import { FeatureType } from "app/models/features";

export const Bard: ClassModels.Class = new ClassModels.Class({
    name: "Bard",
    primaryAbility: "CHA",
    castingAbility: "CHA",
    archetypeLevel: 3,
    hitDie: 8,
    savingThrows: ["DEX", "CHA"],
    features: [
        {
            level: 1, name: "Spellcasting", type: FeatureType.Passive,
            reference: { source: "PHB", page: 52, url: "https://www.dndbeyond.com/characters/classes/bard#Spellcasting" }
        }, {
            level: 1, name: "Bardic Inspiration", type: FeatureType.Passive,
            reference: { source: "PHB", page: 53, url: "https://www.dndbeyond.com/characters/classes/bard#BardicInspiration" }
        }, {
            level: 2, name: "Jack of All Trades", type: FeatureType.Passive,
            // TODO: Add half proficiency to all skills.
            reference: { source: "PHB", page: 54, url: "https://www.dndbeyond.com/characters/classes/bard#JackofAllTrades" }
        }, {
            level: 2, name: "Song of Rest", type: FeatureType.Passive,
            reference: { source: "PHB", page: 54, url: "https://www.dndbeyond.com/characters/classes/bard#SongofRest" }
        }, {
            level: 3, name: "Bard College", type: FeatureType.Passive,
            reference: { source: "PHB", page: 54, url: "https://www.dndbeyond.com/characters/classes/bard#BardCollege" }
        }, {
            level: 3, name: "Expertise", type: FeatureType.Passive,
            // TODO: Add expertise.
            reference: { source: "PHB", page: 54, url: "https://www.dndbeyond.com/characters/classes/bard#Expertise" }
        }, {
            level: 5, name: "Font of Inspiration", type: FeatureType.Passive,
            reference: { source: "PHB", page: 54, url: "https://www.dndbeyond.com/characters/classes/bard#FontofInspiration" }
        }, {
            level: 6, name: "Countercharm", type: FeatureType.Passive,
            reference: { source: "PHB", page: 54, url: "https://www.dndbeyond.com/characters/classes/bard#Countercharm" }
        }, {
            level: 10, name: "Magical Secrets", type: FeatureType.Passive,
            // TODO: Add extra spells.
            reference: { source: "PHB", page: 54, url: "https://www.dndbeyond.com/characters/classes/bard#MagicalSecrets" }
        }, {
            level: 20, name: "Superior Inspiration", type: FeatureType.Passive,
            reference: { source: "PHB", page: 54, url: "https://www.dndbeyond.com/characters/classes/bard#SuperiorInspiration" }
        }
    ],
    equipment: [
        { items: [Weapons.Rapier, Weapons.Longsword, { items: Weapons.SimpleWeapons, count: 1 }], count: 1 },
        { items: [Packs.DiplomatPack, Packs.EntertainerPack], count: 1 },
        { items: [Instruments.Lute, { items: Instruments.InstrumentList, count: 1 }], count: 1 },
        { items: [Armor.Leather, Weapons.Dagger] },
    ],
    armorProficiencies: [{ proficiencies: [ArmorType.Light] }],
    weaponProficiencies: [{
        proficiencies: [
            ...Weapons.SimpleWeapons,
            Weapons.HandCrossbow, Weapons.Longsword, Weapons.Rapier, Weapons.Shortsword
        ]
    }],
    toolProficiencies: [{ proficiencies: InstrumentList, count: 3 }],
    skillProficiencies: [{ proficiencies: Skills.SkillList, count: 3 }],
    otherProficiencies: [],
    archetypeName: { singular: "Bard College", plural: "Bard Colleges" },
    reference: { source: "PHB", page: 51, url: "https://www.dndbeyond.com/characters/classes/bard" },
    archetypes: [
        {
            name: "College of Glamour",
            features: [
                {
                    level: 3, name: "Mantle of Inspiration", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Bard", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=1"
                    }
                }, {
                    level: 3, name: "Enthralling Performance", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Bard", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=1"
                    }
                }, {
                    level: 6, name: "Mantle of Majesty", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Bard", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=1"
                    }
                }, {
                    level: 14, name: "Unbreakable Majesty", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Bard", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=2"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Bard", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=1"
            }
        }, {
            name: "College of Lore",
            features: [
                {
                    level: 3, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    // TODO: Add extra proficiencies.
                    reference: { source: "PHB", page: 54 }
                }, {
                    level: 3, name: "Cutting Words", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 54 }
                }, {
                    level: 6, name: "Additional Magical Secrets", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 55 }
                }, {
                    level: 14, name: "Peerless Skill", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 55 }
                }
            ],
            reference: {
                source: "PHB", page: 54,
                url: ""
            },
        }, {
            name: "College of Satire",
            features: [
                {
                    level: 3, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    // TODO: Add extra proficiencies.
                    reference: {
                        source: "UA", document: "Kits of Old", page: 2,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page2"
                    },
                }, {
                    level: 3, name: "Tumbling Fool", type: FeatureType.Passive,
                    // TODO: Add extra proficiencies.
                    reference: {
                        source: "UA", document: "Kits of Old", page: 2,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page2"
                    },
                }, {
                    level: 6, name: "Fool's Insight", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 2,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page2"
                    },
                }, {
                    level: 14, name: "Fool's Luck", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 3,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
                    },
                }
            ],
            reference: {
                source: "UA", document: "Kits of Old", page: 2,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page2"
            },
        }, {
            name: "College of Swords",
            features: [
                {
                    level: 3, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    // TODO: Add extra proficiencies.
                    reference: {
                        source: "UA", document: "Kits of Old", page: 1,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page1"
                    },
                }, {
                    level: 3, name: "Fighting Style", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 1,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page1"
                    },
                }, {
                    level: 3, name: "Blade Flourish", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 1,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page1"
                    },
                }, {
                    level: 6, name: "Extra Attack", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 2,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page2"
                    },
                }, {
                    level: 14, name: "Battle Magic", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Kits of Old", page: 2,
                        url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page2"
                    },
                }
            ],
            reference: {
                source: "UA", document: "Kits of Old", page: 1,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page1"
            },
        }, {
            name: "College of Valor",
            features: [
                {
                    level: 3, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    // TODO: Add extra proficiencies.
                    reference: { source: "PHB", page: 55 }
                }, {
                    level: 3, name: "Combat Inspiration", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 55 }
                }, {
                    level: 6, name: "Extra Attack", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 55 }
                }, {
                    level: 14, name: "Battle Magic", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 55 }
                }
            ],
            reference: { source: "PHB", page: 55, url: "" },
        }, {
            name: "College of Whispers",
            features: [
                {
                    level: 3, name: "Venomous Blades", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Bard", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=2"
                    }
                }, {
                    level: 3, name: "Venomous Words", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Bard", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=2"
                    }
                }, {
                    level: 6, name: "Mantle of Whispers", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Bard", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=2"
                    }
                }, {
                    level: 14, name: "Shadow Lore", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Bard", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=3"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Bard", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf#page=2"
            },
        }
    ]
});

ClassList.push(Bard);
