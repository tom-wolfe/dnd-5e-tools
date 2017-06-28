import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Blowgun: Equipment.Weapon = new Equipment.Weapon({
    name: "Blowgun",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Ammunition, Equipment.WeaponProperty.Loading],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1"
});

WeaponList.push(Blowgun);
