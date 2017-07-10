import { Languages, Skills } from "app/data";
import { FeatureType } from "app/models/features";
import * as RaceModels from "app/models/races";

import * as Names from "../names";
import { RaceList } from "./race-list";

export const Changeling: RaceModels.Race = new RaceModels.Race({
    name: "Changeling",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 18, max: 80 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.Changeling,
    languages: { known: [Languages.Common], other: 2 },
    abilityMods: { "DEX": +1, "CHA": +1 },
    features: [
        {
            name: "Duplicity", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: [Skills.Deception] }],
            reference: {
                source: "UA", page: 1, document: "Eberron",
                url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf"
            },
        }, {
            name: "Shapechanger", type: FeatureType.Active,
            reference: {
                source: "UA", page: 1, document: "Eberron",
                url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf"
            },
        }
    ],
    reference: { source: "UA", page: 1, document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf" },
    subraces: []
});

RaceList.push(Changeling);
