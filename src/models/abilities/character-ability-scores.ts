import { AbilityScores } from "./ability-scores";
import * as Characters from "../characters";

export class CharacterAbilityScores implements AbilityScores {
    character: Characters.Character;

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

    constructor(character: Characters.Character) {
        this.character = character;
    }
}
