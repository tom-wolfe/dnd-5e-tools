export class NamePartDefinition {
    source: { [gender: string]: string[] }
    mode: "markov" | "item";
    maxLength?: number;
    markovOrder?: number;
};
