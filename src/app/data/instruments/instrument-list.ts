import { Item } from "app/models/equipment";

export const InstrumentList: Item[] = [];

export const Bagpipes: Item = new Item();
Object.assign(Bagpipes, { name: "Bagpipes" });
InstrumentList.push(Bagpipes);

export const Drums: Item = new Item();
Object.assign(Drums, { name: "Drums" });
InstrumentList.push(Drums);

export const Dulcimer: Item = new Item();
Object.assign(Dulcimer, { name: "Dulcimer" });
InstrumentList.push(Dulcimer);

export const Flute: Item = new Item();
Object.assign(Flute, { name: "Flute" });
InstrumentList.push(Flute);

export const Lute: Item = new Item();
Object.assign(Lute, { name: "Lute" });
InstrumentList.push(Lute);

export const Lyre: Item = new Item();
Object.assign(Lyre, { name: "Lyre" });
InstrumentList.push(Lyre);

export const Horn: Item = new Item();
Object.assign(Horn, { name: "Horn" });
InstrumentList.push(Horn);

export const PanFlute: Item = new Item();
Object.assign(PanFlute, { name: "Pan Flute" });
InstrumentList.push(PanFlute);

export const Shawm: Item = new Item();
Object.assign(Shawm, { name: "Shawm" });
InstrumentList.push(Shawm);

export const Viol: Item = new Item();
Object.assign(Viol, { name: "Viol" });
InstrumentList.push(Viol);
