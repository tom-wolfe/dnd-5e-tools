import { ArmorType } from "./armor-type";
import { Item } from "./item";

export class Armor extends Item {
    type: ArmorType;
    ac: number;
    plusDex: boolean;
    stealthDisadvantage: boolean;
    constructor(initial: Armor) { super(null); Object.assign(this, initial); }
};
