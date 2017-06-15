import { Race, Subrace } from "./race";
import { AbilityScores } from "./ability-scores";
import * as Data from "../data/";

export class Character {
    abilities: AbilityScores = new AbilityScores();
    race: Race;
    subrace: Subrace;
    alignment: string;
    get alignmentDescription() {
        return Data.Alignments[this.alignment];
    }
};
