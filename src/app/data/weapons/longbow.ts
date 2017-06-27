import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Longbow: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Longbow, {
    name: "Longbow",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Ammunition, Equipment.WeaponProperty.Heavy],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d8"
});

WeaponList[Longbow.name] = Longbow;
