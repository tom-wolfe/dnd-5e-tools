import { Archetype } from "./archetype";
import { Reference } from "../reference";

export class Class {
    name: string;
    reference: Reference;
    primaryStat: string;
    archetypeName: { singular: string, plural: string };
    archetypes?: Archetype[];
};
