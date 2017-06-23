export class NamePartDefinition {
    source: { [gender: string]: string[] }
    mode: "markov" | "item" | "markovOrItem";
    maxLength?: number;
    markovMode?: "letter" | "word";
    markovSplitChar?: string;
    markovJoinChar?: string;
    markovOrder?: number;
};
