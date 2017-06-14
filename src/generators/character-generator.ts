import { AbilityScoreGenerator } from "./ability-score-generator";
import { Character } from "../models/character";

export class CharacterGenerator {
    generateCharacter(): Character {
        const abGen = new AbilityScoreGenerator();
        const character = new Character();
        character.strength = abGen.generateScore();
        character.dexterity = abGen.generateScore();
        character.constitution = abGen.generateScore();
        character.wisdom = abGen.generateScore();
        character.intelligence = abGen.generateScore();
        character.charisma = abGen.generateScore();
        return character;
    }
};
