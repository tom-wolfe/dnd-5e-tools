import * as Collections from "typescript-collections";

import { NumberGenerator } from "../generators/number-generator";
import { ChainState } from "./chain-state";
import { MarkovChainItems } from "./markov-chain-items";
import { MarkovTerminalItems } from "./markov-terminal-items";
import { WeightedDictionary } from "./weighted-dictionary";

export class MarkovChain<T> {
    private readonly numGen: NumberGenerator = new NumberGenerator();

    private readonly order: number;
    private readonly items: MarkovChainItems<T> = new MarkovChainItems<T>()
    private readonly terminals: MarkovTerminalItems<T> = new MarkovTerminalItems<T>();

    constructor(order: number) {
        if (order < 0) {
            throw new RangeError("Order must not be less than 0.");
        }
        this.order = order;
    }

    add(items: T[]): void {
        this.addWithWeight(items, 1);
    }

    addWithWeight(items: T[], weight): void {
        const previous: Collections.Queue<T> = new Collections.Queue<T>()
        items.forEach(item => {
            const key = ChainState.fromQueue<T>(previous);
            this.addWithPrecedingChainAndWeight(key, item, weight);
            previous.enqueue(item);
            if (previous.size() > this.order) {
                previous.dequeue();
            }
        });

        const terminalKey = ChainState.fromQueue<T>(previous);
        let terminalWeight = weight;
        if (this.terminals.containsKey(terminalKey)) {
            terminalWeight += this.terminals.getValue(terminalKey);
        };
        this.terminals.setValue(terminalKey, terminalWeight);
    }

    addWithPrecedingChainAndWeight(state: ChainState<T>, next: T, weight: number): void {
        let weights: WeightedDictionary<T>;
        if (!this.items.containsKey(state)) {
            weights = new Collections.Dictionary<T, number>();
            this.items.setValue(state, weights);
        } else {
            weights = this.items.getValue(state);
        }

        let newWeight = weight;
        if (weights.containsKey(next)) {
            newWeight += weights.getValue(next);
        }
        weights.setValue(next, newWeight);
    }

    walk(): T[] {
        return this.walkWithPrevious([]);
    }

    walkWithPrevious(previous: T[]): T[] {
        const retVal: T[] = new Array();
        const state: Collections.Queue<T> = new Collections.Queue<T>();
        previous.forEach(x => state.add(x));

        while (true) {
            while (state.size() > this.order) {
                state.dequeue();
            }

            const key = ChainState.fromQueue<T>(state);

            if (!this.items.containsKey(key)) { break; }

            const weights: WeightedDictionary<T> = this.items.getValue(key);

            let terminalWeight = 0;
            if (this.terminals.containsKey(key)) {
                terminalWeight = this.terminals.getValue(key);
            }

            let total = 0;
            weights.forEach((k, v) => {total += v; return true; });

            const value = this.numGen.rollDie(total + terminalWeight);
            if (value > total) { break; }

            let currentWeight = 0;
            weights.forEach((k, v) => {
                currentWeight += v;
                if (currentWeight >= value) {
                    retVal.push(k);
                    state.enqueue(k);
                    return false;
                }
                return true;
            });
        }

        return retVal;
    }
};
