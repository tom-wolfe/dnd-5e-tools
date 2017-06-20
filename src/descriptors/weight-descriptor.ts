import { Descriptor } from "./descriptor";
import * as Characters from "../models/characters";

export class WeightDescriptor extends Descriptor {
    describe(character: Characters.Character): string {
        let baseHeight = character.race.height.base;
        let baseWeight = character.race.weight.base;
        let modWeight = character.race.weight.modifier;

        if (character.subrace && character.subrace.height) {
            baseHeight = character.subrace.height.base;
            baseWeight = character.subrace.weight.base;
            modWeight = character.subrace.weight.modifier;
        }

        const modHeight = character.height - baseHeight;
        const lowerWeight = baseWeight + modHeight;
        const upperWeight = baseWeight + modHeight * modWeight;

        const band = this.getBand(character.weight, lowerWeight, upperWeight, 5);
        switch (band) {
            case 1: return "skinny";
            case 2: return "slim";
            case 3: return "average";
            case 4: return "overweight";
            case 5: return "fat"
            default: return "average";
        }
    }
};
