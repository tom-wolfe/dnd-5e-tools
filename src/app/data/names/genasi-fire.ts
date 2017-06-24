import * as Races from "../../models/races";
import { NameList } from "./name-list";

/* cSpell:disable */

export const GenasiFire: Races.NameDefinition = {
    name: "Genasi (Fire)",
    formats: ["{forename}"],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                /* Adapted from from: http://www.fantasynamegenerators.com/dnd-genasi-names.php */
                "N": [
                    "ablaze", "alight", "ardor", "ardour", "arson", "ash", "austral", "bake", "beacon", "blaze", "blight", "boil",
                    "bonfire", "brand", "broil", "burn", "calcine", "candle", "cauterize", "char", "charcoal", "cinder", "coal",
                    "combust", "conflagration", "cremate", "crisp", "dante", "dantean", "ember", "enkindle", "explosion", "fervor",
                    "fever", "fiery", "flame", "flare", "flash", "flicker", "flux", "forge", "frizzle", "fry", "fuego", "fuel", "fume",
                    "furnace", "glare", "gleam", "glint", "glow", "grill", "heat", "hell", "hellfire", "hot", "igneous", "ignite",
                    "ignition", "incendiary", "incinerate", "infernal", "inferno", "kiln", "kindle", "lantern", "lava", "light", "lit",
                    "magma", "melt", "nether", "oven", "parch", "phoenix", "piping", "pyre", "pyro", "red", "roast", "scald", "scorch",
                    "scoria", "sear", "seethe", "shine", "singe", "sizzle", "smoke", "smolder", "soot", "spark", "sultry", "sun", "swelter",
                    "thermal", "thermo", "tinder", "toast", "torch", "torrid", "volcano", "warmth", "wildfire", "wither"
                ]
            },
        }
    }
};

NameList[GenasiFire.name] = GenasiFire;
