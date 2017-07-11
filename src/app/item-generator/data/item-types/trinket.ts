import { JewelersTools } from "../../../data/artisan-tools";
import * as Items from "../../models/items";
import { ItemTypeList } from "./item-type-list";

/* cSpell:disable */

export const Trinket: Items.ItemDefinition = new Items.ItemDefinition();
Object.assign(Trinket, {
    name: "Trinket",
    iconClass: "mdi-book-open-page-variant",
    descriptionFormats: [ "" ],
    nameFormats: [
        "{color} book cover engraved with a {humanoid}'s face",
        "a small cloth {humanoid} doll filled with needles",
        "inseparable {substance} ring & {humanoid} finger",
        "a bag of {dice:2d20} {humanoid} teeth, {dice:1d6} of which are rotten",
        "a tiny sketch portrait of a {humanoid}",
        "jar with a pickled {humanoid}'s {bodyPart}",

        "{shape} of {substance} that {signal} in moonlight",
        "a small {substance} statuette of a smug {humanoid}",
        "a {substance} {jewelry} that never tarnishes",
        "a {substance} {shape} filled with dead by moving {insect}s",
        "small {substance} idol of a scary {animal}-like monster",
        "a 1-ounce {shape} of an {substance} material",

        "a {writing} written in a lost language",
        "an indecipherable {writing} with {color} ink",
        "{writing} with the details of a bank deposit in a far-flung city",
        "a {writing} with {2d10}% burnt",
        "a {writing} of a legends's rise and fall, with {2d10}% missing",
        "a {writing} of a complex mechanical contraption",

        "pair of {substance} dice, each with a {symbol} symbol on the '6' side",
        "a {substance} coin with a {symbol} scratched into the tails side",
        "a {substance} sword hilt with a {symbol} on the bottom",
        "a quality scabbard of {substance} with a {symbol} on each side",
        "a mosaic tile showing a {color} {symbol}",
        "a {substance} lock with no keyhole, only an engraved {symbol}",

        "{bodyPart} of an {animal}-like, but unknown beast",
        "a tiny {bodyPart} perhaps from a {monster}",
        "{dice:1d6} play knights, one with a missing {bodyPart}",
        "small monster {bodyPart} carved from {substance}",
        "small {shape} made of fused {bodyPart}s",
        "{insect} in cube of {color} glass",

        "first sized bright {substance} {insect}",
        "a 1-pound egg with a bright {color} shell",
        "a small {color} wood box of {smallObjects}",
        "a {color} monocle frame a {color} lens",
        "{substance} {shape} container that makes rain noises",
        "{dice:2d4} small jars of {color} paint.",

        "an old {substance} chess piece",
        "a {substance} coin minted in a far off land",
        "a {substance} vial filled with nail clippings",
        "a {substance} orb etched with strange runes",
        "a multicolored {substance} disk",
        "a {substance} urn said to contain a hero's ashes",

        "set of pipes that when played blow {signal}",
        "pot that {signal}s when hot",
        "{jewelry} emits {signal} when near water",
        "a mug with a {humanoid} face in the bottom",
        "{dice:2d4} flasks of {color} dye",
        "torch that emits {signal} in addition to light",

        "a tiny mechanical {animal} that moves when not watched",
        "a tiny mechanical {insect} that moves when not watched",
        "a miniature {state} {animal}",
        "a {substance} pentacle with an {animal} head etched into the center",
        "a {color} fan, when unfolded shows a sleeping {animal}",
        "a {animal}'s foot attached to a {substance} chain",
        "a dead {animal} the size of a hand",
        "a dead {insect} the size of a hand",

        "an ornate dwarven {jewelry}",
        "fraudulent {substance} {jewelry}",
        "{jewelry} with a hidden lockpick",
        "{jewelry} with a tiny hidden closeable cavity",
        "doll-scale {substance} {jewelry}",
        "{jewelry} with a riddle inscribed",

        "an ancient {weapon} of {culture} design",
        "a relative's {weapon} used in a great quest",
        "decorative, brittle {weapon} made of {substance}",
        "{weapon} inscribed with {symbol}",
        "{weapon} hidden inside a torch",
        "set of {dice:2d4} {weapons} sized for an 18\" doll",

        "small weightless {shape} of {substance}",
        "an old {substance} {smallObject}",
        "a {substance} eye",
        "a {substance} mask, with traces of blood",
        "a {substance} skull the size of a coin",
        "doll-scale {weapon} made from {substance}"
    ],
    parts: {
        animal: [
            "cat", "crab", "dog", "ferret", "fish", "frog", "goat", "horse", "rabbit", "rat", "raven", "snake"
        ],
        bodyPart: [
            "brain", "ear", "eye", "finger", "hand", "paw", "heart", "scale", "skin", "scalp", "skull", "toe", "tooth", "wing"
        ],
        color: [
            "black", "blue", "brown", "gold", "green", "maroon", "orange", "red", "silver", "violet", "white", "yellow"
        ],
        culture: [
            "dwarven", "elven", "human", "gnomish", "orcish"
        ],
        humanoid: [
            "dwarf", "elf", "human", "half-elf", "gnome", "halfling", "lizardfolk", "ogre", "orc", "hobgoblin", "goblin", "kobold"
        ],
        insect: [
            "ant", "caterpillar", "dragonfly", "lady bug", "moth", "praying mantis", "scarab beetle", "scorpion", "scorpionfly", "spider",
            "stick bug", "wasp"
        ],
        jewelry: [
            "amulet", "anklet", "belly chain", "bracelet", "brooch", "earring", "hairpin", "necklace", "pendant", "ring", "tiara"
        ],
        monster: [
            "basilisk", "chimera", "cyclops", "griffin", "hydra", "manticore", "medusa", "minotaur", "pegasus", "roc", "sphinx", "unicorn"
        ],
        signal: [
            "beeps", "bubbles", "chirps", "darkens", "dust spews", "flashes", "fogs", "glows", "mists", "smokes", "sparks", "whistles"
        ],
        shape: [
            "cone", "cube", "cylinder", "dodecahedron", "hexagonal prism", "hexagonal pyramid", "icosahedron", "octahedron", "orb",
            "pyramid", "sphere", "square pyramid", "triangular prism"
        ],
        smallObject: [
            "buttons", "candles", "feathers", "ink bottle", "ink pen", "needles", "pitons", "parchment", "seeds", "spikes", "utensils",
            "vials"
        ],
        substance: [
            "alabaster", "bone", "brass", "crystal", "glass", "gold", "leather", "obsidian", "silver", "stone", "wood", "unknown"
        ],
        symbol: [
            "air", "crescent moon", "cross", "earth", "eye", "fire", "full moon", "heart", "lightning bolt", "scales of justice", "skull",
            "water"
        ],
        weapon: [
            "arrow", "blowgun", "bolt", "caltrop", "club", "dart", "knife", "net", "sap", "sling bullets", "spear", "whip"
        ],
        writing: [
            "blueprint", "book", "folder of papers", "diary", "letter", "loose notes", "map", "notebook", "parchment", "playing card",
            "receipt", "scroll"
        ]
    }
});

ItemTypeList.push(Trinket);
