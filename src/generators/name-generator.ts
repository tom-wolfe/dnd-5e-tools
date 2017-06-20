import * as Markov from "../markov";
import * as Races from "../models/races"

export class NameGenerator {
    private forenameGenerator: Markov.MarkovChain<string>;
    private surnameGenerator: Markov.MarkovChain<string>;

    constructor(definition: Races.NameDefinition, gender: string) {
        this.forenameGenerator = new Markov.MarkovChain<string>(definition.markovOrder);

        // TODO: Fix this.
        if (gender = "NB") { gender = "M"}

        definition.forenames[gender].forEach(name => {
            this.forenameGenerator.add(name.split(""));
        });

        if (definition.surnames && definition.surnames.length > 0) {
            this.surnameGenerator = new Markov.MarkovChain<string>(definition.markovOrder);
            definition.surnames.forEach(name => {
                this.surnameGenerator.add(name.split(""));
            });
        }
    }

    getForename(): string {
        return this.forenameGenerator.walk().join("");
    }

    getSurname(): string {
        if (!this.surnameGenerator) { return ""; }
        return this.surnameGenerator.walk().join("");
    }
};
