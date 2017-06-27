import * as Data from "app/data/";
import * as BackgroundData from "app/data/backgrounds/";
import * as ClassData from "app/data/classes/";
import * as WeaponData from "app/data/weapons/";
import * as RaceData from "app/data/races/";
import * as Abilities from "app/models/abilities";
import * as Characters from "app/models/characters";
import * as Languages from "app/models/languages";
import * as Names from "app/models/names";
import { NameGenerator, NumberGenerator } from "app/shared/generators";
import * as _ from "lodash";

import { ProficiencyType } from "../../models/abilities/proficiency-type";
import { AbilityScoreGenerator } from "./ability-score-generator";
import { CharacterGeneratorConfig } from "./character-generator-config.model";

export class CharacterGenerator {
    abGen = new AbilityScoreGenerator();
    numGen = new NumberGenerator();
    config: CharacterGeneratorConfig;

    constructor(config: CharacterGeneratorConfig) {
        this.config = config;
    }

    generateCharacter(): Characters.Character {
        const character = new Characters.Character();
        this.randomizeRace(character);
        this.randomizeSubrace(character);
        this.randomizeBackground(character);
        this.randomizeClass(character);
        this.randomizeAbilities(character);
        this.randomizeRaceAbilities(character);
        this.applyRaceBonuses(character);
        this.randomizePersonality(character);
        this.randomizeLevel(character);
        this.randomizeHitPoints(character);
        this.randomizeSkillProficiencies(character);
        this.randomizeLanguages(character);
        this.randomizeHeightAndWeight(character);
        this.randomizeGender(character);
        this.randomizeName(character);
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
            // Only push the class primary stat if it hasn't already been set.
            let tmpAbility;
            if (tmpAbility = abilityList[index]) {
                assignOrder.push(tmpAbility);
                abilityList.splice(index, 1);
            }
        }

        // If the primary stat is overridden, push that.
        if (this.config.primaryAbility) {
            pushAbility(abilityList.indexOf(this.config.primaryAbility.code));
        } else {
            pushAbility(abilityList.indexOf(character.class.primaryStat));
        }

        // If the secondary stat is overridden, push that.
        if (this.config.secondaryAbility) {
            pushAbility(abilityList.indexOf(this.config.secondaryAbility.code));
        }

        pushAbility(abilityList.indexOf(character.class.primaryStat));

        // Randomize the remaining abilities.
        while (abilityList.length > 0) {
            pushAbility(this.numGen.rollDie(abilityList.length) - 1);
        }

