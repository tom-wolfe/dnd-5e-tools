import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Spear: Equipment.Weapon = new Equipment.Weapon({
    name: "Spear",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Thrown, Equipment.WeaponProperty.Versatile],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6"
});

WeaponList.push(Spear);
