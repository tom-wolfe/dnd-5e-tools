import { NumberGenerator } from "app/shared/generators";

export class AbilityScoreGenerator {
    generateScore(): number {
        const numGen = new NumberGenerator();
        const dice = numGen.rollDice(6, 4);
        dice.sort();
        dice.shift();
        return dice.reduce((t, n) => t + n);
    }
};
