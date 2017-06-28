import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const HalfPlate: Equipment.Armor = new Equipment.Armor({
    name: "Half plate",
    type: Equipment.ArmorType.Medium,
    ac: 15, plusDex: true,
    stealthDisadvantage: true,
});

ArmorList.push(HalfPlate);
