import { Reference } from "../reference";
import { Archetype } from "./archetype";

export class Class {
    name: string;
    reference: Reference;
    hitDie: number;
    primaryStat: string;
    savingThrows: string[];
    archetypeName: { singular: string, plural: string };
    archetypes?: Archetype[];
    constructor(initial: Class) { Object.assign(this, initial); }
};
