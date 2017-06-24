import * as Races from "../../models/races";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from: http://www.fantasynamegenerators.com/dnd-shifter-names.php */

export const Shifter: Races.NameDefinition = {
    name: "Shifter",
    formats: ["{forename}"],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": [
                    "acorn", "almond", "ash", "astro", "badger", "barb", "basalt", "basil", "beast", "birch", "blast", "blaze", "bluff",
                    "bog", "boulder", "bramble", "breach", "briar", "brock", "brook", "burst", "canyon", "char", "chasm", "cinder", "claw",
                    "cliff", "cloud", "coal", "cobalt", "cobble", "comet", "cosmo", "crag", "crater", "dash", "drake", "drift", "dune",
                    "dusk", "dust", "echo", "fang", "flash", "flame", "flare", "flax", "flint", "flood", "foam", "fog", "forest", "fox",
                    "frost", "frostbite", "fume", "fury", "gale", "glare", "gorge", "grime", "grit", "grove", "gulch", "gust", "kindle",
                    "light", "lumber", "magma", "mahogany", "marsh", "mercury", "midnight", "mire", "moss", "mountain", "nebula", "newt",
                    "nightfall", "nightshade", "nimbus", "north", "nova", "nyx", "oak", "ocean", "onyx", "pitch", "pyre", "pyro",
                    "quicksilver", "ravine", "ridge", "rift", "river", "rock", "rubble", "scar", "shadow", "shrub", "silver", "smoke",
                    "soot", "spark", "spike", "spine", "steam", "steel", "stone", "storm", "surge", "talon", "thicket", "thistle", "thorn",
                    "thunder", "tide", "tiger", "timber", "tinder", "tor", "torrent", "vapor", "vermin", "vine", "void", "wave",
                    "willow", "wolf", "woods"
                ],
                "F": [
                    "abyss", "almond", "amber", "amethyst", "anemone", "aqua", "aurora", "autumn", "birch", "bloom", "blossom", "breeze",
                    "briar", "brook", "canyon", "chestnut", "cloud", "coral", "coyote", "crest", "cricket", "crystal", "dawn", "dew",
                    "dewdrop", "diamond", "elm", "ember", "emerald", "evening", "feather", "fern", "flare", "floe", "flora", "floret",
                    "flow", "fluff", "galaxy", "gem", "hail", "harley", "haze", "hazel", "horizon", "ice", "indigo", "iris", "isle", "ivy",
                    "jade", "jasmine", "juniper", "karma", "lake", "lavender", "leaf", "lily", "lightning", "luna", "magenta", "maple",
                    "marigold", "meadow", "midnight", "mist", "moon", "moss", "nebula", "nutmeg", "ocean", "olive", "opal", "orchid",
                    "pearl", "petal", "pine", "pinecone", "plume", "poison", "pyro", "quill", "rain", "raven", "rill", "river", "robin",
                    "rose", "rosemary", "ruby", "saffron", "sage", "sapphire", "scarlet", "shade", "silver", "sky", "snow", "snowflake",
                    "spring", "star", "stardust", "sugar", "summer", "sun", "sunrise", "sunset", "sunshine", "swill", "thistle", "tidal",
                    "tiger", "tinder", "topaz", "twig", "twilight", "urchin", "vapor", "violet", "whirl", "willow", "wind", "wing", "winter"
                ]
            },
        }
    }
};

NameList[Shifter.name] = Shifter;
