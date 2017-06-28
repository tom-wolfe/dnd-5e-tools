import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Flail: Equipment.Weapon = new Equipment.Weapon({
    name: "Flail",
    type: Equipment.WeaponType.Martial,
    properties: [],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d8"
});

WeaponList.push(Flail);
