import { Ability } from "./ability";

export class Skill {
    constructor(public name: string, public ability: Ability) { }
    toString(): string {
        return `${this.ability.name} (${this.name})`;
    }
};
