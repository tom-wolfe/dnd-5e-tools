import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Mace: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Mace, {
    name: "Mace",
    type: Equipment.WeaponType.Simple,
    properties: [],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d6"
});

WeaponList.push(Mace);
