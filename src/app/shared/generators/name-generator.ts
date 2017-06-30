import * as _ from "lodash";
import * as Collections from "typescript-collections";

import * as Markov from "markov-typescript";
import * as Names from "app/models/names";
import { NumberGenerator } from "./number-generator";

export class NameGenerator {
    private numGen: NumberGenerator = new NumberGenerator();
    private markovGenerators: Collections.Dictionary<string, Markov.MarkovChain<string>>;

    constructor(private definitions: Names.NameDefinition[], private gender: string) {
        this.markovGenerators = new Collections.Dictionary<string, Markov.MarkovChain<string>>();
    }

    getName(format?: Names.NameDefinitionFormat): Names.Name {
        // Randomize gender if necessary.
        if (!this.gender) { this.markovGenerators.clear(); }
        const gender = this.gender || ["N", "M", "F"][this.numGen.rollDie(3) - 1];

        // Choose a name format.
        const def = this.definitions[this.numGen.rollDie(this.definitions.length) - 1];

        let formatToUse: Names.NameDefinitionFormat;
        if (def.formats.indexOf(format) > -1) {
            formatToUse = format;
        } else {
            formatToUse = def.formats[this.numGen.rollDie(def.formats.length) - 1];
        }

        // Replace the parts of the format.
        const name = formatToUse.formats[this.numGen.rollDie(formatToUse.formats.length) - 1].replace(/{(.+?)}/g, (match, part) => {
            const partDef = def.parts[part];
            if (!partDef) {
                throw new RangeError(`Name part ${part} has no definition in ${def.name}.`);
            }
            return this.getNamePart(part, partDef, gender);
        });

        const retVal = new Names.Name();
        retVal.gender = gender;
        retVal.definition = def;
        retVal.format = formatToUse;
        retVal.value = _.capitalize(name).replace(/[\(\) \*'\-]\w/g, match => {
            return match.toUpperCase();
        });

        return retVal;
    }

    getNamePart(name: string, partDef: Names.NamePartDefinition, gender: string): string {
        // For surnames.
        const availableGenders = Object.keys(partDef.source);
        if (availableGenders.indexOf(gender) < 0) { gender = availableGenders[this.numGen.rollDie(availableGenders.length) - 1]; }

        let selectedMode = partDef.mode as string;
        if (selectedMode === "markovOrItem") {
            selectedMode = ["markov", "item"][this.numGen.rollDie(2) - 1];
        }

        switch (selectedMode) {
            case "item":
                const index = this.numGen.rollDie(partDef.source[gender].length) - 1;
                return partDef.source[gender][index];
            case "markov":
                const chain = this.getChain(name, partDef, gender);

                let replacement = "";
                // Try 10 times for a reasonable length.
                for (let x = 0; x < 10; x++) {
                    replacement = chain.walk().join(partDef.markovJoinChar || "")
                    if (replacement.length < (partDef.maxLength || 10) && replacement.length > 2) {
                        break;
                    }
                }

                return replacement;
        }
    }

    private getChain(name: string, partDef: Names.NamePartDefinition, gender: string): Markov.MarkovChain<string> {
        if (!this.markovGenerators.containsKey(name)) {
            const generator = new Markov.MarkovChain<string>(partDef.markovOrder);
            partDef.source[gender].forEach(n => {
                generator.add(n.split(partDef.markovSplitChar || ""));
            });
            this.markovGenerators.setValue(name, generator);
        }
        return this.markovGenerators.getValue(name);
    }
};
