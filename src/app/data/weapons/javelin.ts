import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Javelin: Equipment.Weapon = new Equipment.Weapon({
    name: "Javelin",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Thrown],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d6",
    range: { from: 30, to: 120 }
});

WeaponList.push(Javelin);
