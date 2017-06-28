import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const GenasiEarth: Names.NameDefinition = new Names.NameDefinition()
Object.assign(GenasiEarth, {
    name: "Genasi (Earth)",
    formats: [{ name: "Forename", formats: ["{forename}"] }],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                /* Adapted from from: http://www.fantasynamegenerators.com/dnd-genasi-names.php */
                "N": [
                    "adamant", "agate", "alabaster", "amethyst", "azurite", "basalt", "bedrock", "block", "boulder", "brick", "callous",
                    "citrine", "clay", "cliff", "cobble", "cobblestone", "crag", "crystal", "dense", "diamond", "emerald", "flint",
                    "fossil", "fossilstone", "garnet", "gem", "geo", "geode", "granite", "gravel", "green", "grime", "groot", "ground",
                    "hill", "hunk", "ingot", "jade", "jewel", "lapis", "lazuli", "limestone", "lodge", "lump", "malachite", "marble",
                    "marmoreal", "mason", "masonry", "mineral", "monolith", "moonstone", "mountain", "nugget", "obsidian", "onyx", "opal",
                    "ore", "pebble", "pellet", "peridot", "precious", "quarry", "quartz", "quartzite", "rock", "rocky", "rough", "rubble",
                    "ruby", "rugged", "sand", "sandstone", "sapphire", "sediment", "shelf", "slab", "slate", "soapstone", "solid", "spinel",
                    "stone", "stony", "sturdy", "terra", "tile", "topaz", "travertine", "turf", "umber", "wedge", "zircon"
                ]
            },
        }
    }
});

NameList.push(GenasiEarth);
