
export class Item {
    description?: string;
    constructor(public name: string) { }
    toString(): string {
        return this.name.toLowerCase();
    }
};
