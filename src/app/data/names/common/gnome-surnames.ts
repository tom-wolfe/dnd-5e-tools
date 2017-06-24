import * as Races from "../../../models/races";

/* cSpell:disable */

/* Surnames adapted from: http://www.fantasynamegenerators.com/dwarf_names.php */

export const GnomeSurnames: { [index: string]: Names.NamePartDefinition } = {
    prefixAdjective: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "beech", "black", "blazing", "blessed", "blooming", "bright", "broad", "broken", "bronze", "dark", "deep", "diamond", "dim",
                "dusk", "earth", "emerald", "flint", "gleaming", "gold", "golden", "golden", "grey", "grip", "grog", "hidden", "iron",
                "light", "long", "minor", "oaken", "onyx", "pearl", "radiant", "ruby", "rune", "sapphire", "shadow", "shining", "silver",
                "silver", "stone", "storm", "thunder", "twilight", "whispered", "wild", "wooden"
            ]
        },
    },
    suffixNoun: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "arm", "barrel", "beard", "beech", "birch", "bottle", "boulder", "bow", "branch", "brow", "buckle", "cask", "cave", "chain",
                "chest", "chin", "chord", "claw", "clef", "cloak", "coat", "coin", "crag", "crest", "dale", "dime", "finch", "fisher",
                "foot", "forge", "fury", "gem", "guard", "hammer", "hammer", "hand", "hawk", "heart", "hide", "hill", "keg", "krag",
                "larch", "lark", "leaf", "loupe", "mantle", "mantle", "maple", "maul", "moss", "nickle", "note", "oak", "penny", "pitch",
                "rest", "rock", "shrew", "song", "sparrow", "storm", "stream", "tail", "tale", "thorn", "tone", "tree", "willow", "wing",
                "wood", "yarn", "yew"
            ]
        },
    },
    prefixNoun: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "ash", "barrel", "beast", "bottle", "boulder", "breve", "brick", "carat", "chain", "cloud", "crag", "dusk", "earth", "fire",
                "flint", "forest", "gale", "heart", "jade", "kobold", "loom", "metal", "rain", "rock", "rune", "shadow", "shield", "stone",
                "story", "sword", "tale", "toy", "tree", "web", "web", "wind", "wood"
            ]
        },
    },
    suffixAdjective: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "bender", "binder", "born", "braid", "brewer", "bringer", "bringer", "cutter", "digger", "forged", "forger", "forger",
                "maker", "marked", "rider", "seeker", "shaker", "shaper", "singer", "smith", "speaker", "spinner", "tamer", "tinkerer",
                "walker", "weaver", "whisperer", "worker", "writer"
            ]
        },
    }
};