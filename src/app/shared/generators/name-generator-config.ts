import { NameDefinitionFormat } from "../../models/names/name-definition-format";

import { NameDefinition } from "app/models/names";

export class NameGeneratorConfig {
    definition: NameDefinition = null;
    definitionFormat: NameDefinitionFormat;
    gender: string = null;
    count = 10;
};
