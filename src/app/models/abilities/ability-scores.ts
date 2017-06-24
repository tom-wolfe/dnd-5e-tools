
export abstract class AbilityScores {
    abstract get(ability: string): number;
    abstract set(ability: string, value: number): void;
    getModifier(ability: string): number {
        return Math.floor((this.get(ability) - 10) / 2);
    }
};
