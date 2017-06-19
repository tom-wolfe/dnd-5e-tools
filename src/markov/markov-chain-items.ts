import { ChainState } from "./chain-state";
import { WeightedDictionary } from "./weighted-dictionary";

import * as Collections from "typescript-collections";

export class MarkovChainItems<T> extends Collections.Dictionary<ChainState<T>, WeightedDictionary<T>> { };
