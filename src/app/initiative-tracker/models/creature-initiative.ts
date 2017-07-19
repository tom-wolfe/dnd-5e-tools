export class CreatureInitiative {
    active = true;
    name: string = null;
    maximumHp: number;
    currentHp: number;
    initiative: number = null;
    notes: string = null;
    constructor(values?: CreatureInitiative) {
        Object.assign(this, values);
    }
}
