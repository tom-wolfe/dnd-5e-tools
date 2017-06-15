import { AbilityScoreGenerator } from "./ability-score-generator";
import { Character } from "../models/character";

export class CharacterGenerator {
    generateCharacter(): Character {
        const character = new Character();
        const abGen = new AbilityScoreGenerator();
        character.abilities.strength = abGen.generateScore();
        character.abilities.dexterity = abGen.generateScore();
        character.abilities.constitution = abGen.generateScore();
        character.abilities.wisdom = abGen.generateScore();
        character.abilities.intelligence = abGen.generateScore();
        character.abilities.charisma = abGen.generateScore();
        return character;
    }
};
