import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const Breastplate: Equipment.Armor = new Equipment.Armor({
    name: "Breastplate",
    type: Equipment.ArmorType.Medium,
    ac: 14, plusDex: true,
    stealthDisadvantage: false,
});

ArmorList.push(Breastplate);
