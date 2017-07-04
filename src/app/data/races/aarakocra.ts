import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Aarakocra: RaceModels.Race = new RaceModels.Race({
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
            reference: { source: "EE", page: 5, url: "https://www.dndbeyond.com/characters/races/aarakocra#Flight" },
        }, {
            name: "Talons", type: FeatureType.Active,
            reference: { source: "EE", page: 5, url: "https://www.dndbeyond.com/characters/races/aarakocra#Talons" },
        }
    ],
    reference: { source: "EE", page: 3, url: "https://www.dndbeyond.com/characters/races/aarakocra" },
    subraces: []
});

RaceList.push(Aarakocra);
