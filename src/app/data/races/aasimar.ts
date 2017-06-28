import { DamageType } from "app/models/equipment";

import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Aasimar: RaceModels.Race = new RaceModels.Race()
Object.assign(Aasimar, {
    name: "Aasimar",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 160 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.Aasimar,
    languages: { known: [Languages.Common, Languages.Celestial] },
    abilityMods: { "CHA": +2 },
    features: [
        {
            name: "Celestial Resistance", type: FeatureType.Passive,
            damageResistances: [ DamageType.Necrotic, DamageType.Radiant ],
            description: "You have resistance to necrotic damage and radiant damage."
        }, {
            name: "Healing Hands", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.LongRest },
            description: `
                    As an action, you can touch a creature and cause it to regain a number of hit points equal to your level.
                    Once you use this trait, you can't use it again until you finish a long rest.
                `
        }, {
            name: "Light Bearer", type: FeatureType.Active,
            description: "You know the light cantrip. Charisma is your spellcasting ability for it."
        }
    ],
    reference: { source: "VGM", page: 104 },
    subraces: [
        {
            name: "Protector", abilityMods: { "WIS": +1 },
            features: [
                {
                    name: "Radiant Soul", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    description: `
                            Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes
                            to glimmer and two luminous, incorporeal wings to sprout from your back.

                            Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed
                            of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage
                            to it with an attack or a spell. The extra radiant damage equals your level.

                            Once you use this trait, you can't use it again until you finish a long rest.
                        `
                },
            ],
            reference: { source: "VGM", page: 105 }
        }, {
            name: "Scourge", abilityMods: { "CON": +1 },
            features: [
                {
                    name: "Radiant Consumption", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    description: `
                            Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing
                            light to radiate from you, pour out of your eyes and mouth, and threaten to char you.

                            Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light
                            in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each
                            creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on
                            each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack
                            or a spell. The extra radiant damage equals your level.

                            Once you use this trait, you can't use it again until you finish a long rest.
                        `
                },
            ],
            reference: { source: "VGM", page: 105 }
        }, {
            name: "Fallen", abilityMods: { "STR": +1 },
            features: [
                {
                    name: "Necrotic Shroud", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.LongRest },
                    description: `
                            Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes
                            to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant
                            you transform, other creatures within 10 feet of you that can see you must each succeed on a Charisma saving
                            throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your
                            next turn.

                            Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your
                            turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell.
                            The extra necrotic damage equals your level.

                            Once you use this trait, you can't use it again until you finish a long rest.
                        `
                },
            ],
            reference: { source: "VGM", page: 105 }
        }
    ]
});

RaceList.push

RaceList.push(Aasimar);
