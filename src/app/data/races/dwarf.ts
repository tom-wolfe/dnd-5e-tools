import { Languages } from "../../data/languages";
import * as Weapons from "../../data/weapons";
import * as Characters from "../../models/characters";
import { ArmorType } from "../../models/equipment/armor-type";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Tools from "../artisan-tools";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";
import { DamageType } from "app/models/equipment";

export const Dwarf: RaceModels.Race = new RaceModels.Race({
    name: "Dwarf",
    size: "Medium",
    speed: { walk: 25 },
    age: { maturity: 18, max: 350 },
    senses: { darkvision: 60 },
    height: { base: 48, modifier: 8 },
    weight: { base: 130, modifier: 12 },
    nameDefinition: Names.DwarfTolkien,
    languages: { known: [Languages.Common, Languages.Dwarvish] },
    abilityMods: { "CON": +2 },
    features: [
        {
            name: "Dwarven Resilience", type: FeatureType.Passive,
            damageResistances: [DamageType.Poison],
            reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#DwarvenResilience" }
        }, {
            name: "Dwarven Combat Training", type: FeatureType.Passive,
            weaponProficiencies: [{ proficiencies: [Weapons.Battleaxe, Weapons.Handaxe, Weapons.LightHammer, Weapons.Warhammer] }],
            reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#DwarvenCombatTraining" }
        }, {
            name: "Tool Proficiency", type: FeatureType.Passive,
            toolProficiencies: [{ proficiencies: [Tools.SmithsTools, Tools.BrewersSupplies, Tools.MasonsTools], count: 1 }],
            reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#ToolProficiency" }
        }, {
            name: "Stonecunning", type: FeatureType.Passive,
            reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#StoneCunning" }
        }
    ],
    reference: { source: "PHB", page: 18, url: "https://www.dndbeyond.com/characters/races/dwarf" },
    subraces: [
        {
            name: "Hill",
            abilityMods: { "WIS": +1 },
            height: { base: 44, modifier: 8 },
            weight: { base: 115, modifier: 12 },
            features: [
                {
                    name: "Dwarven Toughness", type: FeatureType.OnLevelMod,
                    // TODO: Add hit points by level.
                    reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#DwarvenToughness" }
                }
            ],
            reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#HillDwarf" }
        }, {
            name: "Mountain",
            abilityMods: { "STR": +2 },
            features: [
                {
                    name: "Dwarven Armor Training", type: FeatureType.Passive,
                    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium] }],
                    reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#DwarvenArmorTraining" },
                }
            ],
            reference: { source: "PHB", page: 20, url: "https://www.dndbeyond.com/characters/races/dwarf#MountainDwarf" }
        }, {
            name: "Duergar",
            abilityMods: { "STR": +1 },
            languages: { known: [Languages.Undercommon] },
            features: [
                {
                    name: "Duergar Resilience", type: FeatureType.Passive,
                    reference: { source: "SCG", page: 104 },
                }, {
                    name: "Duergar Magic", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "SCG", page: 104 },
                },
                CommonFeatures.sunlightSensitivity
            ],
            reference: { source: "SCG", page: 104 }
        }
    ]
});

RaceList.push(Dwarf);
