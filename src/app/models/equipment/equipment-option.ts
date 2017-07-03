import { Item, ItemQuantity } from "./";

export class EquipmentOption {
    items: (Item | ItemQuantity | EquipmentOption | (Item | ItemQuantity | EquipmentOption)[])[];
    count?: number;
};
