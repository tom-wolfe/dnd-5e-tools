import * as Collections from "typescript-collections";

import { ChainState } from "./chain-state";
import { WeightedDictionary } from "./weighted-dictionary";

export class MarkovChainItems<T> extends Collections.Dictionary<ChainState<T>, WeightedDictionary<T>> { };
