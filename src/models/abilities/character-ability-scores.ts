import { AbilityScores } from "./ability-scores";
import * as Characters from "../characters";

export class CharacterAbilityScores extends AbilityScores {
    character: Characters.Character;

    get(ability: string): number {
        let mod = this.character.baseAbilities.get(ability);
        let temp: number;
        if (temp = this.character.race.abilityMods[ability]) {
            mod += temp;
        }
        if (this.character.subrace && (temp = this.character.subrace.abilityMods[ability])) {
            mod += temp;
        }
        return mod;
    }

    set(ability: string, value: number): void {
        this.character.baseAbilities.set(ability, value);
    }

    constructor(character: Characters.Character) {
        super();
        this.character = character;
    }
}
