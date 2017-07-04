import { FeatureType } from "../../models/features/feature-type";
import * as RaceModels from "../../models/races";
import { Languages } from "../languages";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Gnome: RaceModels.Race = new RaceModels.Race({
    name: "Gnome",
    size: "Small",
    speed: { walk: 25 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 450 },
    height: { base: 35, modifier: 8 },
    weight: { base: 35, modifier: 1 },
    nameDefinition: Names.Gnome,
    languages: { known: [Languages.Common, Languages.Gnomish] },
    abilityMods: { "INT": +2 },
    features: [
        {
            name: "Gnome Cunning", type: FeatureType.Passive,
            reference: { source: "PHB", page: 37, url: "https://www.dndbeyond.com/characters/races/gnome#GnomeCunning" },
        }
    ],
    reference: { source: "PHB", page: 35, url: "https://www.dndbeyond.com/characters/races/gnome" },
    subraces: [
        {
            name: "Forest",
            abilityMods: { "DEX": +1 },
            features: [
                {
                    name: "Natural Illusionist", type: FeatureType.Active,
                    reference: { source: "PHB", page: 37 },
                }, {
                    name: "Speak with Small Beasts", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 37 },
                }
            ],
            reference: { source: "PHB", page: 37 }
        }, {
            name: "Rock",
            abilityMods: { "CON": +1 },
            features: [
                {
                    name: "Artificer's Lore", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 37, url: "https://www.dndbeyond.com/characters/races/gnome#ArtificersLore" }
                }, {
                    name: "Tinker", type: FeatureType.Passive,
                    reference: { source: "PHB", page: 37, url: "https://www.dndbeyond.com/characters/races/gnome#Tinker" }
                }
            ],
            reference: { source: "PHB", page: 37, url: "https://www.dndbeyond.com/characters/races/gnome#RockGnome" }
        }, {
            name: "Deep",
            abilityMods: { "DEX": +1 },
            languages: { known: [Languages.Undercommon] },
            senses: { darkvision: 120 },
            features: [
                {
                    name: "Stone Camouflage", type: FeatureType.Passive,
                    reference: { source: "EE", page: 7, url: "https://www.dndbeyond.com/characters/races/gnome#StoneCamouflage" }
                }
            ],
            reference: { source: "EE", page: 7, url: "https://www.dndbeyond.com/characters/races/gnome#DeepGnome" }
        }
    ]
});

RaceList.push(Gnome);
