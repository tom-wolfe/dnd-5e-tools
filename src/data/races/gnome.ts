import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Gnome: RaceModels.Race = {
    name: "Gnome",
    size: "Small",
    speed: { walk: 25 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 450 },
    height: { base: 35, modifier: 8 },
    weight: { base: 35, modifier: 1 },
    languages: { known: [ Languages.Common, Languages.Gnomish ] },
    statMods: { intelligence: +2 },
    features: [
        {
            name: "Gnome Cunning", type: "passive",
            description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
        }
    ],
    reference: { source: "PHB", page: 35, url: "https://www.dndbeyond.com/characters/races/gnome" },
    subraces: [
        {
            name: "Forest",
            statMods: { dexterity: +1 },
            features: [
                {
                    name: "Natural Illusionist", type: "active",
                    description: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it."
                }, {
                    name: "Speak with Small Beasts", type: "passive",
                    description: `
                        Through sounds and gestures, you can communicate simple ideas with Small ar smaller beasts. Forest gnomes
                        love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.
                    `
                }
            ],
            reference: { source: "PHB", page: 37 }
        }, {
            name: "Rock",
            statMods: { constitution: +1 },
            features: [
                {
                    name: "Artificer's Lore", type: "passive",
                    description: `
                        Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological
                        devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.
                    `
                }, {
                    name: "Tinker", type: "passive",
                    description: `
                        You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth
                        of materiaIs to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless
                        you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that
                        time, you can reclaim the materiaIs used to create it. You can have up to three such devices active at a time. When
                        you create a device, choose one of the following options:

                        Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier.
                        When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It
                        makes noises as appropriate to the creature it represents.

                        Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, ar campfire. Using
                        the device requires your action.

                        Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it
                        reaches the song's end or when it is closed.
                    `
                }
            ],
            reference: { source: "PHB", page: 37, url: "https://www.dndbeyond.com/characters/races/gnome#RockGnome" }
        }, {
            name: "Deep",
            statMods: { dexterity: +1 },
            languages: { known: [ Languages.Undercommon ] },
            senses: { darkvision: 120 },
            features: [
                {
                    name: "Stone Camouflage", type: "passive",
                    description: "You have advantage on Dexterity (stealth) checks to hide in rocky terrain."
                }
            ],
            reference: { source: "EE", page: 4, url: "https://www.dndbeyond.com/characters/races/gnome#DeepGnome" }
        }
    ]
};

Races[Gnome.name] = Gnome;
