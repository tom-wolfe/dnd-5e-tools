import { Levels } from "app/data";
import * as Classes from "app/data/classes";
import { Character } from "app/models/characters/character";
import * as _ from "lodash";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class ClassBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character): void {
        this.randomizeClass(character);
        this.randomizeLevel(character);
        this.randomizeHitPoints(character);
    }

    private randomizeClass(character: Character) {
        if (this.config.class) {
            character.class = this.config.class;
        } else {
            const classNum = this.numGen.rollDie(Classes.ClassList.length) - 1;
            character.class = Classes.ClassList[classNum];
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

        character.savingThrowProficiencies.push(...character.class.savingThrows);
    }

    private randomizeLevel(character: Character) {
        character.level = Levels[this.numGen.numberBetween(this.config.minLevel, this.config.maxLevel)];
    }

    private randomizeHitPoints(character: Character) {
        const hitDice = this.numGen.rollDice(character.class.hitDie, character.level.number - 1);
        hitDice.push(character.class.hitDie); // Max roll for first level.
        character.baseHitPoints = _.sum(hitDice);
    }
};
