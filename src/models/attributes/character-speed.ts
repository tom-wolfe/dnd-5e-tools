import { Speed } from "./speed";
import * as Characters from "../characters";

export class CharacterSpeed implements Speed {
    character: Characters.Character;

    get walk(): number {
        return this.getSpeed("walk");
    }
    get fly(): number {
        return this.getSpeed("fly");
    }
    get swim(): number {
        return this.getSpeed("swim");
    }
    get climb(): number {
        return this.getSpeed("climb");
    }

    private getSpeed(speed: string): number {
        let mod = this.character.race.speed[speed] || 0;
        let temp = 0;
        if (this.character.subrace && this.character.subrace.speed && (temp = this.character.subrace.speed[speed])) {
            mod = temp;
        }
        return mod;
    }

    constructor(character: Characters.Character) {
        this.character = character;
    }
}
