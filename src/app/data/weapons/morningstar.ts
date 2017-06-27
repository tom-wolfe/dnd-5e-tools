import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Morningstar: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Morningstar, {
    name: "Morningstar",
    type: Equipment.WeaponType.Martial,
    properties: [],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d8"
});

WeaponList[Morningstar.name] = Morningstar;
