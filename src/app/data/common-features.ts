import * as Weapons from "app/data/weapons";
import * as Features from "app/models/features";

import { Skills } from "../data";

export const CommonFeatures: { [index: string]: Features.Feature } = {
    "elfWeaponTraining": {
        name: "Elf Weapon Training", type: Features.FeatureType.Passive,
        weaponProficiencies: [
            { proficiencies: [Weapons.Longsword, Weapons.Shortsword, Weapons.Shortbow, Weapons.Longbow] }
        ],
        reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#ElfWeaponTraining" },
    },
    "feyAncestry": {
        name: "Fey Ancestry", type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 23, url: "https://www.dndbeyond.com/characters/races/elf#ElfWeaponTraining" },
    },
    "menacing": {
        name: "Menacing", type: Features.FeatureType.Passive,
        skillProficiencies: [{ proficiencies: [Skills.Intimidation] }],
        reference: { source: "PHB", page: 41, url: "https://www.dndbeyond.com/characters/races/half-orc#Menacing" },
    },
    "powerfulBuild": {
        name: "Powerful Build", type: Features.FeatureType.Passive,
        reference: { source: "VGM", page: 107, url: "https://www.dndbeyond.com/characters/races/goliath#PowerfulBuild"},
    },
    "sunlightSensitivity": {
        name: "Sunlight Sensitivity", type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 24 },
    }
};

