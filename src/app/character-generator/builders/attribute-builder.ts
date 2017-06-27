import * as Data from "app/data/";
import { Character } from "app/models/characters/character";
import { NameDefinition } from "app/models/names";
import * as Generators from "app/shared/generators";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class AttributeBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character): void {
        this.randomizeGender(character);
        this.randomizeHeightAndWeight(character);
        this.randomizeAge(character);
    }

    private randomizeHeightAndWeight(character: Character) {
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

    private randomizeGender(character: Character) {
        const genders = Object.keys(Data.Genders);
        const genderIndex = this.numGen.rollDie(genders.length) - 1;
        character.gender = genders[genderIndex];
    }

    private randomizeAge(character: Character) {
        const age = character.race.age;
        character.age = this.numGen.numberBetween(age.maturity, age.max);
    }
};
