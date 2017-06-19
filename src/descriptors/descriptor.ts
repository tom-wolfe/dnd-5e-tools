import * as Characters from "../models/characters";

export abstract class Descriptor {
    abstract describe(character: Characters.Character): string;

    getBand(value: number, lower: number, upper: number, bands: number): number {
        const bandSize = (upper - lower) / bands;

        if (value < lower) { return 0; }
        if (value > upper) { return bands + 1; }
        return Math.max(Math.ceil((value - lower) / bandSize), 1);
    }
};
