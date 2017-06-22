/* cSpell:disable */

/** Forenames adapted from http://www.fantasynamegenerators.com/english_names.php **/
/* Surnames adapted from http://www.fantasynamegenerators.com/fantasy-surnames.php */

import * as Races from "../../../models/races";

export const HumanNames: { [index: string]: Races.NamePartDefinition } = {
    forename: {
        markovOrder: 2,
        mode: "item",
        source: {
            "M": [
                "aaron", "adam", "aidan", "aiden", "alex", "alexander", "alfie", "andrew", "anthony", "archie", "arthur", "ashton",
                "bailey", "ben", "benjamin", "billy", "blake", "bobby", "bradley", "brandon", "caleb", "callum", "cameron", "charles",
                "charlie", "christopher", "cody", "connor", "corey", "daniel", "david", "declan", "dexter", "dominic", "dylan",
                "edward", "elliot", "ellis", "ethan", "evan", "ewan", "finlay", "finley", "frankie", "freddie", "frederick", "gabriel",
                "george", "harley", "harrison", "harry", "harvey", "hayden", "henry", "isaac", "jack", "jackson", "jacob", "jake",
                "james", "jamie", "jay", "jayden", "jenson", "joe", "joel", "john", "jonathan", "jordan", "joseph", "josh", "joshua",
                "jude", "kai", "kayden", "kian", "kieran", "kyle", "leo", "leon", "lewis", "liam", "logan", "louie", "louis", "luca",
                "lucas", "luke", "mason", "matthew", "max", "michael", "morgan", "nathan", "nicholas", "noah", "oliver", "ollie",
                "oscar", "owen", "patrick", "peter", "reece", "reuben", "rhys", "riley", "robert", "rory", "ryan", "sam", "samuel",
                "scott", "sean", "sebastian", "spencer", "stanley", "taylor", "theo", "thomas", "tiberius", "toby", "tom", "tommy", "tyler",
                "william", "zac", "zachary", "zak"
            ],
            "F": [
                "abbie", "abby", "abigail", "aimee", "alex", "alexandra", "alice", "alicia", "alisha", "amber", "amelia", "amelie",
                "amy", "anna", "ava", "bella", "bethany", "brooke", "caitlin", "cerys", "charlie", "charlotte", "chelsea", "chloe",
                "courtney", "daisy", "danielle", "demi", "eleanor", "eliza", "elizabeth", "ella", "ellie", "eloise", "elsie", "emilia",
                "emily", "emma", "erin", "esme", "eva", "eve", "evelyn", "evie", "faith", "freya", "georgia", "georgina", "grace",
                "gracie", "hannah", "harriet", "heidi", "hollie", "holly", "imogen", "isabel", "isabella", "isabelle", "isla",
                "isobel", "jade", "jasmine", "jennifer", "jessica", "jodie", "julia", "kate", "katherine", "katie", "kayla", "kayleigh",
                "keira", "lacey", "lara", "laura", "lauren", "layla", "leah", "lexi", "lexie", "libby", "lilly", "lily", "lola",
                "louise", "lucy", "lydia", "maddison", "madeleine", "madison", "maisie", "maisy", "maria", "martha", "matilda", "maya",
                "megan", "melissa", "mia", "millie", "mollie", "molly", "morgan", "mya", "naomi", "natasha", "niamh", "nicole",
                "olivia", "paige", "phoebe", "poppy", "rachel", "rebecca", "rose", "rosie", "ruby", "samantha", "sara", "sarah",
                "scarlett", "shannon", "sienna", "skye", "sofia", "sophia", "sophie", "summer", "tegan", "tia", "tilly", "victoria",
                "willow", "yasmin", "zara", "zoe"
            ]
        },
    },
    surnamePrefix: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "alpen", "amber", "ash", "autumn", "axe", "barley", "battle", "bear", "black", "blade", "blaze", "blood", "blue",
                "bone", "boulder", "bright", "bronze", "burning", "cask", "chest", "cinder", "clan", "claw", "clear", "cliff",
                "cloud", "cold", "common", "coven", "crag", "crest", "crow", "crystal", "dark", "dawn", "day", "dead", "death",
                "deep", "dew", "distant", "doom", "down", "dragon", "dream", "dusk", "dust", "eagle", "earth", "elf", "ember", "even",
                "fallen", "far", "farrow", "feather", "fern", "fire", "fist", "flame", "flat", "flint", "fog", "fore", "forest", "four",
                "free", "frost", "frozen", "full", "fuse", "gloom", "gold", "golden", "gore", "grand", "grass", "gray", "great",
                "green", "grizzly", "hallow", "hallowed", "hammer", "hard", "haven", "hawk", "haze", "heart", "heavy", "hell", "high",
                "hill", "holy", "honor", "horse", "humble", "hydra", "ice", "iron", "keen", "laughing", "leaf", "light", "lightning",
                "lion", "lone", "long", "low", "luna", "marble", "marsh", "master", "meadow", "mild", "mirth", "mist", "molten",
                "monster", "moon", "morning", "moss", "mountain", "mourn", "mourning", "nether", "nickle", "night", "noble", "oat",
                "ocean", "orb", "pale", "peace", "phoenix", "pine", "plain", "pride", "proud", "pyre", "rage", "rain", "rapid", "raven",
                "red", "regal", "rich", "river", "rock", "rose", "rough", "rune", "sacred", "sage", "saur", "sea", "serpent", "shade",
                "shadow", "sharp", "shield", "silent", "silver", "skull", "sky", "slate", "smart", "snake", "snow", "soft", "solid",
                "spider", "spirit", "spring", "stag", "star", "steel", "stern", "still", "stone", "storm", "stout", "strong", "summer",
                "sun", "swift", "tall", "tarren", "terra", "three", "thunder", "titan", "tree", "true", "truth", "tusk", "twilight",
                "two", "void", "war", "water", "wheat", "whisper", "whit", "white", "wild", "willow", "wind", "winter", "wise", "wolf",
                "wood", "wooden", "wyvern", "young"
            ]
        },
    },
    surnameSuffix: {
        markovOrder: 2,
        mode: "item",
        source: {
            "N": [
                "arm", "arrow", "ash", "axe", "bane", "bash", "basher", "beam", "beard", "bend", "bender", "binder", "blade", "blaze",
                "bleeder", "blight", "blood", "bloom", "blossom", "blower", "bluff", "bone", "bough", "bow", "brace", "braid", "branch",
                "brand", "breaker", "breath", "breeze", "brew", "bringer", "brook", "brooke", "brow", "caller", "chaser", "chewer",
                "claw", "cleaver", "cloud", "crag", "creek", "crest", "crusher", "cut", "cutter", "dancer", "dane", "dew", "doom",
                "down", "draft", "dream", "dreamer", "drifter", "dust", "eye", "eyes", "fall", "fallow", "fang", "feather", "feet",
                "fire", "fist", "flame", "flare", "flaw", "flayer", "flow", "flower", "follower", "foot", "force", "forest", "forge",
                "fury", "gaze", "gazer", "gem", "glade", "gleam", "glide", "gloom", "glory", "glow", "grain", "grip", "grove", "guard",
                "gust", "hair", "hall", "hammer", "hand", "heart", "hell", "helm", "hide", "horn", "hunter", "jumper", "keep", "keeper",
                "killer", "lance", "lash", "leaf", "less", "light", "mane", "mantle", "mark", "maul", "maw", "might", "moon", "more",
                "mourn", "oak", "orb", "ore", "peak", "pelt", "pike", "punch", "rage", "reaper", "reaver", "rider", "ridge", "ripper",
                "river", "roar", "rock", "root", "run", "runner", "scar", "scream", "scribe", "seeker", "shade", "shadow", "shaper",
                "shard", "shield", "shine", "shot", "shout", "singer", "sky", "slayer", "snarl", "snout", "snow", "soar", "song",
                "sorrow", "spark", "spear", "spell", "spire", "spirit", "splitter", "sprinter", "stalker", "star", "steam", "steel",
                "stone", "stream", "strength", "stride", "strider", "strike", "striker", "sun", "surge", "swallow", "swift", "sword",
                "sworn", "tail", "taker", "talon", "thorn", "thorne", "tide", "track", "trap", "trapper", "tree", "vale", "valor",
                "vigor", "walker", "ward", "watcher", "water", "weaver", "whirl", "whisk", "whisper", "willow", "wind", "winds", "wing",
                "wolf", "wood", "woods", "wound"
            ]
        },
    }
};
