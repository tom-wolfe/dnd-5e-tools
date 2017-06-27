import { Item } from "app/models/equipment";

export const ToolList: Item[] = [];

export const DisguiseKit: Item = new Item();
Object.assign(DisguiseKit, { name: "Disguise kit" });
ToolList.push(DisguiseKit);

export const ForgeryKit: Item = new Item();
Object.assign(ForgeryKit, { name: "Forgery kit" });
ToolList.push(ForgeryKit);

export const HerbalismKit: Item = new Item();
Object.assign(HerbalismKit, { name: "Herbalism kit" });
ToolList.push(HerbalismKit);

export const NavigatorsTools: Item = new Item();
Object.assign(NavigatorsTools, { name: "Navigator's tools" });
ToolList.push(NavigatorsTools);

export const PoisonersKit: Item = new Item();
Object.assign(PoisonersKit, { name: "Poisoner's kit" });
ToolList.push(PoisonersKit);

export const ThievesTools: Item = new Item();
Object.assign(ThievesTools, { name: "Thieves' tools" });
ToolList.push(ThievesTools);
