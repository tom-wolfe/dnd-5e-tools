import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Glaive: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Glaive, {
    name: "Glaive",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Heavy, Equipment.WeaponProperty.Reach, Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d10"
});

WeaponList.push(Glaive);
