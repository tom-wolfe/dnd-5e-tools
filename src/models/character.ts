import { AbilityScores } from "./ability-scores";

export class Character {
    abilities: AbilityScores;
    constructor() {
        this.abilities = new AbilityScores();
    }
};
