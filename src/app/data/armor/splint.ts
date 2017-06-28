import * as Equipment from "../../models/equipment/";
import { ArmorList } from "./armor-list";

export const Splint: Equipment.Armor = new Equipment.Armor({
    name: "Splint armor",
    type: Equipment.ArmorType.Heavy,
    ac: 17, plusDex: false,
    stealthDisadvantage: true,
});

ArmorList.push(Splint);
