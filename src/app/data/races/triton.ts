import { Languages } from "../../data/languages";
import { DamageType } from "../../models/equipment/damage-type";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Triton: RaceModels.Race = new RaceModels.Race()
Object.assign(Triton, {
    name: "Triton",
    size: "Medium",
    speed: { walk: 30, swim: 30 },
    age: { maturity: 15, max: 200 },
    height: { base: 50, modifier: 20 },
    weight: { base: 120, modifier: 8 },
    nameDefinition: Names.Triton,
    languages: { known: [Languages.Common, Languages.Primordial] },
    abilityMods: { "STR": +1, "CON": +1, "CHA": +1 },
    features: [
        {
            name: "Amphibious", type: FeatureType.Passive,
            description: "You can breathe air and water."
        }, {
            name: "Control Air and Water", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.LongRest },
            description: `
                    A child of the sea, you can call on the magic of elemental air and water. You can cast fog cloud with this trait.
                    Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water
                    with it (see the spell in the sidebar). Once you cast a spell with this trait, you can't do so again until you finish
                    a long rest. Charisma is your spellcasting ability for these spells.
                `
        }, {
            name: "Emissary of the Sea", type: FeatureType.Passive,
            description: `
                    Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that
                    can breathe water. They can understand the meaning of your words, though you have no special ability to understand
                    them in return.
                `
        }, {
            name: "Guardians of the Depths", type: FeatureType.Passive,
            damageResistances: [DamageType.Cold],
            description: `
                    Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks
                    caused by a deep, underwater environment.
                `
        }
    ],
    reference: { source: "VGM", page: 113 },
    subraces: []
});

RaceList.push

RaceList.push(Triton);
