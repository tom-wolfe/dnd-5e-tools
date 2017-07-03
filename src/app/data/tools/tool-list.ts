import { Item } from "app/models/equipment";

export const ToolList: Item[] = [];

export const DisguiseKit: Item = new Item("Disguise kit");
ToolList.push(DisguiseKit);

export const ForgeryKit: Item = new Item("Forgery kit");
ToolList.push(ForgeryKit);

export const HerbalismKit: Item = new Item("Herbalism kit");
ToolList.push(HerbalismKit);

export const NavigatorsTools: Item = new Item("Navigator's tools");
ToolList.push(NavigatorsTools);

export const PoisonersKit: Item = new Item("Poisoner's kit");
ToolList.push(PoisonersKit);

export const ThievesTools: Item = new Item("Thieves' tools");
ToolList.push(ThievesTools);
