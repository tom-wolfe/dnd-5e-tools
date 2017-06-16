import * as Features from "../models/features";

export const CommonFeatures: { [index: string]: Features.Feature } = {
    "elfWeaponTraining": {
        name: "Elf Weapon Training", type: "passive",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
    },
    "powerfulBuild": {
        name: "Powerful Build", type: "passive",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
    },
    "sunlightSensitivity": {
        name: "Sunlight Sensitivity", type: "passive",
        description: `
            You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target
            of your attack, or whatever you are trying to perceive is in direct sunlight.
        `
    }
};
