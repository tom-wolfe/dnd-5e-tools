import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Goblin: RaceModels.Race = new RaceModels.Race({
    name: "Goblin",
    size: "Small",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 8, max: 60 },
    height: { base: 33, modifier: 8 },
    weight: { base: 40, modifier: 3 },
    nameDefinition: Names.Goblin,
    languages: { known: [Languages.Common, Languages.Goblin] },
    abilityMods: { "DEX": +2, "CON": +1 },
    features: [
        {
            name: "Fury of the Small", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
                reference: { source: "VGM", page: 119 },
        }, {
            name: "Nimble Escape", type: FeatureType.Active,
            reference: { source: "VGM", page: 119 },
        }
    ],
    reference: { source: "VGM", page: 119 },
    subraces: []
});

RaceList.push(Goblin);
