/* cSpell:disable */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const GenasiWater: Races.NameDefinition = {
    name: "Genasi (Water)",
    formats: ["{forename}"],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": ["agua", "aqua", "azure", "basin", "bath", "bathe", "beck", "bore", "branch", "brine", "brook", "cleanse", "course", "creek", "current", "dabble", "damp", "deluge", "dew", "dewdrop", "douse", "downpour", "drain", "drench", "drift", "drip", "drizzle", "drop", "droplet", "drown", "eagre", "ebb", "estuary", "expanse", "flood", "flow", "flux", "fog", "fountain", "geyser", "gush", "hose", "hydra", "hydrogen", "influx", "jet", "lagoon", "lake", "lakelet", "liquid", "mere", "mist", "monsoon", "neptune", "ocean", "paddle", "plash", "plunge", "pond", "pool", "precip", "puddle", "quagmire", "rain", "rill", "rinse", "ripple", "river", "rivulet", "run", "runnel", "rush", "sea", "seiche", "shower", "soak", "spatter", "splash", "spout", "spring", "sprinkle", "storm", "stream", "streamlet", "surf", "surge", "swish", "tear", "teardrop", "tempest", "tidal", "tide", "torrent", "tributary", "tsunami", "typhoon", "vapor", "wash", "wave", "well", "wet"]
            },
        }
    }
};

NameList[GenasiWater.name] = GenasiWater;
