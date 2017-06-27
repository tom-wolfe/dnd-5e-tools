import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Javelin: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Javelin, {
    name: "Javelin",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Thrown],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6"
});

WeaponList.push(Javelin);
