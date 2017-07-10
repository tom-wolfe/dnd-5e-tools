import { Languages } from "app/data/languages";
import { Skills } from "app/data/skills";
import * as Characters from "app/models/characters";
import { FeatureType, TimeUnit } from "app/models/features";
import * as RaceModels from "app/models/races";

import * as Names from "../names";
import { RaceList } from "./race-list";

export const Lizardfolk: RaceModels.Race = new RaceModels.Race({
    name: "Lizardfolk",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 14, max: 65 },
    height: { base: 60, modifier: 20 },
    weight: { base: 120, modifier: 8 },
    nameDefinition: Names.Lizardfolk,
    languages: { known: [Languages.Common, Languages.Draconic] },
    abilityMods: { "CON": +2, "WIS": +1 },
    features: [
        {
            name: "Bite", type: FeatureType.Active,
            reference: { source: "VGM", page: 113 },
        }, {
            name: "Cunning Artisan", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            reference: { source: "VGM", page: 113 },
        }, {
            name: "Hold Breath", type: FeatureType.Passive,
            reference: { source: "VGM", page: 113 },
        }, {
            name: "Hunter's Lore", type: FeatureType.Passive,
            skillProficiencies: [{ proficiencies: [Skills.Nature, Skills.Perception, Skills.Stealth, Skills.Survival], count: 2 }],
            reference: { source: "VGM", page: 113 },
        }, {
            name: "Natural Armor", type: FeatureType.SingleMod,
            reference: { source: "VGM", page: 113 },
            apply(character: Characters.Character) {
                character.baseArmorClass = 13;
            }
        }, {
            name: "Hungry Jaws", type: FeatureType.Active,
            reference: { source: "VGM", page: 113 },
        }
    ],
    reference: { source: "VGM", page: 111 },
    subraces: []
});

RaceList.push(Lizardfolk);
