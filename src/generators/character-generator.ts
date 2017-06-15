import { AbilityScoreGenerator } from "./ability-score-generator";
import { NumberGenerator } from "./number-generator";
import { Character } from "../models/character";
import * as Data from "../data/";

export class CharacterGenerator {
    abGen = new AbilityScoreGenerator();
    numGen = new NumberGenerator();

    generateCharacter(): Character {
        const character = new Character();
        this.randomizeAbilities(character);
        this.randomizeRace(character);
        this.randomizeAlignment(character);
        return character;
    }

    randomizeAbilities(character: Character) {
        character.abilities.strength = this.abGen.generateScore();
        character.abilities.dexterity = this.abGen.generateScore();
        character.abilities.constitution = this.abGen.generateScore();
        character.abilities.wisdom = this.abGen.generateScore();
        character.abilities.intelligence = this.abGen.generateScore();
        character.abilities.charisma = this.abGen.generateScore();
    }

    randomizeRace(character: Character) {
        const raceNum = this.numGen.rollDie(Data.Races.length) - 1;
        character.race = Data.Races[raceNum];

        if (character.race.subraces) {
            const subraceNum = this.numGen.rollDie(character.race.subraces.length) - 1;
            character.subrace = character.race.subraces[subraceNum];
        } else {
            character.subrace = null;
        }
    }

    randomizeAlignment(character: Character) {
        const alignments = Object.keys(Data.Alignments);
        const alignmentNum = this.numGen.rollDie(alignments.length) - 1;
        character.alignment = alignments[alignmentNum]
    }
};
