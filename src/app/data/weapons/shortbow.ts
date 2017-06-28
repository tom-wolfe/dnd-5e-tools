import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Shortbow: Equipment.Weapon = new Equipment.Weapon({
    name: "Shortbow",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Ammunition, Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6"
});

WeaponList.push(Shortbow);
