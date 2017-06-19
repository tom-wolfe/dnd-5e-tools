import { Archetype } from "./archetype";
import { Reference } from "../reference";

export class Class {
    name: string;
    nameFormat: string;
    reference: Reference;
    archetypes?: Archetype[]
};
