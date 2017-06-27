import { Item } from "app/models/equipment";

export const InstrumentList: { [index: string]: Item } = {};

export const Bagpipes: Item = new Item();
Object.assign(Bagpipes, { name: "Bagpipes" });

export const Drums: Item = new Item();
Object.assign(Drums, { name: "Drums" });

export const Dulcimer: Item = new Item();
Object.assign(Dulcimer, { name: "Dulcimer" });

export const Flute: Item = new Item();
Object.assign(Flute, { name: "Flute" });

export const Lute: Item = new Item();
Object.assign(Lute, { name: "Lute" });

export const Lyre: Item = new Item();
Object.assign(Lyre, { name: "Lyre" });

export const Horn: Item = new Item();
Object.assign(Horn, { name: "Horn" });

export const PanFlute: Item = new Item();
Object.assign(PanFlute, { name: "Pan Flute" });

export const Shawm: Item = new Item();
Object.assign(Shawm, { name: "Shawm" });

export const Viol: Item = new Item();
Object.assign(Viol, { name: "Viol" });
