import { Languages } from "app/data/languages";
import { FeatureType } from "app/models/features";
import * as RaceModels from "app/models/races";

import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Orc: RaceModels.Race = new RaceModels.Race({
    name: "Orc",
    size: "Medium",
    senses: { darkvision: 60 },
    age: { maturity: 12, max: 50 },
    height: { base: 68, modifier: 12 },
    weight: { base: 230, modifier: 4 },
    nameDefinition: Names.Orc,
    languages: { known: [Languages.Common, Languages.Orc] },
    abilityMods: { "STR": +2, "CON": +1 },
    speed: { walk: 30 },
    features: [
        {
            name: "Aggressive", type: FeatureType.Active,
            reference: { source: "VGM", page: 120 },
        },
        CommonFeatures.menacing,
        CommonFeatures.powerfulBuild
    ],
    reference: { source: "VGM", page: 120 },
    subraces: []
});

RaceList.push(Orc);
