export class NamePartDefinition {
    source: { [gender: string]: string[] }
    mode: "markov" | "item";
    markovOrder?: number;
};
