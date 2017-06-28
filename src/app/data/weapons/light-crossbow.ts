import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const LightCrossbow: Equipment.Weapon = new Equipment.Weapon({
    name: "Light Crossbow",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Ammunition, Equipment.WeaponProperty.Loading, Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d8"
});

WeaponList.push(LightCrossbow);
