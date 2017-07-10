import { Languages } from "../../data";
import * as Characters from "../../models/characters";
import { Condition } from "../../models/condition";
import { FeatureType } from "../../models/features/feature-type";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Warforged: RaceModels.Race = new RaceModels.Race({
    name: "Warforged",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 1, max: 500 },
    height: { base: 56, modifier: 20 },
    weight: { base: 180, modifier: 8 },
    nameDefinition: Names.Warforged,
    languages: { known: [Languages.Common], other: 1 },
    abilityMods: { "STR": +1, "CON": +1 },
    features: [
        {
            name: "Composite Plating", type: FeatureType.SingleMod,
            apply(character: Characters.Character) {
                character.baseArmorClass += 1;
            },
            reference: {
                source: "UA", page: 3,
                document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
            },
        }, {
            name: "Living Construct", type: FeatureType.Passive,
            conditionImmunities: [Condition.Diseased],
            reference: {
                source: "UA", page: 3,
                document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
            },
        }
    ],
    reference: {
        source: "UA", page: 3,
        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
    },
    subraces: []
});

RaceList.push(Warforged);
