import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const HandCrossbow: Equipment.Weapon = new Equipment.Weapon({
    name: "Hand Crossbow",
    type: Equipment.WeaponType.Martial,
    properties: [
        Equipment.WeaponProperty.Ammunition,
        Equipment.WeaponProperty.Light,
        Equipment.WeaponProperty.Loading,
        Equipment.WeaponProperty.Ranged
    ],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6",
    range: { from: 30, to: 120 }
});

WeaponList.push(HandCrossbow);
