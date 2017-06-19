import { Descriptor } from "./descriptor";
import * as Characters from "../models/characters";

export class AgeDescriptor extends Descriptor {
    describe(character: Characters.Character): string {
        const band = this.getBand(character.age, character.race.age.maturity, character.race.age.max, 6);
        switch (band) {
            case 1: return "young adult"; // 20-30
            case 2: return "adult"; // 30-40
            case 3: return "middle aged"; // 40-50
            case 4: return "mature adult"; // 50-60
            case 5: return "late adulthood" // 60-70
            case 6: return "elderly" // 70-80
            default: return "adult";
        }
    }
};
