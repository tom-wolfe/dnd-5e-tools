import * as Names from "app/models/names";

/* cSpell:disable */

/* Surnames adapted from: http://www.fantasynamegenerators.com/dwarf_names.php */

export const DwarfSurnames: { [index: string]: Names.NamePartDefinition } = {
    prefixAdjective: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "barbed", "battle", "beaten", "bitter", "black", "blazing", "blessed", "blood", "blunt", "bright", "broad", "broken",
                "bronze", "dark", "dark", "deep", "dim", "dusk", "earth", "flint", "frozen", "golden", "grey", "grim", "grip", "grog",
                "hard", "heavy", "iron", "light", "long", "oaken", "rune", "sapphire", "shadow", "shatter", "shattered", "silver",
                "steel", "stone", "storm", "strong", "sunder", "thunder", "twilight"
            ]
        },
    },
    suffixNoun: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "arm", "armour", "axe", "barrel", "beard", "blood", "bottle", "boulder", "bow", "braid", "branch", "brow",
                "buckle", "cask", "cave", "chain", "chest", "chin", "cloak", "coat", "coin", "crag", "dale", "foot", "forge", "fury",
                "guard", "hammer", "hand", "heart", "helm", "hide", "hill", "jaw", "keg", "krag", "mantle", "maul", "rock", "shield",
                "spine", "storm", "sword"
            ]
        },
    },
    prefixNoun: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "ash", "barrel", "battle", "beast", "blade", "blood", "bone", "bottle", "boulder", "brick", "chain", "crag",
                "dragon", "dusk", "earth", "fire", "flint", "frost", "giant", "goblin", "heart", "jade", "kobold", "metal", "orc",
                "rock", "rune", "shadow", "shield", "stone", "sword", "troll", "wyvern"
            ]
        },
    },
    suffixAdjective: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "bane", "basher", "beater", "bender", "biter", "blood", "born", "braid", "brand", "breaker", "brewer", "bringer",
                "buster", "cleaver", "crusher", "cutter", "delver", "digger", "eater", "flayer", "forged", "forger", "hunter",
                "maker", "marked", "master", "ravager", "ripper", "seeker", "shaper", "smasher", "smith", "ward", "worker"
            ]
        },
    }
};