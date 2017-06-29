import { Item } from "./";

export class EquipmentOption {
    items: (Item | EquipmentOption | (Item | EquipmentOption)[])[];
    count?: number;
};