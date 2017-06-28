import { Item } from "app/models/equipment";

export const InstrumentList: Item[] = [];

export const Bagpipes: Item = new Item({ name: "Bagpipes" });
InstrumentList.push(Bagpipes);

export const Drums: Item = new Item({ name: "Drums" });
InstrumentList.push(Drums);

export const Dulcimer: Item = new Item({ name: "Dulcimer" });
InstrumentList.push(Dulcimer);

export const Flute: Item = new Item({ name: "Flute" });
InstrumentList.push(Flute);

export const Lute: Item = new Item({ name: "Lute" });
InstrumentList.push(Lute);

export const Lyre: Item = new Item({ name: "Lyre" });
InstrumentList.push(Lyre);

export const Horn: Item = new Item({ name: "Horn" });
InstrumentList.push(Horn);

export const PanFlute: Item = new Item({ name: "Pan Flute" });
InstrumentList.push(PanFlute);

export const Shawm: Item = new Item({ name: "Shawm" });
InstrumentList.push(Shawm);

export const Viol: Item = new Item({ name: "Viol" });
InstrumentList.push(Viol);
