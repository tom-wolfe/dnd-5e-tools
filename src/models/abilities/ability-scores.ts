export interface AbilityScores {
    get(ability: string): number;
    set(ability: string, value: number): void;
};