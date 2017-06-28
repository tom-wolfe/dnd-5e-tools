import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Kobold: RaceModels.Race = new RaceModels.Race()
Object.assign(Kobold, {
    name: "Kobold",
    size: "Small",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 6, max: 120 },
    height: { base: 31, modifier: 8 },
    weight: { base: 35, modifier: 1 },
    nameDefinition: Names.Kobold,
    languages: { known: [Languages.Common, Languages.Draconic] },
    abilityMods: { "DEX": +2, "STR": -2 },
    features: [
        {
            name: "Pack Tactics", type: FeatureType.Passive,
            description: `
                You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the
                creature and the ally isn't incapacitated.
            `
        }, {
            name: "Grovel, Cower, and Beg", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            description: `
                As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn,
                your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use
                this trait, you can't use it again until you finish a short or long rest.
            `
        },
        CommonFeatures.sunlightSensitivity
    ],
    reference: { source: "VGM", page: 119 },
    subraces: []
});

RaceList.push

RaceList.push(Kobold);
