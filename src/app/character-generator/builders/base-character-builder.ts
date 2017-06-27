import * as Data from "app/data";
import * as Weapons from "app/data/weapons";
import * as Abilities from "app/models/abilities";
import { Character } from "app/models/characters/character";
import * as Equipment from "app/models/equipment";
import { NumberGenerator } from "app/shared/generators";
import * as _ from "lodash";

import { ProficiencyType } from "../../models/abilities";
import { Feature } from "../../models/features";
import { FeatureType } from "../../models/features/feature-type";
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

    protected grantWeaponProficiency(character: Character, type: Equipment.WeaponType) {
        const weaponList = Object.keys(Weapons.WeaponList).map(k => Weapons.WeaponList[k]);
        const martialWeapons = _.difference(weaponList.filter(weapon => weapon.type === type), character.weaponProficiencies);
        if (martialWeapons.length > 0) {
            character.weaponProficiencies.push(martialWeapons[this.numGen.rollDie(martialWeapons.length) - 1]);
        }
    }

    protected applyFeature(character: Character, feature: Feature) {
        if (feature.skillProficiencies) {
            const count = feature.proficiencyCount || feature.skillProficiencies.length;
            for (let x = 0; x < count; x++) {
                const profType = feature.proficiencyType || ProficiencyType.Proficient;
                this.grantRandomSkillProficiency(character, feature.skillProficiencies, profType);
            }
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
