import { Item } from "app/models/equipment";

export const ToolList: Item[] = [];

export const DisguiseKit: Item = new Item({ name: "Disguise kit" });
ToolList.push(DisguiseKit);

export const ForgeryKit: Item = new Item({ name: "Forgery kit" });
ToolList.push(ForgeryKit);

export const HerbalismKit: Item = new Item({ name: "Herbalism kit" });
ToolList.push(HerbalismKit);

export const NavigatorsTools: Item = new Item({ name: "Navigator's tools" });
ToolList.push(NavigatorsTools);

export const PoisonersKit: Item = new Item({ name: "Poisoner's kit" });
ToolList.push(PoisonersKit);

export const ThievesTools: Item = new Item({ name: "Thieves' tools" });
ToolList.push(ThievesTools);
