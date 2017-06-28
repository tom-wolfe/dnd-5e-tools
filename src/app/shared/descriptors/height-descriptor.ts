import * as Characters from "app/models/characters";

import { CharacterDescriptor } from "./character-descriptor";

export class HeightDescriptor extends CharacterDescriptor {
    describe(character: Characters.Character): string {
        let baseHeight = character.race.height.base;
        let modHeight = character.race.height.modifier;
        if (character.subrace && character.subrace.height) {
            baseHeight = character.subrace.height.base;
            modHeight = character.subrace.height.modifier;
        }

        const band = this.getBand(character.height, baseHeight, baseHeight + modHeight, 5);
        switch (band) {
            case 1: return "very short";
            case 2: return "short";
            case 3: return "average";
            case 4: return "tall";
            case 5: return "very tall"
            default: return "average";
        }
    }
};
