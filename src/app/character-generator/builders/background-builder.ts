import * as Data from "app/data/";
import * as Tools from "app/data/tools";
import * as Backgrounds from "app/data/backgrounds";
import { Character } from "app/models/characters/character";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class BackgroundBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character): void {
        this.randomizeAlignment(character);
        this.randomizeBackground(character);
        this.randomizeTraits(character);
        this.randomizeLanguages(character);
        this.applyFeatures(character);
    }

    private randomizeAlignment(character: Character) {
        const alignments = Object.keys(Data.Alignments);
        const alignmentNum = this.numGen.rollDie(alignments.length) - 1;
        character.alignment = alignments[alignmentNum];
    }

    private randomizeBackground(character: Character) {
        if (this.config.background) {
            character.background = this.config.background;
        } else {
            const bgKeys = Object.keys(Backgrounds.BackgroundList);
            const bgNum = this.numGen.rollDie(bgKeys.length) - 1;
            character.background = Backgrounds.BackgroundList[bgKeys[bgNum]];
        }

        character.background.skillProficiencies.forEach(op => {
            this.grantProficiencyOption(character.skillProficiencies, op, Data.Skills.SkillList);
        });
        (character.background.toolProficiencies || []).forEach(op => {
            this.grantProficiencyOption(character.toolProficiencies, op);
        });
        (character.background.otherProficiencies || []).forEach(op => {
            this.grantProficiencyOption(character.otherProficiencies, op);
        });
    }

    private randomizeTraits(character: Character) {
        const bg = character.background;
        character.personalityTrait = bg.personalityTraits[this.numGen.rollDie(bg.personalityTraits.length) - 1];
        character.ideal = bg.ideals[this.numGen.rollDie(bg.ideals.length) - 1];
        character.bond = bg.bonds[this.numGen.rollDie(bg.bonds.length) - 1];
        character.flaw = bg.flaws[this.numGen.rollDie(bg.flaws.length) - 1];
    }

    randomizeLanguages(character: Character) {
        let otherLanguages = character.background.languages.other || 0;
        if (otherLanguages === 0) { return; }
        while (otherLanguages > 0) {
            this.grantRandomLanguage(character);
            otherLanguages -= 1;
        }
    }

    private applyFeatures(character: Character) {
        if (character.background.features) {
            character.background.features.forEach(feature => {
                this.applyFeature(character, feature);
            });
        }
    }
};
