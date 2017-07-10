import { Skills } from "app/data";
import * as Armor from "app/data/armor";
import * as Packs from "app/data/packs";
import * as Weapons from "app/data/weapons";

import * as ClassModels from "../../models/classes";
import { ArmorType } from "../../models/equipment";
import { FeatureType } from "../../models/features";
import { ClassList } from "./class-list";

export const Cleric: ClassModels.Class = new ClassModels.Class({
    name: "Cleric",
    primaryAbility: "WIS",
    castingAbility: "WIS",
    archetypeLevel: 1,
    hitDie: 8,
    savingThrows: ["WIS", "CHA"],
    features: [
        {
            level: 1, name: "Spellcasting", type: FeatureType.Passive,
            reference: { source: "PHB", page: 58, url: "https://www.dndbeyond.com/characters/classes/cleric#Spellcasting" }
        }, {
            level: 1, name: "Divine Domain", type: FeatureType.Passive,
            reference: { source: "PHB", page: 58, url: "https://www.dndbeyond.com/characters/classes/cleric#DivineDomain" }
        }, {
            level: 2, name: "Channel Divinity", type: FeatureType.Passive,
            reference: { source: "PHB", page: 58, url: "https://www.dndbeyond.com/characters/classes/cleric#ChannelDivinity" }
        }, {
            level: 2, name: "Channel Divinity: Turn Undead", type: FeatureType.Passive,
            reference: { source: "PHB", page: 59, url: "https://www.dndbeyond.com/characters/classes/cleric#ChannelDivinityTurnUndead" }
        }, {
            level: 5, name: "Destroy Undead", type: FeatureType.Passive,
            reference: { source: "PHB", page: 59, url: "https://www.dndbeyond.com/characters/classes/cleric#DestroyUndead" }
        }, {
            level: 10, name: "Divine Intervention", type: FeatureType.Passive,
            reference: { source: "PHB", page: 59, url: "https://www.dndbeyond.com/characters/classes/cleric#DivineIntervention" }
        }
    ],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Shield] }],
    weaponProficiencies: [{ proficiencies: Weapons.SimpleWeapons }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [Skills.History, Skills.Insight, Skills.Medicine, Skills.Persuasion, Skills.Religion],
        count: 2
    }],
    otherProficiencies: [],
    equipment: [
        { items: [Weapons.Mace, Weapons.Warhammer], count: 1 },
        { items: [Armor.ScaleMail, Armor.Leather, Armor.ChainMail], count: 1 },
        { items: [Packs.PriestPack, Packs.ExplorerPack], count: 1 },
        { items: [[Weapons.LightCrossbow, { name: "20 crossbow bolts" }], { items: Weapons.SimpleWeapons, count: 1 }], count: 1 },
        { items: [Armor.Shield, { name: "holy symbol" }] },
    ],
    archetypeName: { singular: "Divine Domain", plural: "Divine Domains" },
    reference: { source: "PHB", page: 56, url: "https://www.dndbeyond.com/characters/classes/cleric" },
    archetypes: [
        {
            name: "Death Domain",
            features: [
                {
                    level: 1, name: "Bonus Proficiency", type: FeatureType.Passive,
                    // TODO: Gain proficiencies.
                    reference: { source: "DMG", page: 96 }
                },
                { level: 1, name: "Reaper", type: FeatureType.Passive, reference: { source: "DMG", page: 96 } },
                { level: 2, name: "Channel Divinity: Touch of Death", type: FeatureType.Passive, reference: { source: "DMG", page: 97 } },
                { level: 6, name: "Inescapable Destruction", type: FeatureType.Passive, reference: { source: "DMG", page: 97 } },
                { level: 8, name: "Divine Strike", type: FeatureType.Passive, reference: { source: "DMG", page: 97 } },
                { level: 17, name: "Improved Reaper", type: FeatureType.Passive, reference: { source: "DMG", page: 97 } }
            ],
            reference: { source: "DMG", page: 96 }
        }, {
            name: "Forge Domain",
            features: [
                {
                    level: 1, name: "Bonus Proficiency", type: FeatureType.Passive,
                    // TODO: Gain proficiencies.
                    reference: {
                        source: "UA", document: "Cleric", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=1"
                    }
                }, {
                    level: 1, name: "Blessing of the Forge", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=1"
                    }
                }, {
                    level: 2, name: "Channel Divinity: Artisan's Blessing", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=1"
                    }
                }, {
                    level: 6, name: "Soul of the Forge", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=1"
                    }
                }, {
                    level: 8, name: "Divine Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=1"
                    }
                }, {
                    level: 17, name: "Saint of Forge and Fire", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 1,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=1"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Cleric", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=1"
            }
        }, {
            name: "Grave Domain",
            features: [
                {
                    level: 1, name: "Bonus Proficiency", type: FeatureType.Passive,
                    // TODO: Gain proficiencies.
                    reference: {
                        source: "UA", document: "Cleric", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
                    }
                }, {
                    level: 1, name: "Circle of Mortality", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
                    }
                }, {
                    level: 1, name: "Eyes of the Grave", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
                    }
                }, {
                    level: 2, name: "Channel Divinity: Path to the Grave", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
                    }
                }, {
                    level: 6, name: "Sentinel at Death's Door", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
                    }
                }, {
                    level: 8, name: "Divine Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
                    }
                }, {
                    level: 17, name: "Keeper of Souls", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 2,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Cleric", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
            }
        }, {
            name: "Knowledge Domain",
            // TODO: Knowledge domain spells.
            features: [
                {
                    level: 1, name: "Blessings of Knowledge", type: FeatureType.Passive,
                    // TODO: Gain proficiencies.
                    reference: { source: "PHB", page: 59 }
                }, {
                    level: 2, name: "Channel Divinity: Knowledge of the Ages", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 59 }
                }, {
                    level: 6, name: "Channel Divinity: Read Thoughts", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 59 }
                }, {
                    level: 8, name: "Potent Spellcasting", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 60 }
                }, {
                    level: 17, name: "Visions of the Past", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 60 }
                }
            ],
            reference: { source: "PHB", page: 59, url: "" },
        }, {
            name: "Life Domain",
            features: [
                {
                    level: 1, name: "Bonus Proficiency", type: FeatureType.Passive,
                    // TODO: Gain proficiencies.
                    reference: { source: "PHB", page: 60, url: "https://www.dndbeyond.com/characters/classes/cleric#BonusProficiency" }
                }, {
                    level: 1, name: "Discipline of Life", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 60, url: "https://www.dndbeyond.com/characters/classes/cleric#DisciplineofLife" }
                }, {
                    level: 2, name: "Channel Divinity: Preserve Life", type: FeatureType.Passive,
                    reference: {
                        source: "PHB", page: 60, url: "https://www.dndbeyond.com/characters/classes/cleric#ChannelDivinityPreserveLife"
                    }
                }, {
                    level: 6, name: "Blessed Healer", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 60, url: "https://www.dndbeyond.com/characters/classes/cleric#BlessedHealer" }
                }, {
                    level: 8, name: "Divine Strike", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 60, url: "https://www.dndbeyond.com/characters/classes/cleric#DivineStrike" }
                }, {
                    level: 17, name: "Supreme Healing", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 60, url: "https://www.dndbeyond.com/characters/classes/cleric#SupremeHealing" }
                }
            ],
            reference: { source: "PHB", page: 60, url: "https://www.dndbeyond.com/characters/classes/cleric#LifeDomain" },
        }, {
            name: "Light Domain",
            features: [
                {
                    level: 1, name: "Bonus Cantrip", type: FeatureType.Passive,
                    // TODO: Gain cantrip.
                    reference: { source: "PHB", page: 61 }
                }, {
                    level: 1, name: "Warding Flare", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 61 }
                }, {
                    level: 2, name: "Channel Divinity: Radiance of the Dawn", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 61 }
                }, {
                    level: 6, name: "Improved Flame", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 61 }
                }, {
                    level: 8, name: "Potent Spellcasting", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 61 }
                }, {
                    level: 17, name: "Corona of Light", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 61 }
                }
            ],
            reference: { source: "PHB", page: 60, url: "" },
        }, {
            name: "Nature Domain",
            features: [
                {
                    level: 1, name: "Acolyte of Nature", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 1, name: "Bonus Proficiency", type: FeatureType.Passive,
                    // TODO: Gain proficiencies.
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 2, name: "Channel Divinity: Charm Animals and Plants", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 6, name: "Dampen Elements", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 8, name: "Divine Strike", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 17, name: "Master of Nature", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }
            ],
            reference: { source: "PHB", page: 61, url: "" },
        }, {
            name: "Protection Domain",
            features: [
                {
                    level: 1, name: "Bonus Proficiency", type: FeatureType.Passive,
                    // TODO: Gain proficiencies.
                    reference: {
                        source: "UA", document: "Cleric", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=3"
                    }
                }, {
                    level: 1, name: "Shield of the Faithful", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=3"
                    }
                }, {
                    level: 2, name: "Channel Divinity: Radiant Defense", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=3"
                    }
                }, {
                    level: 6, name: "Blessed Healer", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=3"
                    }
                }, {
                    level: 8, name: "Divine Strike", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=3"
                    }
                }, {
                    level: 17, name: "Indomitable Defense", type: FeatureType.Passive,
                    reference: {
                        source: "UA", document: "Cleric", page: 3,
                        url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=3"
                    }
                }
            ],
            reference: {
                source: "UA", document: "Cleric", page: 3,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=3"
            }
        }, {
            name: "Tempest Domain",
            features: [
                {
                    level: 1, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 1, name: "Wrath of the Storm", type: FeatureType.Passive,
                    // TODO: Gain proficiencies.
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 2, name: "Channel Divinity: Destructive Wrath", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 6, name: "Thunderbolt Strike", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 8, name: "Divine Strike", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }, {
                    level: 17, name: "Stormborn", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 62 }
                }
            ],
            reference: { source: "PHB", page: 62, url: "" },
        }, {
            name: "Trickery Domain",
            features: [
                {
                    level: 1, name: "Blessing of the Trickster", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 2, name: "Channel Divinity: Invoke Duplicity", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 6, name: "Cloak of Shadows", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 8, name: "Divine Strike", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 17, name: "Improved Duplicity", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }
            ],
            reference: { source: "PHB", page: 62, url: "" },
        }, {
            name: "War Domain",
            features: [
                {
                    level: 1, name: "Bonus Proficiencies", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 1, name: "War Priest", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 2, name: "Channel Divinity: Guided Strike", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 6, name: "Channel Divinity: War God's Blessing", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 8, name: "Divine Strike", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }, {
                    level: 17, name: "Avatar Battle", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 63 }
                }
            ],
            reference: { source: "PHB", page: 63, url: "" },
        },
    ]
});

ClassList.push(Cleric);
