import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Battleaxe: Equipment.Weapon = new Equipment.Weapon({
    name: "Battleaxe",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Versatile],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d8"
});

WeaponList.push(Battleaxe);
