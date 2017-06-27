import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Greatsword: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Greatsword, {
    name: "Greatsword",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Heavy, Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "2d6"
});

WeaponList[Greatsword.name] = Greatsword;
