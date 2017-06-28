import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const Hide: Equipment.Armor = new Equipment.Armor({
    name: "Hide armor",
    type: Equipment.ArmorType.Medium,
    ac: 12, plusDex: true,
    stealthDisadvantage: false,
});

ArmorList.push(Hide);