        for (let index = 0; index < assignOrder.length; index++) {
            character.baseAbilities.set(assignOrder[index], statList[index]);
        }
    }

    private randomizeRace(character: Characters.Character) {
        if (this.config.race) {
            character.race = this.config.race;
            character.subrace = this.config.subrace;
        } else {
            const raceKeys = Object.keys(RaceData.RaceList);
            const raceNum = this.numGen.rollDie(raceKeys.length) - 1;
            character.race = RaceData.RaceList[raceKeys[raceNum]];
        }
    }

    private randomizeSubrace(character: Characters.Character) {
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

    private randomizeRaceAbilities(character: Characters.Character) {
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

    private applyRaceBonuses(character: Characters.Character) {
        if (character.race.features) {
            character.race.features.filter(feat => feat.type === "singleMod").forEach(feat => {
                feat.apply(character);
            });
        }
        if (character.subrace && character.subrace.features) {
            character.subrace.features.filter(feat => feat.type === "singleMod").forEach(feat => {
                feat.apply(character);
            });
        }
    }

    randomizeBackground(character: Characters.Character) {
        if (this.config.background) {
            character.background = this.config.background;
        } else {
            const bgKeys = Object.keys(BackgroundData.BackgroundList);
            const bgNum = this.numGen.rollDie(bgKeys.length) - 1;
            character.background = BackgroundData.BackgroundList[bgKeys[bgNum]];
        }

        const bgProficiencies = character.background.skillProficiencies.forEach(skill => {
            character.skillProficiencies.push({
                skill: skill,
                proficiencyType: ProficiencyType.Proficient
            });
        });
    }

    randomizePersonality(character: Characters.Character) {
        const bg = character.background;
        character.personalityTrait = bg.personalityTraits[this.numGen.rollDie(bg.personalityTraits.length) - 1];
        character.ideal = bg.ideals[this.numGen.rollDie(bg.ideals.length) - 1];
        character.bond = bg.bonds[this.numGen.rollDie(bg.bonds.length) - 1];
        character.flaw = bg.flaws[this.numGen.rollDie(bg.flaws.length) - 1];
    }

    randomizeClass(character: Characters.Character) {
        if (this.config.class) {
            character.class = this.config.class;
        } else {
            const classKeys = Object.keys(ClassData.ClassList);
            const classNum = this.numGen.rollDie(classKeys.length) - 1;
            character.class = ClassData.ClassList[classKeys[classNum]];
        }

        if (character.class.archetypes) {
            if (this.config.classArchetype) {
                character.classArchetype = this.config.classArchetype;
            } else {
                const archNum = this.numGen.rollDie(character.class.archetypes.length) - 1;
                character.classArchetype = character.class.archetypes[archNum];
            }
        } else {
            character.classArchetype = null;
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
        // Apply background features.

        // Enumerate the proficiency-based features.
        const proficiencyFeats = character.racialFeatures.filter(feature => feature.skillProficiencies);
        proficiencyFeats.forEach(feat => {
            for (let x = 0; x < feat.proficiencyCount; x++) {
                this.grantRandomSkillProficiency(character, feat.skillProficiencies, feat.proficiencyType);
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

        otherLanguages += character.background.languages.other || 0;

        if (otherLanguages === 0) { return; }

        const knownLanguages = _.union(character.race.languages.known, knownSubLanguages).map((lang) => lang.name);
        const availableLanguages = _.difference(Object.keys(Data.Languages.LanguageList), knownLanguages);

        // Increment random stats.
        while (otherLanguages > 0) {
            const langIndex = this.numGen.rollDie(availableLanguages.length) - 1;
            const lang = availableLanguages[langIndex];
            character.otherLanguages.push(Data.Languages.LanguageList[lang]);
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
        const height = this.numGen.rollGaussianDie(heightMod);
        character.height = heightBase + height;

        let weightMod = character.race.weight.modifier;
        let weightBase = character.race.weight.base;
        if (character.subrace && character.subrace.weight) {
            weightMod = character.subrace.weight.modifier;
            weightBase = character.subrace.weight.base;
        }

        const weight = this.numGen.rollGaussianDie(weightMod);
        character.weight = weightBase + (height * weight);
    }

    randomizeGender(character: Characters.Character) {
        const genders = Object.keys(Data.Genders);
        const genderIndex = this.numGen.rollDie(genders.length) - 1;
        character.gender = genders[genderIndex];
    }

    randomizeName(character: Characters.Character) {
        let nameDef: Names.NameDefinition;
        if (this.config.name) {
            nameDef = this.config.name;
        } else {
            if (character.subrace && character.subrace.nameDefinition) {
                nameDef = character.subrace.nameDefinition;
            } else {
                nameDef = character.race.nameDefinition;
            }
        }

        const generator = new NameGenerator([nameDef], character.gender);
        character.name = generator.getName().value;
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

    grantRandomSkillProficiency(character: Characters.Character, skills: Abilities.Skill[], proficiencyType: Abilities.ProficiencyType) {
        const charProfs = character.skillProficiencies.map(s => s.skill.name);
        const availableProfs = _.difference(Object.keys(Data.Skills.SkillList), charProfs);

        // Get the offered proficiencies, excluding those already attained.
        const featProfs = _.difference(skills.map(s => s.name), charProfs);

        let chosenProfName: string;
        if (featProfs.length > 0) {
            // Choose one at random from the feature list.
            const index = this.numGen.rollDie(featProfs.length) - 1;
            chosenProfName = featProfs[index];
        } else {
            // Character already has all these proficiencies, so choose one at random.
            const index = this.numGen.rollDie(availableProfs.length) - 1;
            chosenProfName = availableProfs[index];
        }

        // Grant it to the character and remove it from the available list.
        character.skillProficiencies.push({
            skill: Data.Skills.SkillList[chosenProfName],
            proficiencyType: proficiencyType
        });
    }
};
