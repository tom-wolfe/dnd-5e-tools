import { Size } from "./size";
import { Reference } from "./reference";

export class Race {
    name: string;
    size: Size;
    speed = 30;
    reference: Reference
    subraces: Subrace[];
};

export class Subrace {
    name: string;
    reference: Reference
};
