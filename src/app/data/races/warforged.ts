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
            description: "Your construction incorporates wood and metal, granting you a +1 bonus to Armor Class.",
            apply(character: Characters.Character) {
                character.baseArmorClass += 1;
            }
        }, {
            name: "Living Construct", type: FeatureType.Passive,
            conditionImmunities: [Condition.Diseased],
            description: `
                    Even though you were constructed, you are a living creature. You are immune to disease. You do not need to eat or
                    breathe, but you can ingest food and drink if you wish. Instead of sleeping, you enter an inactive state for 4 hours
                    each day. You do not dream in this state; you are fully aware of your surroundings and notice approaching enemies and
                    other events as normal.
                `
        }
    ],
    reference: {
        source: "UA", page: 2,
        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
    },
    subraces: []
});

RaceList.push

RaceList.push(Warforged);
