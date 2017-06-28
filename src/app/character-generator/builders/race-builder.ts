import * as Data from "app/data/";
import * as RaceData from "app/data/races";
import * as Abilities from "app/models/abilities/";
import { Character } from "app/models/characters/character";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class RaceBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character): void {
        this.randomizeRace(character);
        this.randomizeSubrace(character);
        this.randomizeAbilityMods(character);
        this.randomizeLanguages(character);
        this.applyFeatures(character);
    }

    private randomizeRace(character: Character) {
        if (this.config.race) {
            character.race = this.config.race;
            character.subrace = this.config.subrace;
        } else {
            const raceNum = this.numGen.rollDie(RaceData.RaceList.length) - 1;
            character.race = RaceData.RaceList[raceNum];
        }
    }

    private randomizeSubrace(character: Character) {
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

    private randomizeAbilityMods(character: Character) {
        // Figure out the combined stat bonuses of the race and sub race.
        const abilityMods: Abilities.AbilityMods = {};
        Object.assign(abilityMods, character.race.abilityMods);

        abilityMods.additionalPoints = (character.race.abilityMods.additionalPoints || 0);
        if (character.subrace && character.subrace.abilityMods) {
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
            if (abilityPoints > 0) {
                index = index || abilityList.indexOf(ability);
                if (ability && index > -1) {
                    character.baseAbilities[ability] += 1;
                    abilityList.splice(index, 1);
                    abilityPoints -= 1;
                }
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

    private applyFeatures(character: Character) {
        character.race.features.forEach(feature => {
            this.applyFeature(character, feature)
        });
        if (character.subrace && character.subrace.features) {
            character.subrace.features.forEach(feature => {
                this.applyFeature(character, feature)
            });
        }
    }

    private randomizeLanguages(character: Character) {
        character.race.languages.known.forEach(lang => {
            this.grantLanguage(character, lang);
        });

        if (character.subrace && character.subrace.languages) {
            character.subrace.languages.known.forEach(lang => {
                this.grantLanguage(character, lang);
            });
        };

        let otherLanguages = (character.race.languages.other || 0)
        if (character.subrace && character.subrace.languages) {
            otherLanguages += character.subrace.languages.other || 0;
        }
        if (otherLanguages === 0) { return; }

        while (otherLanguages > 0) {
            this.grantRandomLanguage(character);
            otherLanguages -= 1;
        }
    }
};
