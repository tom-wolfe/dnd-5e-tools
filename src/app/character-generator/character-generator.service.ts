import "rxjs/add/operator/toPromise";

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Character } from "../models/characters/character";


@Injectable()
export class CharacterGeneratorService {
    character: Character;

    constructor(private http: Http) { }

    getTemplate(): Promise<string> {
        return this.http.get("/assets/templates/character.mustache")
            .toPromise()
            .then(res => res.text());
    }
};
