/* cSpell:disable */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const GenasiEarth: Races.NameDefinition = {
    name: "Genasi (Earth)",
    formats: ["{forename}"],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": ["adamant", "agate", "alabaster", "amethyst", "azurite", "basalt", "bedrock", "block", "boulder", "brick", "callous", "citrine", "clay", "cliff", "cobble", "cobblestone", "crag", "crystal", "dense", "diamond", "emerald", "flint", "fossil", "fossilstone", "garnet", "gem", "geo", "geode", "granite", "gravel", "grime", "groot", "ground", "hill", "hunk", "ingot", "jade", "jewel", "lapis", "lazuli", "limestone", "lodge", "lump", "malachite", "marble", "marmoreal", "mason", "masonry", "mineral", "monolith", "moonstone", "mountain", "nugget", "obsidian", "onyx", "opal", "ore", "pebble", "pellet", "peridot", "precious", "quarry", "quartz", "quartzite", "rock", "rocky", "rough", "rubble", "ruby", "rugged", "sand", "sandstone", "sapphire", "sediment", "shelf", "slab", "slate", "soapstone", "solid", "spinel", "stone", "stony", "sturdy", "terra", "tile", "topaz", "travertine", "turf", "umber", "wedge", "zircon"]
            },
        }
    }
};

NameList[GenasiEarth.name] = GenasiEarth;
