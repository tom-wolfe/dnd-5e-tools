import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const ScaleMail: Equipment.Armor = new Equipment.Armor({
    name: "Scale mail",
    type: Equipment.ArmorType.Medium,
    ac: 14, plusDex: true,
    stealthDisadvantage: true,
});

ArmorList.push(ScaleMail);
