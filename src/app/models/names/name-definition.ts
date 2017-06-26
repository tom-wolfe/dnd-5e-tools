import { NameDefinitionFormat } from "./name-definition-format";
import { NamePartDefinition } from "./name-part-definition";

export class NameDefinition {
    name: string;
    formats: NameDefinitionFormat[];
    parts: { [index: string]: NamePartDefinition };
};
