import * as Characters from "../characters";
import { Senses } from "./senses";

export class CharacterSenses implements Senses {
    character: Characters.Character;

    get darkvision(): number {
        return this.getSense("darkvision");
    }
    get blindsight(): number {
        return this.getSense("blindsight");
    }
    get tremorsense(): number {
        return this.getSense("tremorsense");
    }
    get truesight(): number {
        return this.getSense("truesight");
    }

    private getSense(sense: string): number {
        if (!this.character.race.senses) { return 0; }

        let mod = this.character.race.senses[sense] || 0;
        let temp = 0;
        if (this.character.subrace && this.character.subrace.senses && (temp = this.character.subrace.senses[sense])) {
            mod = temp;
        }
        return mod;
    }

    constructor(character: Characters.Character) {
        this.character = character;
    }
}
