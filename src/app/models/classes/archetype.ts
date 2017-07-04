import { Reference } from "../reference";
import { ClassFeature } from "./class-feature";

export class Archetype {
    name: string;
    features?: ClassFeature[]; // TODO: Make mandatory.
    reference: Reference;
    castingAbility?: string;
};
