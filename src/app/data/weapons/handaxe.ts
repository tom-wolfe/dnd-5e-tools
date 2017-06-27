import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Handaxe: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Handaxe, {
    name: "Handaxe",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Light, Equipment.WeaponProperty.Thrown],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d6"
});

WeaponList[Handaxe.name] = Handaxe;
