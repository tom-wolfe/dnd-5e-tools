import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Greatclub: Equipment.Weapon = new Equipment.Weapon({
    name: "Greatclub",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d8"
});

WeaponList.push(Greatclub);
