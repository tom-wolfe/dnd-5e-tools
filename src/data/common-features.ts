import { Skills } from "../data";
import * as Features from "../models/features";

export const CommonFeatures: { [index: string]: Features.Feature } = {
    "elfWeaponTraining": {
        name: "Elf Weapon Training", type: "passive",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
    },
    "feyAncestry": {
        name: "Fey Ancestry", type: "passive",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
    },
    "menacing": {
        name: "Menacing", type: "passive", skillProficiencies: [Skills.Intimidation],
        proficiencyCount: 1, proficiencyType: "proficient",
        description: "You are trained in the Intimidation skill."
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
