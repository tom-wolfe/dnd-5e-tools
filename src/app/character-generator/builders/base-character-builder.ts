import * as Data from "app/data";
import * as Weapons from "app/data/weapons";
import * as Abilities from "app/models/abilities";
import { Character } from "app/models/characters/character";
import * as Equipment from "app/models/equipment";
import { Feature, FeatureType } from "app/models/features";
import { ProficiencyOption } from "app/models/proficiency-option";
import { ProficiencyType } from "app/models/proficiency-type";
import { NumberGenerator } from "app/shared/generators";
import * as _ from "lodash";

import { SkillProficiency } from "../../models/abilities/skill-proficiency";
import { CharacterBuilderConfig } from "./character-builder-config";

export abstract class BaseCharacterBuilder {
    protected readonly numGen = new NumberGenerator();
    protected readonly config: CharacterBuilderConfig;

    protected constructor(config: CharacterBuilderConfig) {
        this.config = config;
    }

    protected grantSkillProficiencyOption(character: Character, option: ProficiencyOption<Abilities.Skill>) {
        const profType = option.type || ProficiencyType.Proficient;

        if (!option.count) {
            option.proficiencies.forEach(skill => {
                this.grantSkillProficiency(character, skill, profType);
            });
        } else {
            for (let x = 0; x < option.count; x++) {
                this.grantRandomSkillProficiency(character, option.proficiencies, profType);
            }
        }
    }

    protected grantRandomSkillProficiency(character: Character, skills: Abilities.Skill[], type: ProficiencyType) {
        const availableProfs = _.differenceWith(Data.Skills.SkillList, character.skillProficiencies, _.isEqual);

        // Get the offered proficiencies, excluding those already attained.
        const featProfs = _.differenceWith(skills, character.skillProficiencies, _.isEqual);

        let chosenSkill: Abilities.Skill;
        if (featProfs.length > 0) {
            // Choose one at random from the feature list.
            const index = this.numGen.rollDie(featProfs.length) - 1;
            chosenSkill = featProfs[index];
        } else {
            // Character already has all these proficiencies, so choose one at random.
            const index = this.numGen.rollDie(availableProfs.length) - 1;
            chosenSkill = availableProfs[index];
        }

        // Grant it to the character and remove it from the available list.
        this.grantSkillProficiency(character, chosenSkill, type);
    }

    protected grantSkillProficiency(character: Character, skill: Abilities.Skill, type: ProficiencyType): void {
        character.skillProficiencies.push(new SkillProficiency(skill, type));
    }

    protected grantRandomLanguage(character: Character) {
        const availableLanguages = _.difference(Object.keys(Data.Languages.LanguageList), character.languages.map(n => n.name));
        const langIndex = this.numGen.rollDie(availableLanguages.length) - 1;
        const lang = availableLanguages[langIndex];
        character.languages.push(Data.Languages.LanguageList[lang]);
    }

    protected grantWeaponProficiency(character: Character, type: Equipment.WeaponType) {
        const martialWeapons = _.difference(Weapons.WeaponList.filter(weapon => weapon.type === type), character.weaponProficiencies);
        if (martialWeapons.length > 0) {
            character.weaponProficiencies.push(martialWeapons[this.numGen.rollDie(martialWeapons.length) - 1]);
        }
    }

    protected applyFeature(character: Character, feature: Feature) {
        if (feature.skillProficiencies) {
            feature.skillProficiencies.forEach(op => {
                this.grantSkillProficiencyOption(character, op);
            });
        }
        if (feature.weaponProficiencies) {
            feature.weaponProficiencies.forEach(weapon => {
                character.weaponProficiencies.push(weapon);
            });
        }
        if (feature.martialWeaponProficiencies) {
            for (let x = 0; x < feature.martialWeaponProficiencies; x++) {
                this.grantWeaponProficiency(character, Equipment.WeaponType.Martial);
            }
        }
        if (feature.damageResistances) {
            feature.damageResistances.forEach(res => {
                character.damageResistances.push(res);
            });
        }
        if (feature.type === FeatureType.SingleMod) {
            feature.apply(character);
        }
        character.features.push(feature);
    }
};
