import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const Shield: Equipment.Armor = new Equipment.Armor({
    name: "Shield",
    type: Equipment.ArmorType.Shield,
    ac: 2, plusDex: false,
    stealthDisadvantage: false,
});

ArmorList.push(Shield);
