import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const HeavyCrossbow: Equipment.Weapon = new Equipment.Weapon({
    name: "Heavy Crossbow",
    type: Equipment.WeaponType.Martial,
    properties: [
        Equipment.WeaponProperty.Ammunition,
        Equipment.WeaponProperty.Heavy,
        Equipment.WeaponProperty.Loading,
        Equipment.WeaponProperty.TwoHanded,
        Equipment.WeaponProperty.Ranged
    ],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d10",
    range: { from: 100, to: 400 }
});

WeaponList.push(HeavyCrossbow);
