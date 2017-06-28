import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const WarPick: Equipment.Weapon = new Equipment.Weapon({
    name: "War Pick",
    type: Equipment.WeaponType.Martial,
    properties: [],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d8"
});

WeaponList.push(WarPick);
