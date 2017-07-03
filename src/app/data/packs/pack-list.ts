import { ItemQuantity } from "../../models/equipment/item-quantity";

import { Item } from "app/models/equipment";
import * as Tools from "app/data/tools";

export const PackList: (Item | ItemQuantity)[][] = [];

export const BurglarPack: (Item | ItemQuantity)[] = [
    new Item("backpack"),
    new Item("bag of 1,000 ball bearings"),
    new Item("10 ft. of string"),
    new Item("bell"),
    new ItemQuantity(new Item("candles"), 5),
    new Item("crowbar"),
    new Item("hammer"),
    new ItemQuantity(new Item("pitons"), 10),
    new Item("hooded lantern"),
    new ItemQuantity(new Item("flask of oil"), 2),
    new ItemQuantity(new Item("rations"), 5),
    new Item("tinder box"),
    new Item("waterskin"),
    new Item("50 ft. hempen rope"),
];
PackList.push(BurglarPack);

export const DiplomatPack: (Item | ItemQuantity)[] = [
    new Item("chest"),
    new ItemQuantity(new Item("scroll case"), 2),
    new Item("fine clothes"),
    new Item("bottle of ink"),
    new Item("ink pen"),
    new Item("lamp"),
    new ItemQuantity(new Item("flask of oil"), 2),
    new ItemQuantity(new Item("sheet of paper"), 5),
    new Item("vial of perfume"),
    new Item("sealing wax"),
    new Item("soap")
];
PackList.push(DiplomatPack);

export const DungeoneerPack: (Item | ItemQuantity)[] = [
    new Item("backpack"),
    new Item("crowbar"),
    new Item("hammer"),
    new ItemQuantity(new Item("pitons"), 10),
    new ItemQuantity(new Item("torches"), 10),
    new Item("tinderbox"),
    new ItemQuantity(new Item("rations"), 10),
    new Item("waterskin"),
    new Item("50 ft. hempen rope")
];
PackList.push(DungeoneerPack);

export const EntertainerPack: (Item | ItemQuantity)[] = [
    new Item("backpack"),
    new Item("bedroll"),
    new ItemQuantity(new Item("costume"), 2),
    new ItemQuantity(new Item("candles"), 5),
    new ItemQuantity(new Item("rations"), 5),
    new Item("waterskin"),
    Tools.DisguiseKit,
];
PackList.push(EntertainerPack);

export const ExplorerPack: (Item | ItemQuantity)[] = [
    new Item("backpack"),
    new Item("bedroll"),
    new Item("mess kit"),
    new Item("tinderbox"),
    new ItemQuantity(new Item("torches"), 10),
    new ItemQuantity(new Item("rations"), 10),
    new Item("waterskin"),
    new Item("50 ft. hempen rope"),
];
PackList.push(EntertainerPack);

export const PriestPack: (Item | ItemQuantity)[] = [
    new Item("backpack"),
    new Item("blanket"),
    new ItemQuantity(new Item("candles"), 10),
    new Item("tinderbox"),
    new Item("alms box"),
    new ItemQuantity(new Item("block of incense"), 2),
    new Item("censer"),
    new Item("vestment"),
    new ItemQuantity(new Item("rations"), 2),
    new Item("waterskin"),
];
PackList.push(PriestPack);

export const ScholarPack: (Item | ItemQuantity)[] = [
    new Item("backpack"),
    new Item("book of lore"),
    new Item("bottle of ink"),
    new Item("ink pen"),
    new ItemQuantity(new Item("sheet of parchment"), 10),
    new Item("little bag of sand"),
    new Item("small knife")
];
PackList.push(ScholarPack);
