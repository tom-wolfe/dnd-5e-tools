import { Reference } from "../reference";

export class Item {
    description?: string;
    reference?: Reference;
    constructor(public name: string) { }
    toString(): string {
        return this.name.toLowerCase();
    }
};
