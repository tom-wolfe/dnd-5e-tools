import * as Data from "app/data";
import * as Abilities from "app/models/abilities";
import { Character } from "app/models/characters/character";
import { NumberGenerator } from "app/shared/generators";
import * as _ from "lodash";

import { CharacterBuilderConfig } from "./character-builder-config";

export abstract class BaseCharacterBuilder {
    protected readonly numGen = new NumberGenerator();
    protected readonly config: CharacterBuilderConfig;

    protected constructor(config: CharacterBuilderConfig) {
        this.config = config;
    }

    protected grantRandomSkillProficiency(character: Character, skills: Abilities.Skill[], proficiencyType: Abilities.ProficiencyType) {
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

    protected grantRandomLanguage(character: Character) {
        const availableLanguages = _.difference(Object.keys(Data.Languages.LanguageList), character.languages.map(n => n.name));
        const langIndex = this.numGen.rollDie(availableLanguages.length) - 1;
        const lang = availableLanguages[langIndex];
        character.languages.push(Data.Languages.LanguageList[lang]);
    }
};
