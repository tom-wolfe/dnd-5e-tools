import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Trident: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Trident, {
    name: "Trident",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Thrown, Equipment.WeaponProperty.Versatile],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6"
});

WeaponList.push(Trident);
