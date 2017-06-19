import * as Data from "../data";

import * as Characters from "../models/characters";
import * as Mustache from "mustache";

export class Exporter {
    export(character: Characters.Character): string {
        return Mustache.render(Data.ExportTemplate.trim(), character);
    }
};
