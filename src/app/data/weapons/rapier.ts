import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Rapier: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Rapier, {
    name: "Rapier",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Finesse],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d8"
});

WeaponList[Rapier.name] = Rapier;
