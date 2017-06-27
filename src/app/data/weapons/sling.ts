import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Sling: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Sling, {
    name: "Sling",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Ammunition],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d4"
});

WeaponList[Sling.name] = Sling;
