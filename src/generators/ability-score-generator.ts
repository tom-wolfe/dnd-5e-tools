import { NumberGenerator } from "./number-generator";

export class AbilityScoreGenerator {
    generateScore(): number {
        const numGen = new NumberGenerator();
        const dice = numGen.rollDice(6, 4);
        dice.sort();
        dice.shift();
        return dice.reduce((t, n) => t + n);
    }
};
