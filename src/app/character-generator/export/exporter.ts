import * as Data from "app/data";
import * as Characters from "app/models/characters";
import * as Mustache from "mustache";

export class Exporter {
    export(character: Characters.Character, template: string): string {
        return Mustache.render(template.trim(), character);
    }
};
