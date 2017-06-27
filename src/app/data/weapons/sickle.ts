import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Sickle: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Sickle, {
    name: "Sickle",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Light],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d4"
});

WeaponList[Sickle.name] = Sickle;
