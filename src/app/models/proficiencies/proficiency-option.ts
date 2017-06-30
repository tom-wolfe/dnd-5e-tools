import { ProficiencyType } from "./proficiency-type";

export class ProficiencyOption<T> {
    proficiencies: T[];
    count?: number;
    type?: ProficiencyType;
}
