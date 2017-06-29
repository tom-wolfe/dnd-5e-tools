import { Item } from "app/models/equipment";

export const GamingSetList: Item[] = [];

export const Dice: Item = new Item({ name: "Dice" });
GamingSetList.push(Dice);

export const DragonChess: Item = new Item({ name: "Dragon chess" });
GamingSetList.push(DragonChess);

export const PlayingCards: Item = new Item({ name: "Playing cards" });
GamingSetList.push(PlayingCards);

export const ThreeDragonAnte: Item = new Item({ name: "Three-Dragon Ante" });
GamingSetList.push(ThreeDragonAnte);
