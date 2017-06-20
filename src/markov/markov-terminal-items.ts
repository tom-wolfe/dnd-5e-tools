import { ChainState } from "./chain-state";
import { WeightedDictionary } from "./weighted-dictionary";

import * as Collections from "typescript-collections";

export class MarkovTerminalItems<T> extends WeightedDictionary<ChainState<T>> { };
