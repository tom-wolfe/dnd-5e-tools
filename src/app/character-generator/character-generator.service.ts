import { Injectable } from "@angular/core";

import { Character } from "../models/characters/character";

@Injectable()
export class CharacterGeneratorService {
    character: Character;
};
