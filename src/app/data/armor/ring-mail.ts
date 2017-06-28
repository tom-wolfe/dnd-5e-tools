import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const RingMail: Equipment.Armor = new Equipment.Armor({
    name: "Ring mail",
    type: Equipment.ArmorType.Heavy,
    ac: 14, plusDex: false,
    stealthDisadvantage: true,
});

ArmorList.push(RingMail);
