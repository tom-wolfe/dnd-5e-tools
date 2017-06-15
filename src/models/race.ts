import { Size } from "./size";
import { Speed } from "./speed";
import { AbilityScores } from "./ability-scores";
import { Reference } from "./reference";

export class Race {
    name: string;
    size: Size;
    speed: Speed;
    statMods: StatMods;
    reference: Reference;
    subraces: Subrace[];
};

export class Subrace {
    name: string;
    reference: Reference;
    statMods: StatMods;
};

export class StatMods {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    wisdom?: number;
    intelligence?: number;
    charisma?: number;
    additionalPoints?: number;
}