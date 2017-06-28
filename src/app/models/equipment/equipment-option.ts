import { Item } from "./";

export class EquipmentOption {
    items: (Item | EquipmentOption)[][];
    count?: number;
};