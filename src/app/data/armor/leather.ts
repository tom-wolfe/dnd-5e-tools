import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const Leather: Equipment.Armor = new Equipment.Armor({
    name: "Leather armor",
    type: Equipment.ArmorType.Light,
    ac: 11, plusDex: true,
    stealthDisadvantage: false,
});

ArmorList.push(Leather);
