import { ChainState } from "./chain-state";
import { WeightedDictionary } from "./weighted-dictionary";

export class MarkovTerminalItems<T> extends WeightedDictionary<ChainState<T>> { };
