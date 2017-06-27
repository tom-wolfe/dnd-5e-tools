import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Greataxe: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Greataxe, {
    name: "Greataxe",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Heavy, Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d12"
});

WeaponList.push(Greataxe);
