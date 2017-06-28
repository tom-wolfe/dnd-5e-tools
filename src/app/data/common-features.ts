import * as Weapons from "app/data/weapons";
import * as Features from "app/models/features";

import { Skills } from "../data";

export const CommonFeatures: { [index: string]: Features.Feature } = {
    "elfWeaponTraining": {
        name: "Elf Weapon Training", type: Features.FeatureType.Passive,
        weaponProficiencies: [
            { proficiencies: [Weapons.Longsword, Weapons.Shortsword, Weapons.Shortbow, Weapons.Longbow] }
        ],
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
    },
    "feyAncestry": {
        name: "Fey Ancestry", type: Features.FeatureType.Passive,
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
    },
    "menacing": {
        name: "Menacing", type: Features.FeatureType.Passive,
        skillProficiencies: [{ proficiencies: [Skills.Intimidation] }],
        description: "You are trained in the Intimidation skill."
    },
    "powerfulBuild": {
        name: "Powerful Build", type: Features.FeatureType.Passive,
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
    },
    "sunlightSensitivity": {
        name: "Sunlight Sensitivity", type: Features.FeatureType.Passive,
        description: `
            You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target
            of your attack, or whatever you are trying to perceive is in direct sunlight.
        `
    }
};

