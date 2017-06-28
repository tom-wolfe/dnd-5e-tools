import * as Characters from "app/models/characters";

export abstract class Descriptor<T> {
    abstract describe(object: T): string;

    getBand(value: number, lower: number, upper: number, bands: number): number {
        const bandSize = (upper - lower) / bands;

        if (value < lower) { return 0; }
        if (value > upper) { return bands + 1; }
        return Math.max(Math.ceil((value - lower) / bandSize), 1);
    }
};
