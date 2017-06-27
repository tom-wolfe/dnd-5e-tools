import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Shortsword: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Shortsword, {
    name: "Shortsword",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Finesse, Equipment.WeaponProperty.Light],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d6"
});

WeaponList.push(Shortsword);
