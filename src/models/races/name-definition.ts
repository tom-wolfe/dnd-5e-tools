import { NamePartDefinition } from "./name-part-definition";

export class NameDefinition {
    name: string;
    formats: string[];
    parts: { [index: string]: NamePartDefinition };
};
