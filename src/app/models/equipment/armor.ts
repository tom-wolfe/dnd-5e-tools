import { ArmorType } from "./armor-type";
import { Item } from "./item";

export class Armor extends Item {
    type: ArmorType;
    ac: number;
    plusDex: boolean;
    stealthDisadvantage: boolean;
};
