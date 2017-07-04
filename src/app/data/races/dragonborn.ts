/* tslint:disable: max-line-length */

import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";
import { DamageType } from "app/models/equipment";

export const Dragonborn: RaceModels.Race = new RaceModels.Race({
    name: "Dragonborn",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 15, max: 80 },
    height: { base: 66, modifier: 16 },
    weight: { base: 175, modifier: 12 },
    nameDefinition: Names.Dragonborn,
    languages: { known: [Languages.Common, Languages.Draconic] },
    abilityMods: { "STR": +2, "CHA": +1 },
    features: [
        {
            name: "Breath Weapon", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#BreathWeapon" },
        }, {
            name: "Damage Resistance", type: FeatureType.Passive,
            reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DamageResistance" },
        }
    ],
    reference: { source: "PHB", page: 32, url: "https://www.dndbeyond.com/characters/races/dragonborn" },
    subraces: [
        {
            name: "Black",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Acid],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" },
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" },
        },
        {
            name: "Blue",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Lightning],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" },
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" },
        },
        {
            name: "Brass",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Fire],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" },
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
        },
        {
            name: "Bronze",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Lightning],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
        },
        {
            name: "Copper",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Acid],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
        },
        {
            name: "Gold",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Fire],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
        },
        {
            name: "Green",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Poison],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
        },
        {
            name: "Red",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Fire],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
        },
        {
            name: "Silver",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Cold],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
        },
        {
            name: "White",
            features: [{
                name: "Draconic Ancestry", type: FeatureType.Passive,
                damageResistances: [DamageType.Cold],
                reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
            }], reference: { source: "PHB", page: 34, url: "https://www.dndbeyond.com/characters/races/dragonborn#DraconicAncestry" }
        }
    ]
});

RaceList.push(Dragonborn);
