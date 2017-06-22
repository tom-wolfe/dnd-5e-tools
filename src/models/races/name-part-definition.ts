export class NamePartDefinition {
    source: { [gender: string]: string[] }
    mode: "markov" | "item";
    maxLength?: number;
    markovMode?: "letter" | "word";
    markovSplitChar?: string;
    markovJoinChar?: string;
    markovOrder?: number;
};
