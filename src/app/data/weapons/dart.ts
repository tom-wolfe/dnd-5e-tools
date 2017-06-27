import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Dart: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Dart, {
    name: "Dart",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Finesse, Equipment.WeaponProperty.Thrown],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d4"
});

WeaponList.push(Dart);
