import * as Characters from "app/models/characters";

import { Descriptor } from "./descriptor";

export abstract class CharacterDescriptor extends Descriptor<Characters.Character> {
    abstract describe(object: Characters.Character): string;
};
