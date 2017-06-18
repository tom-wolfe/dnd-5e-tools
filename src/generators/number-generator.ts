export class NumberGenerator {
    rollDie(sides: number): number {
        return this.numberBetween(1, sides);
    }

    rollDice(sides: number, times: number): number[] {
        const retVal: number[] = new Array();
        for (let n = 1; n <= times; n++) {
            retVal.push(this.rollDie(sides));
        }
        return retVal;
    }

    public numberBetween(min: number, max: number): number {
        min = Number(min); max = Number(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
