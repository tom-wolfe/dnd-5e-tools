
export class Money {
    platinum: number;
    gold: number;
    silver: number;
    copper: number;
    constructor(initial: Money) { Object.assign(this, initial); }
}
