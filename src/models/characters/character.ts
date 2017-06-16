import * as Data from "../../data/";
import * as Races from "../races";
import * as Abilities from "../abilities";

export class Character {
    baseAbilities: Abilities.AbilityScores = new Abilities.BasicAbilityScores();
    abilities: Abilities.AbilityScores = new Abilities.CharacterAbilityScores(this);
    race: Races.Race;
    subrace: Races.Subrace;
    alignment: string;
    get alignmentDescription() {
        return Data.Alignments[this.alignment];
    }
};
