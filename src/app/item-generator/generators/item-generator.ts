import { Languages } from "app/data/languages";
import * as NameData from "app/data/names";
import { NameGenerator } from "app/shared/generators";
import { NumberGenerator } from "app/shared/generators/number-generator";

import * as Items from "../models/items";

export class ItemGenerator {
    private numGen: NumberGenerator = new NumberGenerator();
    private nameGen: NameGenerator = new NameGenerator(Object.keys(NameData.NameList).map(n => NameData.NameList[n]), "");

    constructor(private definitions: Items.ItemDefinition[]) { }

    getName(): Items.Item {
        // Choose a name format.
        const def = this.definitions[this.numGen.rollDie(this.definitions.length) - 1];

        const nameIndex = this.numGen.rollDie(def.nameFormats.length) - 1;
        const descIndex = this.numGen.rollDie(def.descriptionFormats.length) - 1;
        const nameFormat = def.nameFormats[nameIndex];
        const descFormat = def.descriptionFormats[descIndex];

        // Replace the parts of the format.
        const replace = (match, part) => {
            switch (part) {
                case "name": return this.nameGen.getName().value;
                case "language":
                    return Languages.LanguageList[this.numGen.rollDie(Languages.LanguageList.length) - 1].name;
                case "number":
                    return this.numGen.rollDie(200).toString();
                default:
                    const partDef = def.parts[part];
                    if (!partDef) {
                        throw new RangeError(`Name part ${part} has no definition in ${def.name}.`);
                    }
                    const index = this.numGen.rollDie(partDef.length) - 1;
                    return partDef[index];
            }
        };

        if (!nameFormat || !descFormat) {
            console.log(`Name Index: ${nameIndex}, Desc Index: ${descIndex}, ${def.nameFormats.length}, ${def.descriptionFormats.length}`);
        }

        const retVal = new Items.Item();
        retVal.definition = def;
        retVal.name = nameFormat.replace(/{(.+?)}/g, replace).replace(/{(.+?)}/g, replace);
        retVal.description = descFormat.replace(/{(.+?)}/g, replace).replace(/{(.+?)}/g, replace);

        return retVal;
    }
};
