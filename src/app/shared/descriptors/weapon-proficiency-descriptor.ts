import * as _ from "lodash";

import { WeaponList } from "../../data/weapons";
import { Character } from "../../models/characters/character";
import { WeaponType } from "../../models/equipment";
import { CharacterDescriptor } from "./";

export class WeaponProficiencyDescriptor extends CharacterDescriptor {

    describe(character: Character): string {
        if (character.weaponProficiencies.length < 1) { return "[None]"; }

        const profs: string[] = []
        let charWeapons = character.weaponProficiencies.map(w => w.thing);
        const simpleWeapons = WeaponList.filter(w => w.type === WeaponType.Simple);
        const martialWeapons = WeaponList.filter(w => w.type === WeaponType.Martial);

        if (simpleWeapons.length === _.intersection(simpleWeapons, charWeapons).length) {
            profs.push("Simple weapons");
            charWeapons = _.difference(charWeapons, simpleWeapons);
        }

        if (martialWeapons.length === _.intersection(martialWeapons, charWeapons).length) {
            profs.push("Martial weapons");
            charWeapons = _.difference(charWeapons, martialWeapons);
        }

        profs.push(...charWeapons.map(w => w.name).sort());
        return _.join(profs, ", ");
    }
};
