import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Pike: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Pike, {
    name: "Pike",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Heavy, Equipment.WeaponProperty.Reach, Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d10"
});

WeaponList[Pike.name] = Pike;
