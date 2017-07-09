export class CreatureInitiative {
    active = true;
    name: string = null;
    initiative: number = null;
    constructor(values?: CreatureInitiative) {
        Object.assign(this, values);
    }
}
