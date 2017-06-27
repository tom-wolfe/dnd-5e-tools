import * as Data from "app/data/";
import * as Languages from "app/models/languages";
import * as _ from "lodash";

import { Character } from "../../models/characters/character";
import { AbilityBuilder } from "./ability-builder";
import { AttributeBuilder } from "./attribute-builder";
import { BackgroundBuilder } from "./background-builder";
import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";
import { ClassBuilder } from "./class-builder";
import { NameBuilder } from "./name-builder";
import { RaceBuilder } from "./race-builder";

export class CharacterBuilder extends BaseCharacterBuilder {
    protected readonly backgroundBuilder: BackgroundBuilder;
    protected readonly classBuilder: ClassBuilder;
    protected readonly abilityBuilder: AbilityBuilder;
    protected readonly raceBuilder: RaceBuilder;
    protected readonly attributeBuilder: AttributeBuilder;
    protected readonly nameBuilder: NameBuilder;

    constructor(config: CharacterBuilderConfig) {
        super(config);
        this.backgroundBuilder = new BackgroundBuilder(this.config);
        this.classBuilder = new ClassBuilder(this.config);
        this.abilityBuilder = new AbilityBuilder(this.config);
        this.raceBuilder = new RaceBuilder(this.config);
        this.attributeBuilder = new AttributeBuilder(this.config);
        this.nameBuilder = new NameBuilder(this.config);
    }

    create(): Character {
        const character: Character = new Character();
        this.build(character);
        return character;
    }

    build(character: Character): void {
        this.backgroundBuilder.build(character);
        this.classBuilder.build(character)
        this.abilityBuilder.build(character);
        this.raceBuilder.build(character);
        this.attributeBuilder.build(character);
        this.nameBuilder.build(character);
    }

    randomizeAttributes(character: Character) {
        this.attributeBuilder.randomizeHeightAndWeight(character);
        this.attributeBuilder.randomizeAge(character);
    }

    randomizeName(character: Character) {
        this.nameBuilder.build(character);
    }

    randomizeAbilities(character: Character) {
        this.abilityBuilder.randomizeAbilities(character);
    }

    randomizeTraits(character: Character) {
        this.backgroundBuilder.randomizeTraits(character);
    }
};
