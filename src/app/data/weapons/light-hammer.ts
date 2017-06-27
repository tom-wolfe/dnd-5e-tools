import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const LightHammer: Equipment.Weapon = new Equipment.Weapon();
Object.assign(LightHammer, {
    name: "Light hammer",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Light, Equipment.WeaponProperty.Thrown],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d4"
});

WeaponList[LightHammer.name] = LightHammer;
