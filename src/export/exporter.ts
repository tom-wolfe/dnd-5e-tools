import * as Mustache from "mustache";

import * as Data from "../data";
import * as Characters from "../models/characters";

export class Exporter {
    export(character: Characters.Character): string {
        return Mustache.render(Data.ExportTemplate.trim(), character);
    }
};
