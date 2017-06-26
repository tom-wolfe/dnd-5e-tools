import { NameDefinitionFormat } from "../names";
import { ItemDefinition } from "./";

export class Item {
    name: string;
    description: string;
    definition: ItemDefinition;
    format: NameDefinitionFormat;
}