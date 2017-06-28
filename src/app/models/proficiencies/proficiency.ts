import { ProficiencyType } from "./proficiency-type";

export class Proficiency<T> {
    constructor(public thing: T, public type: ProficiencyType) { };
}
