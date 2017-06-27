import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Lance: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Lance, {
    name: "Lance",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Reach, Equipment.WeaponProperty.Special],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d12"
});

WeaponList.push(Lance);
