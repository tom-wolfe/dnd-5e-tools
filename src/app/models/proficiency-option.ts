import { ProficiencyType } from "app/models/proficiency-type";

export class ProficiencyOption<T> {
    proficiencies: T[];
    count?: number;
    type?: ProficiencyType;
}