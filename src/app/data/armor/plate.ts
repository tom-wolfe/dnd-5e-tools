import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const Plate: Equipment.Armor = new Equipment.Armor({
    name: "Plate armor",
    type: Equipment.ArmorType.Heavy,
    ac: 18, plusDex: false,
    stealthDisadvantage: true,
});

ArmorList.push(Plate);
