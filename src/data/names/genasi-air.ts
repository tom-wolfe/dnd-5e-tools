/* cSpell:disable */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const GenasiAir: Races.NameDefinition = {
    name: "Genasi (Air)",
    formats: ["{forename}"],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": ["aerate", "aerial", "air", "ascend", "atmosphere", "aura", "aviate", "azure", "blast", "blow", "breath", "breeze", "celeste", "celestial", "chinook", "cruise", "current", "cyclone", "draft", "drift", "eddy", "empyrean", "fan", "float", "flow", "flurry", "flute", "flutter", "fly", "funnel", "gale", "gasp", "glide", "gust", "heave", "heaven", "hiss", "hover", "hurricane", "lift", "mistral", "murmur", "oxygen", "ozone", "pipe", "pneumatic", "puff", "rise", "sail", "shriek", "sigh", "sky", "soar", "squall", "storm", "stratosphere", "surge", "tempest", "tornado", "troposphere", "tumult", "turbine", "turbulence", "twister", "vent", "waft", "wheeze", "whiff", "whirl", "whirlwind", "whisk", "whistle", "wind", "wing", "zephyr"]
            },
        }
    }
};

NameList[GenasiAir.name] = GenasiAir;
