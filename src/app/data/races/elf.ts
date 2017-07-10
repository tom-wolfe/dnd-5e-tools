import { Languages, Skills } from "app/data";
import * as Characters from "app/models/characters";
import { FeatureType, TimeUnit } from "app/models/features";
import * as RaceModels from "app/models/races";

import * as Weapons from "../../data/weapons";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Elf: RaceModels.Race = new RaceModels.Race({
    name: "Elf",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 750 },
    height: { base: 54, modifier: 20 },
    weight: { base: 90, modifier: 4 },
    nameDefinition: Names.Elf,
    languages: { known: [Languages.Common, Languages.Elvish] },
    abilityMods: { "DEX": +2 },
    features: [
        {
            name: "Keen Senses", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: [Skills.Perception] }],
            reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#KeenSenses" }
        },
        CommonFeatures.feyAncestry,
        {
            name: "Trance", type: FeatureType.Passive,
            reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#Trance" }
        }
    ],
    reference: { source: "PHB", page: 21, url: "https://www.dndbeyond.com/characters/races/elf" },
    subraces: [
        {
            name: "High",
            abilityMods: { "INT": +1 },
            features: [
                CommonFeatures.elfWeaponTraining,
                {
                    name: "Cantrip", type: FeatureType.SingleMod,
                    reference: { source: "PHB", page: 24, url: "https://www.dndbeyond.com/characters/races/elf#Cantrip" },
                    apply(character: Characters.Character) {
                        // TODO: Apply random cantrip.
                    }
                },
            ],
            reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#HighElf" }
        }, {
            name: "Wood",
            speed: { walk: 35 },
            abilityMods: { "WIS": +1 },
            weight: { base: 100, modifier: 4 },
            features: [
                CommonFeatures.elfWeaponTraining,
                {
                    name: "Fleet of Foot", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 24, url: "https://www.dndbeyond.com/characters/races/elf#FleetofFoot" }
                }, {
                    name: "Mask of the Wild", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 24, url: "https://www.dndbeyond.com/characters/races/elf#MaskoftheWild" }
                }
            ],
            reference: { source: "PHB", page: 24, url: "https://www.dndbeyond.com/characters/races/elf#WoodElf" }
        }, {
            name: "Drow",
            nameDefinition: Names.Drow,
            abilityMods: { "CHA": +1 },
            senses: { darkvision: 120 },
            height: { base: 53, modifier: 12 },
            weight: { base: 75, modifier: 6 },
            features: [
                CommonFeatures.sunlightSensitivity,
                {
                    name: "Drow Magic", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    reference: { source: "PHB", page: 24 }
                }, {
                    name: "Drow Weapon Training", type: FeatureType.Passive,
                    weaponProficiencies: [
                        { proficiencies: [Weapons.Rapier, Weapons.Shortsword, Weapons.HandCrossbow] }
                    ],
                    reference: { source: "PHB", page: 24 }
                }
            ],
            reference: { source: "PHB", page: 24 }
        }, {
            name: "Eladrin",
            abilityMods: { "INT": +1 },
            features: [
                CommonFeatures.elfWeaponTraining,
                {
                    name: "Fey Step", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.ShortRest },
                    reference: { source: "DMG", page: 286 }
                },
            ],
            reference: { source: "DMG", page: 286 }
        }
    ]
});

RaceList.push(Elf);
