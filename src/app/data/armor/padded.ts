import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const Padded: Equipment.Armor = new Equipment.Armor({
    name: "Padded",
    type: Equipment.ArmorType.Light,
    ac: 11, plusDex: true,
    stealthDisadvantage: true
});

ArmorList.push(Padded);
