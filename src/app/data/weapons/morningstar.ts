import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Morningstar: Equipment.Weapon = new Equipment.Weapon({
    name: "Morningstar",
    type: Equipment.WeaponType.Martial,
    properties: [],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d8"
});

WeaponList.push(Morningstar);
