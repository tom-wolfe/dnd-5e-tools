import * as Data from "app/data/";
import { Character } from "app/models/characters/character";
import { NameDefinition } from "app/models/names";
import * as Generators from "app/shared/generators";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class NameBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character): void {
        this.randomizeName(character);
    }

    randomizeName(character: Character) {
        let nameDef: NameDefinition;
        if (this.config.name) {
            nameDef = this.config.name;
        } else {
            if (character.subrace && character.subrace.nameDefinition) {
                nameDef = character.subrace.nameDefinition;
            } else {
                nameDef = character.race.nameDefinition;
            }
        }

        const generator = new Generators.NameGenerator([nameDef], character.gender);
        character.name = generator.getName().value;
    }
};
