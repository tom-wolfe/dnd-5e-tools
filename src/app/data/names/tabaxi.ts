import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Based on names from http://www.fantasynamegenerators.com/dnd-tabaxi-names.php */

export const Tabaxi: Names.NameDefinition = new Names.NameDefinition({
    name: "Tabaxi",
    formats: [
        { name: "Adjective Noun", formats: ["{forenameAdjective} {forenameNoun}"] },
        { name: "Root Name", formats: ["{forename}"] },
        { name: "Adjective Noun, Clan", formats: ["{forenameAdjective} {forenameNoun}, The {clanAdjective} {clanNoun} Clan"] },
        { name: "Root Name, Clan", formats: ["{forename}, The {clanAdjective} {clanNoun} Clan"] }
    ],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": ["afternoon nap (nap)", "animal in the woods (woods)", "answered riddle (riddle)", "art of shadows (art)",
                    "aura of passion (aura)", "aurora of winter (aurora)", "autumn harvest (autumn)", "beats of a heart (beats)",
                    "beauty of summer (summer)", "beauty's eye (beauty)", "belly of a beast (beast)", "berry bush (bush)",
                    "big heart (big)", "bird feather (bird)", "bite marks (bite)", "blank board (board)", "blank canvas (canvas)",
                    "blazing fire (blaze)", "blossoms in summer (blossom)", "branch of a river (river)", "breath of fresh air (breath)",
                    "broken chain (chain)", "bubble of a cauldron (bubble)", "burden of chains (chains)", "burning desire (desire)",
                    "burning fire (fire)", "bush in the forest (forest)", "bushy branch (branch)", "busy bee (bee)",
                    "cadence of water (cadence)", "cake of chocolate (cake)", "call of a bird (bird)", "call of the owl (owl)",
                    "call to action (action)", "candle in the dark (candle)", "cannon on deck (cannon)", "carriage on the road (road)",
                    "clanking bottle (clank)", "cloaking dagger (dagger)", "cloud in the sky (sky)", "coursing river (river)",
                    "cover of clouds (cover)", "crescent moon (moon)", "dangling button (button)", "dangling lace (lace)",
                    "daydream at night (dream)", "dew on the grass (dew)", "dream of days (dream)", "drifting cloud (cloud)",
                    "drifting snowflake (snowflake)", "drop in a pond (drop)", "dust of chalk (dust)", "dust on the road (dust)",
                    "eclipse of the moon (eclipse)", "edge of the world (edge)", "end of winter (winter)", "endless time (time)",
                    "fall of water (water)", "fallen twig (twig)", "fang of a snake (fang)", "feather in the wind (feather)",
                    "fire in the distance (fire)", "fish in the river (river)", "flame of passion (passion)", "flame of the spirit (flame)",
                    "flickering fire (fire)", "flickering flame (flame)", "flight of a robin (robin)", "flow of the river (flow)",
                    "flower in the field (flower)", "flower of ivory (ivory)", "forgotten link (link)", "four-leaf clover (clover)",
                    "fragrance of spring (spring)", "friend of foe (friend)", "gale of the storm (gale)", "game of chance (game)",
                    "garden of flowers (flower)", "gift of a guest (gift)", "glow of the sun (sun)", "grass of spring (grass)",
                    "guest at home (guest)", "guide of life (guide)", "hawk feather (hawk)", "hen of the flock (hen)",
                    "hidden depths (depth)", "hidden treasure (treasure)", "hide of the beast (hide)", "high noon (noon)",
                    "honey of bees (honey)", "hot flame (flame)", "hot as fire (fire)", "ice in summer (ice)", "ice on the lake (ice)",
                    "ink on skin (ink)", "jewel of the mountain (jewel)", "kite in the wind (kite)", "leaf on the water (leaf)",
                    "leaping frog (frog)", "light in the morning (light)", "lightning after thunder (lightning)", "little flower (little)",
                    "lock on an open door (lock)", "locket on a heart (locket)", "looping coil (coil)", "loose string (string)",
                    "luck of the draw (luck)", "marble in the sky (marble)", "mark of life (mark)", "melting of snow (snow)",
                    "mirror's reflection (mirror)", "mist in the morning (mist)", "mountain boulder (boulder)", "needle in hay (needle)",
                    "night of dreams (night)", "open gates (gate)", "owl in the morning (owl)", "page of a book (page)",
                    "paint on a canvas (paint)", "patch in the forest (patch)", "paw of a bear (paw)", "peak of mountains (peak)",
                    "piece of the puzzle (piece)", "plume in the wind (plume)", "plume of smoke (smoke)", "poem of summer (poem)",
                    "print of a boot (boot)", "print of an animal (animal)", "quill in the grass (quill)", "rain in summer (rain)",
                    "rain of fall (rain)", "rainbow after rain (rainbow)", "rays of the sun (ray)", "remnants of history (remnant)",
                    "rhythm of drums (rhythm)", "ringing of bells (bell)", "rinkling chains (chains)", "roar of a bear (roar)",
                    "rope in a knot (knot)", "rustling of a deer (deer)", "sailing ship (ship)", "sand of the beach (sand)",
                    "sands of time (sand)", "scarf in summer (scarf)", "scratch on wood (scratch)", "screech of bats (bat)",
                    "sea of opportunity (sea)", "second chance (chance)", "serpent scale (scale)", "shadow of a star (shadow)",
                    "shadows in the wind (shadow)", "sky full of starts (sky)", "sky of a sunset (sky)", "sleight hand (hand)",
                    "smooth as silk (silk)", "snapping branch (snap)", "snow of the mountain (snow)", "solstice of summer (solstice)",
                    "song of paradise (song)", "sound of the drum (drum)", "spark of life (spark)", "sparkle of light (sparkle)",
                    "spell of rain (spell)", "spots of a leopard (spot)", "spring blossom (spring)", "spring winds (spring)",
                    "star in the morning (star)", "steady rock (rock)", "stitch of fabric (stitch)", "stone in water (stone)",
                    "storm at sea (sea)", "storm on the horizon (storm)", "strength of love (love)", "stripes of a tiger (tiger)",
                    "stroke of a brush (brush)", "summer afternoon (summer)", "sunshine at night (sunshine)", "tale of wonder (tale)",
                    "taste of fruit (taste)", "three tree (three)", "thrill of life (thrill)", "thunder in the morning (thunder)",
                    "ticking clock (clock)", "tome of secrets (tome)", "top card (card)", "trail in the woods (trail)",
                    "tree blossom (blossom)", "tree in the woods (tree)", "tricking treat (trick)", "two river (river)",
                    "unpulled cart (cart)", "unread book (book)", "veil of shadows (veil)", "veil of a mask (veil)",
                    "wave on the shore (wave)", "windy shore (shore)", "wing of an angel (angel)", "winter breath (winter)",
                    "wish upon a star (wish)", "wonder of the world (wonder)"
                ]
            },
        },
        forenameAdjective: {
            markovOrder: 2,
            mode: "item",
            maxLength: 15,
            source: {
                "N": [
                    "active", "agile", "amused", "amusing", "ancient", "angelic", "arctic", "austere", "bizarre", "bold", "brash", "brave",
                    "bright", "bronze", "cheeky", "clever", "curious", "defiant", "dynamic", "eager", "elegant", "elite", "emerald",
                    "ethereal", "faint", "fine", "five", "flawless", "four", "fragile", "fragrant", "free", "fresh", "gentle", "gold",
                    "golden", "grand", "half", "happy", "hearty", "hidden", "humble", "hushed", "icy", "jade", "jolly", "kind", "lazy",
                    "left-handed", "light", "little", "lone", "lost", "lucky", "magic", "mellow", "merry", "misty", "mystery", "nimble",
                    "odd", "opal", "prime", "proud", "pure", "quick", "quiet", "quirky", "radiant", "rare", "ruby", "sapphire", "secret",
                    "serene", "seven", "shady", "silent", "single", "six", "smooth", "smoking", "stout", "subtle", "sweet", "swift",
                    "three", "tranquil", "true", "twin", "two", "velvet", "vibrant", "violet", "wild"
                ]
            }
        },
        forenameNoun: {
            markovOrder: 2,
            mode: "item",
            maxLength: 15,
            source: {
                "N": [
                    "animal", "aspect", "bat", "beach", "bear", "beast", "beauty", "beetle", "bell", "berry", "bird", "bit", "bite",
                    "block", "board", "boat", "book", "boot", "bottle", "brain", "branch", "breath", "brush", "bubble", "bush", "button",
                    "cable", "cake", "candle", "candy", "cannon", "canvas", "card", "carriage", "cart", "chain", "chains", "chalk",
                    "chance", "child", "clock", "cloud", "clover", "coil", "deer", "device", "dream", "drop", "dust", "edge", "fang",
                    "feather", "fire", "fish", "flame", "flower", "frog", "game", "garden", "gate", "gift", "glove", "grass", "guest",
                    "guide", "hen", "hide", "honey", "hummingbird", "ice", "ink", "jewel", "kite", "knot", "lace", "leaf", "light",
                    "lightning", "link", "lock", "locket", "love", "luck", "marble", "mark", "mask", "mirror", "needle", "night", "owl",
                    "page", "patch", "path", "peak", "piece", "plume", "poem", "quill", "quilt", "rain", "riddle", "river", "robin", "rock",
                    "scale", "scarf", "scratch", "sea", "shadow", "shoe", "shore", "silk", "smoke", "snow", "snowflake", "song", "spark",
                    "sparkle", "spell", "star", "stitch", "stone", "storm", "straw", "stream", "string", "stripe", "tale", "thing",
                    "thrill", "thunder", "thundercloud", "timber", "time", "tome", "trail", "tree", "trick", "veil", "wave", "wind", "wing",
                    "wish", "wonder"
                ]
            }
        },
        clanAdjective: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "abandoned", "adamant", "anchored", "ancient", "angelic", "animated", "arctic", "ascending", "awakening", "awoken",
                    "barren", "basking", "bellowing", "binding", "blank", "bleak", "blossoming", "boundless", "bright", "brisk", "broken",
                    "bustling", "changing", "cherished", "chilly", "cleansing", "clear", "colorful", "covering", "crawling", "dancing",
                    "dark", "darkening", "desired", "distant", "dreaming", "dreary", "dry", "dual", "echoing", "elder", "enchanted",
                    "enchanting", "entangling", "ethereal", "evading", "everlasting", "exotic", "expanding", "fading", "far", "faraway",
                    "fertile", "flawless", "flickering", "fragile", "fragrant", "free", "gathering", "gentle", "gleaming", "glistening",
                    "graceful", "grand", "great", "grieving", "growing", "healing", "heavenly", "hidden", "high", "humble", "hushed",
                    "infinite", "lasting", "light", "little", "living", "lone", "longing", "loving", "lurking", "lush", "magical", "meager",
                    "mellow", "merging", "mild", "misty", "mountain", "mumbling", "murky", "murmuring", "musing", "noiseless", "passing",
                    "pleasing", "precious", "protecting", "prowling", "pure", "quiet", "radiant", "reflected", "reflecting", "reigning",
                    "rising", "roaming", "roaring", "rumbling", "scented", "serene", "shimmering", "silent", "sleepy", "snoozing",
                    "snoring", "soothing", "stormy", "surging", "thundering", "tired", "trailing", "tranquil", "tumbling", "twinkling",
                    "twirling", "twisting", "unraveling", "velvet", "vibrant", "wailing", "wandering", "watching", "weeping", "whispering",
                    "whistling", "wild"
                ]
            },
        },
        clanNoun: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "barrens", "bayou", "bluff", "bluffs", "bog", "bogs", "bush", "cave", "cavern", "caverns", "caves", "cliff", "cliffs",
                    "coast", "coasts", "copse", "crag", "crags", "creek", "creeks", "deluge", "den", "desert", "deserts", "dune", "dunes",
                    "estuary", "field", "fields", "fjord", "fjords", "forest", "forests", "glade", "glades", "grotto", "hail", "island",
                    "islands", "isle", "isles", "jungle", "jungles", "lagoon", "lagoons", "lake", "lakes", "marsh", "mesa", "mist", "mists",
                    "monsoon", "morass", "mountain", "mountains", "oasis", "peak", "peaks", "rain", "rainforest", "reservoir", "ridge",
                    "river", "rivers", "shore", "shores", "shower", "sierra", "slopes", "storm", "swamp", "swamps", "thicket", "torrent",
                    "tree", "wild", "wilderness", "wilds", "woodland", "woodlands", "woods"
                ]
            },
        }
    }
});

NameList.push(Tabaxi);
