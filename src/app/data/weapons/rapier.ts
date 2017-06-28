import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Rapier: Equipment.Weapon = new Equipment.Weapon({
    name: "Rapier",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Finesse],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d8"
});

WeaponList.push(Rapier);
