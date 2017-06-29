
export class Item {
    name: string;
    description?: string;
    constructor(initial: Item) { Object.assign(this, initial); }
    toString(): string {
        return this.name.toLowerCase();
    }
};
