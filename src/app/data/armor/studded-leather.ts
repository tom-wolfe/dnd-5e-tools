import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const StuddedLeather: Equipment.Armor = new Equipment.Armor({
    name: "Studded leather",
    type: Equipment.ArmorType.Light,
    ac: 12, plusDex: true,
    stealthDisadvantage: false,
});

ArmorList.push(StuddedLeather);
