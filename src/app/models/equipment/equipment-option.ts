import { Item } from "./";

export class EquipmentOption {
    items: (Item | Item[] | EquipmentOption | EquipmentOption[])[];
    count?: number;
};