import { Languages, Skills } from "../../data";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Tabaxi: RaceModels.Race = {
    name: "Tabaxi",
    size: "Medium",
    speed: { walk: 30, climb: 20 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 80 },
    height: { base: 62, modifier: 24 },
    weight: { base: 100, modifier: 8 },
    nameDefinition: Names.Tabaxi,
    languages: { known: [Languages.Common], other: 1 },
    abilityMods: { "DEX": +2, "CHA": +1 },
    features: [
        {
            name: "Feline Agility", type: "active",
            description: `
                    Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can
                    double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet
                    on one of your turns.
                `
        }, {
            name: "Cat's Claws", type: "active",
            usage: { times: 1, timeUnit: "shortRest" },
            description: `
                    Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you
                    can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to ld4 + your Strength modifier,
                    instead of the bludgeoning damage normal for an unarmed strike.
                `
        }, {
            name: "Cat's Talent", type: "passive",
            skillProficiencies: [Skills.Perception, Skills.Stealth],
            proficiencyCount: 2, proficiencyType: "proficient",
            description: "You have proficiency in the Perception and Stealth skills."
        }
    ],
    reference: { source: "VGM", page: 113 },
    subraces: []
};

RaceList[Tabaxi.name] = Tabaxi;
