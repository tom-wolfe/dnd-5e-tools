import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Dart: Equipment.Weapon = new Equipment.Weapon({
    name: "Dart",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Finesse, Equipment.WeaponProperty.Thrown, Equipment.WeaponProperty.Ranged],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d4",
    range: { from: 20, to: 60 }
});

WeaponList.push(Dart);
