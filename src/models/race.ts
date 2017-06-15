import { Size } from "./size";
import { Speed } from "./speed";
import { Reference } from "./reference";

export class Race {
    name: string;
    size: Size;
    speed: Speed;
    reference: Reference
    subraces: Subrace[];
};

export class Subrace {
    name: string;
    reference: Reference
};

// TODO: Allow racial stat bonuses.
