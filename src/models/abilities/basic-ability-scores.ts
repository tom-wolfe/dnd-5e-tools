import { AbilityScores } from "./ability-scores";

export class BasicAbilityScores implements AbilityScores {
    scores: { [index: string]: number } = {};
    get(ability: string): number {
        return this.scores[ability];
    }
    set(ability: string, value: number): void {
        this.scores[ability] = value;
    }
};