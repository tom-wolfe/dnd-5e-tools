import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Maul: Equipment.Weapon = new Equipment.Weapon({
    name: "Maul",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.TwoHanded],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "2d6"
});

WeaponList.push(Maul);
