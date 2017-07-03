import * as Data from "app/data";

import { NameDefinition, NameDefinitionFormat } from "./";

export class Name {
    gender: string;
    value: string;
    definition: NameDefinition;
    format: NameDefinitionFormat;
    get genderDesc(): string {
        return Data.Genders[this.gender].name;
    };
    get genderIcon(): string {
        return Data.Genders[this.gender].iconClass;
    }
}
