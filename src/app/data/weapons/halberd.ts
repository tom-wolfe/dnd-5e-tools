import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Halberd: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Halberd, {
    name: "Halberd",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Heavy, Equipment.WeaponProperty.Reach, Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d10"
});

WeaponList.push(Halberd);
