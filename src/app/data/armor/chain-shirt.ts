import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const ChainShirt: Equipment.Armor = new Equipment.Armor({
    name: "Chain shirt",
    type: Equipment.ArmorType.Medium,
    ac: 13, plusDex: true,
    stealthDisadvantage: false,
});

ArmorList.push(ChainShirt);
