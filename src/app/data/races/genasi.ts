import { Languages } from "../../data/languages";
import { DamageType } from "../../models/equipment/damage-type";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Genasi: RaceModels.Race = new RaceModels.Race({
    name: "Genasi",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 18, max: 120 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.Human,
    languages: { known: [Languages.Common, Languages.Primordial] },
    abilityMods: { "CON": +2 },
    features: [],
    reference: { source: "EE", page: 6, url: "https://www.dndbeyond.com/characters/races/genasi" },
    subraces: [
        {
            name: "Air",
            nameDefinition: Names.GenasiAir,
            abilityMods: { "DEX": +1 },
            features: [
                {
                    name: "Unending Breath", type: FeatureType.Passive,
                    description: "You can hold your breath indefinitely while you’re not incapacitated."
                }, {
                    name: "Mingle with the Wind", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    description: `
                        You can cast the levitate spell once with this trait, requiring no material components, and you regain the
                        ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this
                        spell.
                    `
                }
            ],
            reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#AirGenasi" }
        }, {
            name: "Earth",
            nameDefinition: Names.GenasiEarth,
            abilityMods: { "STR": +1 },
            features: [
                {
                    name: "Earth Walk", type: FeatureType.Passive,
                    description: "You can move across difficult terrain made of earth or stone without expending extra movement."
                }, {
                    name: "Mingle with Stone", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    description: `
                        You can cast the pass without trace spell once with this trait, requiring no material components, and you
                        regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting
                        ability for this spell.
                    `
                }
            ],
            reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#EarthGenasi" }
        }, {
            name: "Fire",
            nameDefinition: Names.GenasiFire,
            abilityMods: { "INT": +1 },
            senses: { darkvision: 60 },
            features: [
                {
                    name: "Fire Resistance", type: FeatureType.Passive,
                    damageResistances: [DamageType.Fire],
                    description: "You have resistance to fire damage."
                }, {
                    name: "Reach to the Blaze", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    description: `
                        You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with
                        this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest.
                        Constitution is your spellcasting ability for these spells.
                    `
                }
            ],
            reference: { source: "EE", page: 8, url: "https://www.dndbeyond.com/characters/races/genasi#FireGenasi" }
        }, {
            name: "Water",
            nameDefinition: Names.GenasiWater,
            speed: { swim: 30 },
            abilityMods: { "WIS": +1 },
            features: [
                {
                    name: "Acid Resistance", type: FeatureType.Passive,
                    damageResistances: [DamageType.Acid],
                    description: "You have resistance to acid damage."
                }, {
                    name: "Amphibious", type: FeatureType.Passive,
                    description: "You can breathe air and water."
                }, {
                    name: "Call to the Wave", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    description: `
                        You know the shape water cantrip (see chapter 2). When you reach 3rd level, you can cast the create or destroy
                        water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you
                        finish a long rest. Constitution is your spellcasting ability for these spells.
                    `
                }
            ],
            reference: { source: "EE", page: 9, url: "https://www.dndbeyond.com/characters/races/genasi#WaterGenasi" }
        },
    ]
});

RaceList.push

RaceList.push(Genasi);
