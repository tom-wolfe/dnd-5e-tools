import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Club: Equipment.Weapon = new Equipment.Weapon({
    name: "Club",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Light],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d4"
});

WeaponList.push(Club);
