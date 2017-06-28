import * as _ from "lodash";
import * as Collections from "typescript-collections";

export class ChainState<T> {
    private readonly items: T[];

    static fromQueue<T>(items: Collections.Queue<T>): ChainState<T> {
        const arr: T[] = new Array();
        items.forEach(i => { arr.push(i); return true; });
        return new ChainState<T>(arr);
    }

    constructor(items: T[]) {
        if (!items) {
            throw new ReferenceError("Items cannot be null.");
        }
        this.items = _.clone(items);
    }

    equals(other: ChainState<T>): boolean {
        if (!other) { return false; }
        if (this.items.length !== other.items.length) {
            return false;
        }

        for (let x = 0; x < this.items.length; x++) {
            if (!_.isEqual(this.items[x], other.items[x])) {
                return false;
            }
        }

        return true;
    }

    toString(): string {
        return Collections.util.makeString(this.items);
    }
};
