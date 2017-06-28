import { DamageType } from "./damage-type";
import { Item } from "./item";
import { WeaponProperty } from "./weapon-property";
import { WeaponType } from "./weapon-type";

export class Weapon extends Item {
    type: WeaponType;
    properties: WeaponProperty[];
    damageType: DamageType;
    damageDice: string;
    constructor(initial: Weapon) { super(null); Object.assign(this, initial); }
};
