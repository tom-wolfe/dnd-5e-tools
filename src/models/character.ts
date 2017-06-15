import { Race, Subrace } from "./race";
import { AbilityScores } from "./ability-scores";
import { BasicAbilityScores } from "./basic-ability-scores";
import * as Data from "../data/";

export class Character {
    baseAbilities: AbilityScores = new BasicAbilityScores();
    abilities: AbilityScores = new CharacterAbilityScores(this);
    race: Race;
    subrace: Subrace;
    alignment: string;
    get alignmentDescription() {
        return Data.Alignments[this.alignment];
    }
};

class CharacterAbilityScores implements AbilityScores {
    character: Character;

    get strength(): number {
        return this.getScore("strength");
    }
    get dexterity(): number {
        return this.getScore("dexterity");
    }
    get constitution(): number {
        return this.getScore("constitution");
    }
    get wisdom(): number {
        return this.getScore("wisdom");
    }
    get intelligence(): number {
        return this.getScore("intelligence");
    }
    get charisma(): number {
        return this.getScore("charisma");
    }

    private getScore(ability: string): number {
        let mod = this.character.baseAbilities[ability];
        let temp: number;
        if (temp = this.character.race.statMods[ability]) {
            mod += temp;
        }
        if (this.character.subrace && (temp = this.character.subrace.statMods[ability])) {
            mod += temp;
        }
        return mod;
    }

    constructor(character: Character) {
        this.character = character;
    }
}
