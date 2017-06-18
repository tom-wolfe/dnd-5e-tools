import { AbilityScoreGenerator } from "./ability-score-generator";
import { NumberGenerator } from "./number-generator";
import { ProficiencyType } from "../models/abilities/proficiency-type";
import * as Abilities from "../models/abilities";
import * as Characters from "../models/characters";
import * as Data from "../data/";
import * as Languages from "../models/languages";
import * as Races from "../models/races";

import * as _ from "lodash";

export class CharacterGenerator {
    abGen = new AbilityScoreGenerator();
    numGen = new NumberGenerator();

    generateCharacter(): Characters.Character {
        const character = new Characters.Character();
        this.randomizeAbilities(character);
        this.randomizeRace(character);
        this.randomizeRaceBonuses(character);
        this.randomizeSkillProficiencies(character);
        this.randomizeLanguages(character);
        this.randomizeHeightAndWeight(character);
        this.randomizeGender(character);
        this.randomizeAge(character);
        this.randomizeAlignment(character);

        return character;
    }

    randomizeAbilities(character: Characters.Character) {
        Object.keys(Data.Abilities.AbilityList).forEach((value) => {
            character.baseAbilities.set(value, this.abGen.generateScore());
        });
    }

    randomizeRace(character: Characters.Character) {
        const raceKeys = Object.keys(Data.Races.RaceList);
        const raceNum = this.numGen.rollDie(raceKeys.length) - 1;
        character.race = Data.Races.RaceList[raceKeys[raceNum]];

        if (character.race.subraces && character.race.subraces.length > 0) {
            const subraceNum = this.numGen.rollDie(character.race.subraces.length) - 1;
            character.subrace = character.race.subraces[subraceNum];
        } else {
            character.subrace = undefined;
        }
    }

    randomizeRaceBonuses(character: Characters.Character) {
        // Figure out the combined stat bonuses of the race and sub race.
        const statMods: Abilities.StatMods = {};
        Object.assign(statMods, character.race.statMods);

        statMods.additionalPoints = (character.race.statMods.additionalPoints || 0);
        if (character.subrace) {
            const addPoints = statMods.additionalPoints + (character.subrace.statMods.additionalPoints || 0);
            Object.assign(statMods, character.subrace.statMods);
            statMods.additionalPoints = addPoints;
        }

        if (statMods.additionalPoints === 0) { return; }

        // Remove stats that already have bonuses.
        const statList = ["strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma"].filter((value) => {
            return !statMods[value] || statMods[value] < 1;
        });

        // Increment random stats.
        while (statMods.additionalPoints > 0) {
            const statIndex = this.numGen.rollDie(statList.length) - 1;
            const stat = statList[statIndex];
            character.race.statMods[stat] = (character.race.statMods[stat] || 0) + 1;
            statList.splice(statIndex, 1);
            statMods.additionalPoints -= 1;
        }
    }

    randomizeSkillProficiencies(character: Characters.Character) {
        const proficiencyFeats = character.racialFeatures.filter(feature => feature.skillProficiencies);
        // TODO: Only assign 2 proficiencies.
        // TODO: Don't duplicate proficiencies.
        proficiencyFeats.forEach((feat) => {
            const profs = feat.skillProficiencies.map((skill) => ({ skill: skill, proficiencyType: "proficient" as ProficiencyType }));
            profs.forEach((prof) => {
                character.skillProficiencies.push(prof);
            });
        });
    }

    randomizeLanguages(character: Characters.Character) {
        // Get other languages.
        let otherLanguages = (character.race.languages.other || 0)
        let knownSubLanguages: Languages.Language[] = [];
        if (character.subrace && character.subrace.languages) {
            otherLanguages += character.subrace.languages.other || 0;
            knownSubLanguages = character.subrace.languages.known;
        }

        if (otherLanguages === 0) { return; }

        const knownLanguages = _.union(character.race.languages.known, knownSubLanguages).map((lang) => lang.name);
        const availableLanguages = _.difference(Object.keys(Data.Languages), knownLanguages);

        // Increment random stats.
        while (otherLanguages > 0) {
            const langIndex = this.numGen.rollDie(availableLanguages.length) - 1;
            const lang = availableLanguages[langIndex];
            character.race.languages.known.push(Data.Languages[lang]);
            knownLanguages.splice(langIndex, 1);
            otherLanguages -= 1;
        }
    }

    randomizeHeightAndWeight(character: Characters.Character) {
        let heightMod = character.race.height.modifier;
        let heightBase = character.race.height.base;
        if (character.subrace && character.subrace.height) {
            heightMod = character.subrace.height.modifier;
            heightBase = character.subrace.height.base;
        }
        const height = this.numGen.rollDie(heightMod);
        character.height = heightBase + height;

        let weightMod = character.race.weight.modifier;
        let weightBase = character.race.weight.base;
        if (character.subrace && character.subrace.weight) {
            weightMod = character.subrace.weight.modifier;
            weightBase = character.subrace.weight.base;
        }

        const weight = this.numGen.rollDie(weightMod);
        character.weight = weightBase + (height * weight);
    }

    randomizeGender(character: Characters.Character) {
        const genders = Object.keys(Data.Genders);
        const genderIndex = this.numGen.rollDie(genders.length) - 1;
        character.gender = genders[genderIndex];
    }

    randomizeAge(character: Characters.Character) {
        const age = character.race.age;
        character.age = this.numGen.numberBetween(age.maturity, age.max);
    }

    randomizeAlignment(character: Characters.Character) {
        const alignments = Object.keys(Data.Alignments);
        const alignmentNum = this.numGen.rollDie(alignments.length) - 1;
        character.alignment = alignments[alignmentNum];
    }
};
