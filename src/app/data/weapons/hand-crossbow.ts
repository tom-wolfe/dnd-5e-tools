import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const HandCrossbow: Equipment.Weapon = new Equipment.Weapon();
Object.assign(HandCrossbow, {
    name: "Hand Crossbow",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Ammunition, Equipment.WeaponProperty.Light, Equipment.WeaponProperty.Loading],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6"
});

WeaponList.push(HandCrossbow);
