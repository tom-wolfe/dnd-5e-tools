import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const HeavyCrossbow: Equipment.Weapon = new Equipment.Weapon();
Object.assign(HeavyCrossbow, {
    name: "Heavy Crossbow",
    type: Equipment.WeaponType.Martial,
    properties: [
        Equipment.WeaponProperty.Ammunition,
        Equipment.WeaponProperty.Heavy,
        Equipment.WeaponProperty.Loading,
        Equipment.WeaponProperty.TwoHanded
    ],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d10"
});

WeaponList.push(HeavyCrossbow);
