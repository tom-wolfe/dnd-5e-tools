import { Item } from "app/models/equipment";
import * as Tools from "app/data/tools";

export const PackList: Item[][] = [];

export const BurglarPack: Item[] = [
    new Item({ name: "backpack" }),
    new Item({ name: "bag of 1,000 ball bearings" }),
    new Item({ name: "10 feet of string" }),
    new Item({ name: "bell" }),
    new Item({ name: "5 candles" }),
    new Item({ name: "crowbar" }),
    new Item({ name: "hammer" }),
    new Item({ name: "10 pitons" }),
    new Item({ name: "hooded lantern" }),
    new Item({ name: "2 flasks of oil" }),
    new Item({ name: "5 days' rations" }),
    new Item({ name: "tinder box" }),
    new Item({ name: "waterskin" }),
    new Item({ name: "50 ft. hempen rope" }),
];
PackList.push(BurglarPack);

export const DiplomatPack: Item[] = [
    new Item({ name: "chest" }),
    new Item({ name: "2 map/scroll cases" }),
    new Item({ name: "fine clothes" }),
    new Item({ name: "bottle of ink" }),
    new Item({ name: "ink pen" }),
    new Item({ name: "lamp" }),
    new Item({ name: "2 flasks of oil" }),
    new Item({ name: "5 sheets of paper" }),
    new Item({ name: "vial of perfume" }),
    new Item({ name: "sealing wax" }),
    new Item({ name: "soap" })
];
PackList.push(DiplomatPack);

export const DungeoneerPack: Item[] = [
    new Item({ name: "backpack" }),
    new Item({ name: "crowbar" }),
    new Item({ name: "hammer" }),
    new Item({ name: "10 pitons" }),
    new Item({ name: "10 torches" }),
    new Item({ name: "tinderbox" }),
    new Item({ name: "10 days' rations" }),
    new Item({ name: "waterskin" }),
    new Item({ name: "50 ft. hempen rope" })
];
PackList.push(DungeoneerPack);

export const EntertainerPack: Item[] = [
    new Item({ name: "backpack" }),
    new Item({ name: "bedroll" }),
    new Item({ name: "2 costumes" }),
    new Item({ name: "5 candles" }),
    new Item({ name: "5 days' rations" }),
    new Item({ name: "waterskin" }),
    new Item(Tools.DisguiseKit),
];
PackList.push(EntertainerPack);

export const ExplorerPack: Item[] = [
    new Item({ name: "backpack" }),
    new Item({ name: "bedroll" }),
    new Item({ name: "mess kit" }),
    new Item({ name: "tinderbox" }),
    new Item({ name: "10 torches" }),
    new Item({ name: "10 days' rations" }),
    new Item({ name: "waterskin" }),
    new Item({ name: "50 ft. hempen rope" }),
];
PackList.push(EntertainerPack);

export const PriestPack: Item[] = [
    new Item({ name: "backpack" }),
    new Item({ name: "blanket" }),
    new Item({ name: "10 candles" }),
    new Item({ name: "tinderbox" }),
    new Item({ name: "alms box" }),
    new Item({ name: "2 blocks of incense" }),
    new Item({ name: "censer" }),
    new Item({ name: "vestment" }),
    new Item({ name: "2 days' rations" }),
    new Item({ name: "waterskin" }),
];
PackList.push(PriestPack);

export const ScholarPack: Item[] = [
    new Item({ name: "backpack" }),
    new Item({ name: "book of lore" }),
    new Item({ name: "bottle of ink" }),
    new Item({ name: "ink pen" }),
    new Item({ name: "10 sheets of parchment" }),
    new Item({ name: "little bag of sand" }),
    new Item({ name: "small knife" })
];
PackList.push(ScholarPack);
