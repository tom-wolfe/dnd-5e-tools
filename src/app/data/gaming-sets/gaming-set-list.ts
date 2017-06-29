import { Item } from "app/models/equipment";

export const GamingSetList: Item[] = [];

export const Dice: Item = new Item("Dice");
GamingSetList.push(Dice);

export const DragonChess: Item = new Item("Dragon chess");
GamingSetList.push(DragonChess);

export const PlayingCards: Item = new Item("Playing cards");
GamingSetList.push(PlayingCards);

export const ThreeDragonAnte: Item = new Item("Three-Dragon Ante");
GamingSetList.push(ThreeDragonAnte);
