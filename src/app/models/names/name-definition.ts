import { NameDefinitionFormat } from "./name-definition-format";
import { NamePartDefinition } from "./name-part-definition";

export class NameDefinition {
    name: string;
    formats: NameDefinitionFormat[];
    parts: { [name: string]: NamePartDefinition };
    constructor(initial: NameDefinition) { Object.assign(this, initial); }
};
