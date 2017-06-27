import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Aarakocra: RaceModels.Race = {
    name: "Aarakocra",
    size: "Medium",
    speed: { walk: 25, fly: 50 },
    age: { maturity: 3, max: 35 },
    height: { base: 54, modifier: 12 },
    weight: { base: 80, modifier: 2 },
    nameDefinition: Names.Aarakocra,
    languages: { known: [Languages.Common, Languages.Aarakocra, Languages.Primordial] },
    abilityMods: { "DEX": +2, "WIS": +1 },
    features: [
        {
            name: "Flight", type: FeatureType.Passive,
            description: "You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor."
        }, {
            name: "Talons", type: FeatureType.Active,
            description: "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit."
        }
    ],
    reference: { source: "EE", page: 2, url: "https://www.dndbeyond.com/characters/races/aarakocra" },
    subraces: []
};

RaceList[Aarakocra.name] = Aarakocra;