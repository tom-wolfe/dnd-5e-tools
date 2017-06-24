import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-kenku-names.php */

export const Kenku: Names.NameDefinition = {
    name: "Kenku",
    formats: [
        "{battleName}",
        "*{animalSound}*",
        "*{otherSound}*"
    ],
    parts: {
        battleName: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "angler", "baker", "barker", "basher", "bather", "beggar", "biter", "boiler", "bomber", "bonker", "bouncer", "braker",
                    "brander", "breaker", "broiler", "bruiser", "bubbler", "burner", "butcher", "buzzer", "cackler", "carver", "caster",
                    "chimer", "chitter", "chomper", "chopper", "clamor", "clamper", "clanger", "clapper", "clawer", "cleaver", "clicker",
                    "clinger", "clinker", "clipper", "clubber", "clucker", "cobbler", "cooker", "cougher", "crackler", "crinkler",
                    "croaker", "cruncher", "crusher", "cutter", "dangler", "deflater", "digger", "dipper", "doodler", "dragger", "drawer",
                    "dribbler", "driller", "dripper", "drummer", "duster", "enchanter", "engraver", "etcher", "exploder", "flapper",
                    "flipper", "flopper", "flusher", "forger", "fryer", "giggler", "gnasher", "gnawer", "gouger", "greaser", "griller",
                    "grinder", "growler", "gusher", "hammer", "hammerer", "hiccup", "hummer", "impaler", "inscriber", "itcher", "jangler",
                    "jingler", "knocker", "lasher", "locker", "lugger", "mangler", "masher", "mauler", "mewer", "mimer", "molder", "nailer",
                    "neigher", "nestler", "nibbler", "paddler", "piercer", "piper", "plunger", "presser", "prodder", "puffer", "raker",
                    "rasper", "rattler", "ripper", "roarer", "roaster", "ruffler", "rustler", "scooper", "scorcher", "scratcher",
                    "scribbler", "scrubber", "shaker", "shaver", "shearer", "shoveler", "shrieker", "sifter", "singer", "sketcher",
                    "slammer", "slicer", "smasher", "snapper", "sneezer", "snorer", "spitter", "splasher", "splitter", "squeaker",
                    "squealer", "squisher", "stamper", "stomper", "strangler", "striker", "strummer", "swatter", "sweeper", "swiper",
                    "tinkerer", "trampler", "walloper", "whacker", "whipper", "whistler"
                ]
            },
        },
        animalSound: {
            markovOrder: 2,
            mode: "item",
            maxLength: 20,
            source: {
                "N": [
                    "albatross call", "albatross flap", "alligator hiss", "alligator roar", "ape call", "ape hoot", "ape scratch", "aper",
                    "badger growl", "badger run", "badger scratch", "barker", "bat flap", "bat screech", "bat swoop", "bear growl",
                    "bear roar", "bear rustle", "bear step", "bear stomp", "beaver call", "beaver chew", "beaver nibble", "beaver rustle",
                    "bee buzzer", "bison breath", "bison call", "bison stomp", "bleater", "boar charge", "boar grunt", "boar rustle",
                    "boar squeal", "boar stamp", "boarer", "cackler", "cat call", "cat hiss", "cat purr", "cat rustle", "cat scratch",
                    "catter", "chirper", "cow moo", "cow step", "cow stomp", "cower", "coyote cackle", "coyote howl", "coyote yelp",
                    "coyote yowl", "cricket chirp", "cricketer", "croaker", "crocodile hiss", "crocodile roar", "crocodiler", "crow call",
                    "crow rustle", "crower", "deer clash", "deer rustle", "deer scratch", "deer stomp", "dino chew", "dino growl",
                    "dino roar", "dino snort", "dino stomp", "dog bark", "dog growl", "dog howl", "dog run", "dog sneeze", "dog step",
                    "dog wiggle", "dog yelp", "dog yip", "dog yowl", "dogger", "donkey call", "donkey stomp", "dove rustle", "dove swoop",
                    "dover", "dragon bite", "dragon breath", "dragon chew", "dragon roar", "dragon swoop", "duck quacker", "duck rustle",
                    "ducker", "eagle screech", "elephant roar", "elephant stampede", "elephant stomp", "falcon rustle", "falcon swoop",
                    "fox rustle", "fox yelp", "fox yowl", "foxer", "frog croak", "frog splash", "frogger", "gecko croak", "giraffe smash",
                    "giraffe snort", "giraffe stomp", "goat baa", "goat bleat", "goat chew", "goater", "goose hiss", "goose honk",
                    "growler", "hamster squeak", "hee-haw", "hisser", "hog oink", "hog snort", "honker", "hooter", "horse blow",
                    "horse neigh", "horse sneeze", "horse snort", "horse stamp", "horse whinny", "horser", "howler", "hyena cackle",
                    "hyena laugh", "jackal call", "jackal laugh", "jackal rustle", "lion growl", "lion roar", "monker", "monkey howl",
                    "monkey rustle", "monkey scream", "mouse peep", "mouse rustle", "mouse squeak", "mouser", "nightingale song",
                    "nightingaler", "oinker", "owl call", "owl hoot", "owl rustle", "owl swoop", "owler", "panda sneeze", "panther growl",
                    "panther roar", "parrot", "parrot bite", "parrot call", "parrot nibble", "parrot rustle", "parrot squawk", "parroter",
                    "pheasant call", "pheasant rustle", "pig snort", "pigeon coo", "pigeon rustle", "pigeoner", "quacker", "quail call",
                    "quail rustle", "quailer", "rabbit scream", "rabbit yelp", "ram ram", "ram stamp", "rammer", "rat", "rat rustle",
                    "rat squeak", "rat yelp", "ratter", "raven rustle", "rhino snort", "rhino stamp", "rook rustle", "rooker", "screamer",
                    "screecher", "seal bark", "seal flop", "sealer", "sheep baa", "sheep bleat", "singer", "snake hiss", "snake rattle",
                    "snake slither", "snaker", "snorter", "squawker", "squeaker", "squirrel chatter", "squirrel chitter", "squirrel nibble",
                    "squirrel rustle", "squirreler", "stampede", "swan cry", "swan flap", "swan hiss", "swan honk", "swanner",
                    "toad croak", "trumpet", "trumpeter", "turkey call", "turkey gobble", "tweeter", "vulture scream", "warbler",
                    "whale song", "wolf growl", "wolf howl", "wolf yelp", "wolfer", "wolverine growl", "wolverine yelp"
                ]
            },
        },
        otherSound: {
            markovOrder: 2,
            mode: "item",
            maxLength: 20,
            source: {
                "N": [
                    "net cast", "net splash", "anchor splash", "anchor chain", "anchor drop", "leather smack", "leather flick",
                    "leather drop", "hide smack", "hide flick", "hide drop", "paint drop", "paint stroke", "paint squeeze", "brush stroke",
                    "brush flick", "hammer crash", "hammer drop", "hammer clank", "nail drop", "nail tingle", "saw drop", "saw wobble",
                    "saw pull", "spade dig", "spade drop", "hoe dig", "hoe scrape", "hoe scratch", "mallet crash", "mallet smash",
                    "mallet drop", "chisel tick", "chisel cut", "chisel carve", "armor clank", "armor crash", "steel clank", "steel crash",
                    "steel drop", "furnace roar", "furnace door", "hatchet cut", "hatchet drop", "hatchet split", "hatchet chop",
                    "wood chop", "wood crack", "wood creak", "wood drop", "tree fall", "tree creak", "fire crackle", "fire roar",
                    "potion bubble", "potion crash", "potion gush", "potion swirl", "potion splash", "kettle bubble", "kettle splash",
                    "kettle bubble", "cauldron swirl", "cauldron stir", "cauldron bubble", "cauldron splash", "bell ring", "bell drop",
                    "crier bell", "bowstring flick", "bowstring stretch", "blacksmith clank", "lute pluck", "lute string", "glass shatter",
                    "fruit squish", "crate smash", "crate crack", "crate creak", "ship creak", "sail slap", "rope slap", "rope whip",
                    "book drop", "book slam", "page turn", "grain trash", "grain mill", "cork pop", "wood scrape", "sail flick"
                ]
            },
        }
    }
};

NameList[Kenku.name] = Kenku;
