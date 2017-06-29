import * as Weapons from "app/data/weapons";
import * as _ from "lodash";

import { Character } from "../../models/characters/character";
import { CharacterDescriptor } from "./";

export class WeaponProficiencyDescriptor extends CharacterDescriptor {

    describe(character: Character): string {
        if (character.weaponProficiencies.length < 1) { return "[None]"; }

        const profs: string[] = []
        let charWeapons = character.weaponProficiencies.map(w => w.thing);

        if (Weapons.SimpleWeapons.length === _.intersection(Weapons.SimpleWeapons, charWeapons).length) {
            profs.push("Simple weapons");
            charWeapons = _.difference(charWeapons, Weapons.SimpleWeapons);
        }

        if (Weapons.MartialWeapons.length === _.intersection(Weapons.MartialWeapons, charWeapons).length) {
            profs.push("Martial weapons");
            charWeapons = _.difference(charWeapons, Weapons.MartialWeapons);
        }

        profs.push(...charWeapons.map(w => w.name).sort());
        return _.join(profs, ", ");
    }
};
