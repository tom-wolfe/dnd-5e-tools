import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Dagger: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Dagger, {
    name: "Dagger",
    type: Equipment.WeaponType.Simple,
    properties: [Equipment.WeaponProperty.Finesse, Equipment.WeaponProperty.Light, Equipment.WeaponProperty.Thrown],
    damageType: Equipment.DamageType.Piercing,
    damageDice: "1d4"
});

WeaponList[Dagger.name] = Dagger;
