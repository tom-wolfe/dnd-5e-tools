import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Net: Equipment.Weapon = new Equipment.Weapon({
    name: "Net",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Special, Equipment.WeaponProperty.Thrown],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: ""
});

WeaponList.push(Net);
