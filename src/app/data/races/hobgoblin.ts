import { Languages } from "app/data/languages";
import { WeaponList } from "app/data/weapons/weapon-list";
import { WeaponType } from "app/models/equipment";
import { FeatureType, TimeUnit } from "app/models/features";
import * as RaceModels from "app/models/races";

import * as Names from "../names";
import { RaceList } from "./race-list";

export const Hobgoblin: RaceModels.Race = {
    name: "Hobgoblin",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 80 },
    height: { base: 60, modifier: 12 },
    weight: { base: 150, modifier: 4 },
    nameDefinition: Names.Goblin,
    languages: { known: [Languages.Common, Languages.Goblin] },
    abilityMods: { "CON": +2, "INT": +1 },
    features: [
        {
            name: "Martial Training", type: FeatureType.Passive,
            description: "You are proficient with two martial weapons of your choice and with light armor.",
            weaponProficiencies: [{ proficiencies: WeaponList.filter(w => w.type === WeaponType.Martial) , count: 2}],
            // TODO: Make this real: armorProficiency: ArmorType.Light
        }, {
            name: "Saving Face", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            description: `
                Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss
                with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the
                number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't
                use it again until you finish a short or long rest.
            `
        }
    ],
    reference: { source: "VGM", page: 119 },
    subraces: []
};

RaceList[Hobgoblin.name] = Hobgoblin;
