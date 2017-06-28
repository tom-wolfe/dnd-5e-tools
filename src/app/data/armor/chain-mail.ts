import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const ChainMail: Equipment.Armor = new Equipment.Armor({
    name: "Chain mail",
    type: Equipment.ArmorType.Heavy,
    ac: 16, plusDex: false,
    stealthDisadvantage: true,
});

ArmorList.push(ChainMail);
