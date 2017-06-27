import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Quarterstaff: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Quarterstaff, {
    name: "Quarterstaff",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Versatile],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d6"
});

WeaponList.push(Quarterstaff);
