import { Race, Subrace } from "./race";
import { AbilityScores } from "./ability-scores";
import * as Data from "../data/";

export class Character {
    abilities: AbilityScores = new AbilityScores();
    race: Race = Data.Races[0];
    subrace: Subrace = Data.Races[0].subraces[0];
    alignment = "LG";
    get alignmentDescription() {
        return Data.Alignments[this.alignment];
    }
};
