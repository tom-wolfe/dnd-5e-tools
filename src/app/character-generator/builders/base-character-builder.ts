import * as Data from "app/data";
import * as Armor from "app/data/armor";
import { Character } from "app/models/characters";
import { Feature, FeatureType } from "app/models/features";
import { Language } from "app/models/languages";
import * as Proficiencies from "app/models/proficiencies";
import { NumberGenerator } from "app/shared/generators";
import * as Equipment from "app/models/equipment";
import * as _ from "lodash";

import { CharacterBuilderConfig } from "./character-builder-config";

export abstract class BaseCharacterBuilder {
    protected readonly numGen = new NumberGenerator();
    protected readonly config: CharacterBuilderConfig;

    protected constructor(config: CharacterBuilderConfig) {
        this.config = config;
    }

    protected grantProficiencyOption<T>(
        existing: Proficiencies.Proficiency<T>[],
        option: Proficiencies.ProficiencyOption<T>,
        source: T[] = null
    ): void {

        const profType = option.type || Proficiencies.ProficiencyType.Proficient;
        if (!option.count) {
            option.proficiencies.forEach(obj => {
                this.grantProficiency<T>(existing, obj, profType);
            });
        } else {
            for (let x = 0; x < option.count; x++) {
                this.grantRandomProficiency<T>(existing, option.proficiencies, profType, source);
            }
        }
    }

    protected grantProficiency<T>(existing: Proficiencies.Proficiency<T>[], thing: T, type: Proficiencies.ProficiencyType): void {
        existing.push(new Proficiencies.Proficiency<T>(thing, type));
    }

    protected grantRandomProficiency<T>(
        existing: Proficiencies.Proficiency<T>[],
        available: T[],
        type: Proficiencies.ProficiencyType,
        source: T[] = null
    ): void {
        const existingThings = existing.map(p => p.thing);
        // Get the offered proficiencies, excluding those already attained.
        const profs = _.differenceWith(available, existingThings, _.isEqual);
        let thing: T;
        if (profs.length > 0) {
            // Choose one at random from the feature list.
            const index = this.numGen.rollDie(profs.length) - 1;
            thing = profs[index];
        } else if (source) {
            // Character already has all these proficiencies, so choose one at random.
            const allProfs = _.differenceWith(source, existingThings, _.isEqual);
            const index = this.numGen.rollDie(allProfs.length) - 1;
            thing = allProfs[index];
        }

        this.grantProficiency(existing, thing, type);
    }

    protected grantRandomLanguage(character: Character) {
        const availableLanguages = _.differenceWith(Data.Languages.LanguageList, character.languages, _.isEqual);
        const langIndex = this.numGen.rollDie(availableLanguages.length) - 1;
        this.grantLanguage(character, availableLanguages[langIndex]);
    }

    protected grantLanguage(character: Character, language: Language) {
        if (character.languages.indexOf(language) > -1) {
            this.grantRandomLanguage(character);
        } else {
            character.languages.push(language);
        }
    }

    protected grantEquipmentOption(character: Character, option: Equipment.EquipmentOption) {
        if (!option.count) {
            option.items.forEach(items => {
                this.grantEquipment(character, items);
            })
        } else {
            const options: Equipment.Item[][] = _.clone(option.items);
            let charProfs = _.union(
                character.weaponProficiencies,
                character.toolProficiencies,
                character.otherProficiencies
            ).map(p => p.thing);

            // Add all of the right types of armor.
            charProfs = _.union(charProfs, Armor.ArmorList.filter(a => _.includes(character.armorProficiencies.map(p => p.thing), a.type)));

            // Get any available items that the character is proficient in.
            const overlap = options.filter(opt => opt.filter(item => _.includes(charProfs, item)).length > 0);

            for (let x = 0; x < option.count; x++) {
                if (overlap.length > 0) {
                    const index = this.numGen.rollDie(overlap.length) - 1;
                    this.grantEquipment(character, overlap[index]);
                    overlap.splice(index, 1);
                } else {
                    const index = this.numGen.rollDie(options.length) - 1;
                    this.grantEquipment(character, options[index]);
                    options.splice(index, 1);
                }
            }
        }
    }

    protected grantEquipment(character: Character, equipment: Equipment.Item[]) {
        equipment.forEach(item => {
            character.equipment.push(item);
        })
    }

    protected applyFeature(character: Character, feature: Feature) {
        if (feature.skillProficiencies) {
            feature.skillProficiencies.forEach(op => {
                this.grantProficiencyOption(character.skillProficiencies, op, Data.Skills.SkillList);
            });
        }
        if (feature.armorProficiencies) {
            feature.armorProficiencies.forEach(option => {
                this.grantProficiencyOption(character.armorProficiencies, option);
            });
        }
        if (feature.weaponProficiencies) {
            feature.weaponProficiencies.forEach(option => {
                this.grantProficiencyOption(character.weaponProficiencies, option);
            });
        }
        if (feature.toolProficiencies) {
            feature.toolProficiencies.forEach(option => {
                this.grantProficiencyOption(character.toolProficiencies, option);
            });
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
