export class NameDefinition {
    name: string;
    markovOrder: number;
    forenames: { [gender: string]: string[] }
    surnames: string[];
};
