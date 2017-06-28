import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Scimitar: Equipment.Weapon = new Equipment.Weapon({
    name: "Scimitar",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Finesse, Equipment.WeaponProperty.Light],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d6"
});

WeaponList.push(Scimitar);
