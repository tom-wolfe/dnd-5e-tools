import { ProficiencyType } from "../proficiency-type";
import { Skill } from "./";

export class SkillProficiency {
    constructor(public skill: Skill, public type: ProficiencyType) { }
};
