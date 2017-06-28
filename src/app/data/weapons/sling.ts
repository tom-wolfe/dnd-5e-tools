import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Sling: Equipment.Weapon = new Equipment.Weapon({
    name: "Sling",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Ammunition, Equipment.WeaponProperty.Ranged],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d4",
    range: { from: 30, to: 120 }
});

WeaponList.push(Sling);
