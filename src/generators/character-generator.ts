import { AbilityScoreGenerator } from "./ability-score-generator";
import { NumberGenerator } from "./number-generator";
import { ProficiencyType } from "../models/abilities/proficiency-type";
import * as Abilities from "../models/abilities";
import * as Characters from "../models/characters";
import * as Data from "../data/";
import * as Languages from "../models/languages";
import * as Races from "../models/races";
import { GeneratorConfig } from "../models/generator-config";

import * as _ from "lodash";

export class CharacterGenerator {
    abGen = new AbilityScoreGenerator();
    numGen = new NumberGenerator();
    config: GeneratorConfig;

    constructor(config: GeneratorConfig) {
        this.config = config;
    }

    generateCharacter(): Characters.Character {
        const character = new Characters.Character();
        this.randomizeAbilities(character);
        this.randomizeRace(character);
        this.randomizeSubrace(character);
        this.randomizeRaceBonuses(character);
        this.randomizeLevel(character);
        this.randomizeHitPoints(character);
        this.randomizeSkillProficiencies(character);
        this.randomizeLanguages(character);
        this.randomizeHeightAndWeight(character);
        this.randomizeGender(character);
        this.randomizeAge(character);
        this.randomizeAlignment(character);

        return character;
    }

    randomizeAbilities(character: Characters.Character) {
        const abilityList = Object.keys(Data.Abilities.AbilityList);
        let statList = abilityList.map((ability) => this.abGen.generateScore())
        statList = statList.sort((a, b) => a - b).reverse();

        const assignOrder: string[] = [];

        const pushAbility = (index) => {
            assignOrder.push(abilityList[index]);
            abilityList.splice(index, 1);
        }

        if (this.config.primaryAbility) { pushAbility(abilityList.indexOf(this.config.primaryAbility.code)); }
        if (this.config.secondaryAbility) { pushAbility(abilityList.indexOf(this.config.secondaryAbility.code)); }

        while (abilityList.length > 0) {
            pushAbility(this.numGen.rollDie(abilityList.length) - 1);
        }

        for (let index = 0; index < assignOrder.length; index++) {
            character.baseAbilities.set(assignOrder[index], statList[index]);
        }
    }

    randomizeRace(character: Characters.Character) {
        if (this.config.race) {
            character.race = this.config.race;
            character.subrace = this.config.subrace;
        } else {
            const raceKeys = Object.keys(Data.Races.RaceList);
            const raceNum = this.numGen.rollDie(raceKeys.length) - 1;
            character.race = Data.Races.RaceList[raceKeys[raceNum]];
        }
    }

    randomizeSubrace(character: Characters.Character) {
        if (this.config.subrace) {
            character.subrace = this.config.subrace;
        } else {
            if (character.race.subraces && character.race.subraces.length > 0) {
                const subraceNum = this.numGen.rollDie(character.race.subraces.length) - 1;
                character.subrace = character.race.subraces[subraceNum];
            } else {
                character.subrace = undefined;
            }
        }

    }

    randomizeRaceBonuses(character: Characters.Character) {
        // Figure out the combined stat bonuses of the race and sub race.
        const abilityMods: Abilities.AbilityMods = {};
        Object.assign(abilityMods, character.race.abilityMods);

        abilityMods.additionalPoints = (character.race.abilityMods.additionalPoints || 0);
        if (character.subrace) {
            const addPoints = abilityMods.additionalPoints + (character.subrace.abilityMods.additionalPoints || 0);
            Object.assign(abilityMods, character.subrace.abilityMods);
            abilityMods.additionalPoints = addPoints;
        }

        if (abilityMods.additionalPoints === 0) { return; }

        let abilityPoints = abilityMods.additionalPoints;

        // Remove stats that already have bonuses.
        const abilityList = Object.keys(Data.Abilities.AbilityList).filter(value => {
            return !abilityMods[value] || abilityMods[value] < 1;
        });

        const addAbility = (ability, index?) => {
            index = index || abilityList.indexOf(ability);
            if (ability && index > -1) {
                character.baseAbilities[ability] += 1;
                abilityList.splice(index, 1);
                abilityPoints -= 1;
            }
        };

        // Increment priority stats.
        if (this.config.primaryAbility) { addAbility(this.config.primaryAbility.code); }
        if (this.config.secondaryAbility) { addAbility(this.config.secondaryAbility.code); }

        // Increment random stats.
        while (abilityPoints > 0) {
            const tempIndex = this.numGen.rollDie(abilityList.length) - 1;
            addAbility(abilityList[tempIndex], tempIndex);
        }
    }

    randomizeLevel(character: Characters.Character) {
        character.level = Data.Levels[this.numGen.numberBetween(this.config.minLevel, this.config.maxLevel)];
    }

    randomizeHitPoints(character: Characters.Character) {
        const hitDice = this.numGen.rollDice(character.hitDie, character.level.number);
        character.baseHitPoints = _.sum(hitDice);
    }

    randomizeSkillProficiencies(character: Characters.Character) {
        const getCharProfs = () => character.skillProficiencies.map(s => s.skill.name);
        const availableProfs = _.difference(Object.keys(Data.Skills.SkillList), getCharProfs());

        // Enumerate the proficiency-based features.
        const proficiencyFeats = character.racialFeatures.filter(feature => feature.skillProficiencies);
        proficiencyFeats.forEach(feat => {
            for (let x = 0; x < feat.proficiencyCount; x++) {
                // Get the offered proficiencies, excluding those already attained.
                const featProfs = _.difference(feat.skillProficiencies.map(s => s.name), getCharProfs());

                let index: number;
                let chosenProfName: string;
                if (featProfs.length > 0) {
                    // Choose one at random from the feature list.
                    index = this.numGen.rollDie(featProfs.length) - 1;
                    chosenProfName = featProfs[index];
                } else {
                    // Character already has all these proficiencies, so choose one at random.
                    index = this.numGen.rollDie(availableProfs.length) - 1;
                    chosenProfName = availableProfs[index];
                }

                // Grant it to the character and remove it from the available list.
                availableProfs.splice(availableProfs.indexOf(chosenProfName), 1);
                character.skillProficiencies.push({
                    skill: Data.Skills.SkillList[chosenProfName],
                    proficiencyType: feat.proficiencyType
                });
            }
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
            character.otherLanguages.push(Data.Languages[lang]);
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
