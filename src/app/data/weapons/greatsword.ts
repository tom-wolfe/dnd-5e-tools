import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Greatsword: Equipment.Weapon = new Equipment.Weapon({
    name: "Greatsword",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Heavy, Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "2d6"
});

WeaponList.push(Greatsword);
