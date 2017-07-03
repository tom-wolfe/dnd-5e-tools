import { NameDefinitionFormat } from "app/models/names";
import { ItemDefinition } from "./";

export class Item {
    name: string;
    description: string;
    definition: ItemDefinition;
    format: NameDefinitionFormat;
}
