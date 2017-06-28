import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Shortbow: Equipment.Weapon = new Equipment.Weapon({
    name: "Shortbow",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Ammunition, Equipment.WeaponProperty.TwoHanded, Equipment.WeaponProperty.Ranged],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6",
    range: { from: 80, to: 320 }
});

WeaponList.push(Shortbow);
