import { Abilities } from "app/data";

import { AbilityScores } from "./ability-scores";

export class BasicAbilityScores extends AbilityScores {
    scores: { [index: string]: number } = {};

    constructor() {
        super();
        Object.keys(Abilities.AbilityList).forEach(ability => {
            this.set(ability, 0);
        });
    }

    get(ability: string): number {
        return this.scores[ability];
    }
    set(ability: string, value: number): void {
        this.scores[ability] = value;
    }
};


