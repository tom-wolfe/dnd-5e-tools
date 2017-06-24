import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Based on names from http://en.uesp.net/wiki/Lore:Argonian_Names */

export const Lizardfolk: Names.NameDefinition = {
    name: "Lizardfolk",
    formats: [
        "{forename}",
        "{forenamePrefix}-{forenameSuffix}",
        "{commonTongueName}"
    ],
    parts: {
        forenamePrefix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": [
                    "abijoo", "ah", "ah", "ahaht", "ajum", "alan", "am", "an", "an", "anooz", "aojee", "aomee", "atl", "az", "azeex",
                    "azjai", "baar", "bar", "batar", "beek", "beem", "bimee", "brand", "bun", "bur", "chee", "cheedal", "dakee", "dal",
                    "dan", "dar", "deed", "deet", "deetum", "depasa", "deroh", "dreet", "effe", "ei", "eleedal", "er", "ereel", "gah",
                    "gajul", "gam", "geeh", "geel", "geem", "gin", "gjomee", "gom", "gulum", "haj", "hal", "han", "heek", "heem", "heir",
                    "heir", "hixeeh", "ilas", "im", "ja", "jaree", "jee", "jeeba", "jeelus", "jeen", "jeer", "jeetum", "jin", "junal",
                    "kamax", "keema", "keema", "keerasa", "kud", "lara", "loh", "luh", "mahei", "marz", "meema", "meer", "miun", "miun",
                    "mush", "muz", "nam", "neeti", "nema", "noyei", "nulaz", "odeel", "okan", "okaw", "oleed", "oleen", "olik", "olink",
                    "onurai", "otumi", "owai", "pad", "pekai", "pimaxi", "ram", "ree", "reeh", "reezal", "sar", "shanil", "silm", "tah",
                    "taleel", "talen", "talen", "tan", "tee", "teeba", "tim", "topeeth", "topith", "tsatva", "tumma", "tun", "tunbam",
                    "ukka", "uta", "uxith", "vara", "vistha", "vuh", "wanam", "wanan", "wanum", "weebam", "weedum", "wideem", "wih", "wud",
                    "wuja", "wuleen", "xal", "xil", "yinz"
                ],
                "F": [
                    "adzi", "ah", "ahaht", "ajim", "ajul", "am", "an", "anozz", "az", "azbai", "azeez", "bar", "beek", "beem", "ber",
                    "bijum", "bur", "bura", "chana", "chanil", "chee", "cheesh", "chukka", "dakee", "dan", "dar", "dee", "deechee", "deem",
                    "deesh", "deet", "desh", "detu", "dosu", "dreet", "duk", "el", "ereel", "fal", "gah", "geeh", "geel", "gih", "gin",
                    "haj", "hal", "han", "hara", "heed", "heek", "heem", "heita", "hiis", "hul", "io", "itan", "ix", "jazeez", "jee",
                    "jeeba", "jeed", "jeeda", "jeelus", "jotep", "junal", "kal", "kani", "keel", "kizta", "kud", "lara", "leel", "lorpat",
                    "mach", "mahei", "marz", "meeh", "meema", "meen", "meenai", "meer", "mewah", "mim", "mujee", "murak", "muz", "na",
                    "nam", "neeja", "neeta", "nesh", "nolu", "nomu", "nuleem", "odeel", "olank", "oleed", "on", "onai", "onurai", "otumi",
                    "owai", "pad", "pash", "peek", "pekai", "rabeen", "ree", "reeh", "sali", "seed", "seen", "shanil", "shazara", "sheer",
                    "shei", "silm", "supo", "talen", "tana", "tar", "teeba", "tim", "tsona", "tumma", "tunbam", "ukka", "ula", "uta", "uta",
                    "uwa", "veek", "veest", "veth", "vuh", "wanam", "weedum", "wih", "wuja", "wuleen", "xijai", "xil", "zasha"
                ]
            }
        },
        forenameSuffix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": [
                    "anoo", "beekus", "betu", "bex", "bex", "chath", "chuna", "da", "dar", "dimik", "dum", "eekwa", "ei", "eidu", "eius",
                    "eiuus", "eix", "eix", "etaku", "gah", "geh", "gei", "gih", "goh", "heem", "hei", "izt", "ja", "jah", "jasaiin",
                    "jaseen", "jat", "jee", "jeen", "jei", "jei", "jul", "julan", "jush", "kahz", "kai", "kajin", "kas", "keer", "kia",
                    "kilaya", "kiurz", "kur", "kuz", "la", "lah", "lai", "lan", "lar", "lar", "leem", "lei", "loh", "lurash", "lurz",
                    "maht", "malz", "marza", "maxath", "meej", "mema", "mere", "mesei", "metaku", "mota", "muz", "muz", "na", "naat",
                    "neeus", "nei", "nur", "pachat", "ra", "raj", "reet", "ru", "sakka", "seek", "sei", "shah", "shehs", "shei", "skee",
                    "ta", "taeed", "tah", "tan", "tee", "teemeeta", "teeus", "tehat", "tei", "tul", "tulm", "vilax", "voh", "waska", "wulm",
                    "xulith", "zaw", "ze", "zeen", "zeeus", "zish"
                ],
                "F": [
                    "azza", "beekus", "betu", "chuna", "crath", "dar", "deeka", "deesei", "dooka", "dum", "eepa", "ei", "eix", "enoo",
                    "gai", "geel", "gith", "goh", "halu", "io", "ja", "jaa", "jah", "jas", "jasaiin", "jaseen", "jasuda", "jat", "jee",
                    "jeen", "jekka", "ju", "jush", "jusha", "kahz", "kajul", "kasi", "kesh", "kia", "kilaya", "kiurz", "la", "lee", "lei",
                    "li", "liurz", "liurz", "loh", "lurash", "lurasha", "ma", "maht", "majin", "makka", "malem", "malz", "marza", "maxath",
                    "medul", "meedish", "meema", "meen", "meena", "meenus", "meesei", "meeus", "mei", "mota", "mudeska", "muz", "na",
                    "naat", "nakal", "nassa", "natoo", "naza", "neeus", "nei", "noo", "nur", "osheeja", "osheeka", "ra", "raj", "raniur",
                    "reen", "rei", "riha", "ru", "ruul", "sa", "saak", "sakka", "seeba", "shah", "shehs", "ta", "tan", "teel", "teeus",
                    "tei", "tul", "tulm", "utha", "vata", "veidal", "vilax", "wan", "waska", "wazei", "weska", "wulm", "xeed", "xoc", "ze",
                    "zish"
                ]
            },
        },
        forename: {
            markovOrder: 2,
            mode: "markovOrItem",
            source: {
                "M": [
                    "amusei", "aseepa", "asheeus", "ashgar", "asum", "azeenus", "azinar", "bahrei", "banka", "barnaxi", "batuus",
                    "beeheisei", "beenalz", "benas", "beshnus", "bewlus", "bezeer", "bijot", "bosekus", "bunish", "busheeus", "buujhan",
                    "chakuk", "chalish", "chalureel", "chanka", "chilwir", "chitakus", "chiwish", "chulz", "chuna", "claurth", "daneem",
                    "darasken", "dazash", "debameel", "deeh", "deejeeta", "deekonus", "deekum", "deekus", "deerlus", "demeepa",
                    "derkeethus", "dezanu", "dowoseez", "dreevureesh", "drumarz", "dunaxith", "eoki", "esqoo", "geel", "ghelos",
                    "gilustulm", "haran", "hareeya", "hathei", "heedul", "hikathus", "hjorn", "huleeya", "huzei", "iggistill", "ilus",
                    "inee", "itan", "jaraleet", "jeela", "jeelius", "jeelus", "jilux", "kamatpa", "kankeeus", "keesekeeth", "kepanuu",
                    "kiameed", "klankaatu", "kluleesh", "kudleez", "lohupeel", "lotash", "luteema", "maahi", "madesi", "maheelius", "mahei",
                    "maneeshik", "mathei", "meejapa", "meenjee", "meenosh", "meensuda", "meer", "miharil", "mikeesh", "milos", "mobareed",
                    "mohimeem", "mopakuz", "motuu", "mujeen", "muranatepa", "napetui", "nazuux", "nebutil", "neeluka", "neetinei",
                    "neetrenaza", "neetzara", "neposh", "netapatuu", "nexith", "nodeeus", "nosaleeth", "nowajeem", "nuduxith", "nuleez",
                    "obaxith", "okalg", "okaw", "okeeh", "onuja", "oosh", "opatieel", "otumeel", "pacheeva", "pacheevutar", "paduxi",
                    "pajeen", "parash", "peeradeeh", "pejureel", "petaxai", "pideelus", "pimsy", "pojeel", "powaj", "radeelan", "radithax",
                    "rareel", "rarez", "rasha", "redieeus", "reekisk", "reemukeeus", "reenum", "reesa", "resari", "rezei", "rultkath",
                    "rupah", "rushmeek", "sakeepa", "sakeeus", "saliith", "seemarz", "seewul", "sejaijilax", "shadutsei", "shakiis",
                    "skalasha", "skeehei", "skeetul", "sureeus", "tanaka", "tanan", "teegla", "teeka", "teekeeus", "teelawei", "teinaava",
                    "teineeja", "terezeeus", "tikaasi", "tikkus", "tlixilja", "tlosee", "tsatheitepa", "tsoglaez", "tul", "tulalurash",
                    "ukatsei", "ukawei", "ula", "ulawa", "uralgnaza", "usha", "usheeja", "ushmeek", "utadeek", "utadeek", "utamukeeus",
                    "utatul", "veekas", "veelisheeh", "veenaza", "veezara", "visskar", "voneesh", "vudeelal", "vushtulm", "vuskayeeth",
                    "wayiteh", "weeltul", "weer", "wumeek", "wunalz", "xozuka", "yelus", "yinz'r"
                ],
                "F": [
                    "ahaht", "akeenus", "akish", "akishan", "aleeta", "aleeto", "amatkeeus", "amussa", "aseis", "asheemar", "asska",
                    "awas", "azum", "bahrez", "banalz", "baseekus", "baseenar", "beekatan", "beekaw", "beela", "beelei", "beewos",
                    "beexutl", "bejeen", "betzi", "bezarbeeh", "bishalus", "bixitleesh", "bokeeus", "buki", "chalaree", "chanaius",
                    "chaneej", "chimatei", "chirurgeon", "cholasistu", "chosumeel", "churasu", "dafeeso", "dajaheel", "dakee", "daleez",
                    "damatez", "damee", "damonalus", "dasha", "deegeeta", "deeja", "deel", "deetsan", "deetul", "deetwos", "dergla",
                    "deyapa", "dosa", "druja", "drujal", "druxolneeus", "easeeto", "eatzapa", "eukkaneeus", "eutei", "ezei", "geeh",
                    "ghekuknaza", "gideelar", "gilm", "gish", "hikinu", "hixultvutar", "hul", "ianix", "imhey", "inue", "jeetum", "jukka",
                    "juutenma", "kaloo", "kasa", "keerasa", "keerava", "kiurz", "kizta", "klumuk", "kudda", "kulusi", "kunasheeth", "leetu",
                    "lineem", "lohulurash", "loseitsei", "lunsu", "luraxith", "luxultava", "markka", "martul", "marz", "meenai", "meerana",
                    "mereel", "milah", "milaw", "misei", "miuni", "najeepa", "nakuma", "nameel", "natalgreesh", "nathrasa", "nebaxireet",
                    "neeka", "neer", "neesha", "neetizei", "neetra", "niima", "nijuna", "nijuneel", "nojaxia", "nokama", "nowa", "nubaree",
                    "nukorash", "numeen", "nuralg", "nush", "nutum", "nuwisha", "ocheeva", "okur", "omeeta", "onasha", "osheeja",
                    "padeehei", "padeel", "pakee", "pameel", "pasha", "peekeus", "peelgah", "pegareem", "pinooh", "porath", "pujeerish",
                    "pulaya", "puweel", "puyatha", "raleetal", "rana", "reekatul", "reekaturl", "reekeepa", "reesa", "ruko", "rupaheel",
                    "rutabeeh", "ruxultav", "saxolt", "shahvee", "shaleez", "sharava", "shatalg", "shatasha", "shatuna", "shuliish",
                    "shumeesh", "simeesh", "sisar", "skaleel", "skeetees", "sumanirr", "supowateer", "tasha", "teegya", "telixith",
                    "terameen", "tlixult", "tlonkaan", "tludul", "tulut", "tumaka", "uazee", "ukasha", "veemarz", "veezil", "villa", "vorh",
                    "wahirat", "wareem", "weewish", "wemeerit", "wenaxi", "witseidutsei", "wujeeta", "wusha", "xixuai", "xohaneel", "xula",
                    "zatzu"
                ]
            }
        },
        commonTongueName: {
            markovOrder: 2,
            mode: "markovOrItem",
            markovSplitChar: "-",
            markovJoinChar: "-",
            maxLength: 25,
            source: {
                "M": [
                    "also-he-washes", "appraising-spine", "back-wash", "basks-in-darkness", "basks-in-the-sun", "bathes-in-blood",
                    "big-head", "big-head", "black-scale", "cat-face", "catches-no-fish", "chow-chow", "claws-in-gloves",
                    "conjures-with-toes", "counts-the-clouds", "cuts-with-the-grain", "cuts-with-words", "dazzling-tail", "deep-in-cups",
                    "deep-in-his-cups", "deep-thoughts", "deepswimmer", "doubts-the-moon", "dreaded-water", "dreams-of-sleep",
                    "dreams-simply", "drifts-on-wind", "drinks-on-sails", "drinks-with-crabs", "drinks-with-toes", "drops-no-glass",
                    "dull-scales", "dust-foe", "dusty-claws", "eager-to-leave", "eats-aged-meat", "eats-loves-kills", "eats-many-hearts",
                    "eats-more-gold", "eleven-skips", "eyes-in-shadow", "eyes-like-water", "eyes-the-path", "fangs-like-ice", "fast-finder",
                    "fetches-glitter", "fills-up-on-fish", "fine-mouth", "fire-under-his-tongue", "fish-fingers", "fish-whispers",
                    "five-coins", "flat-head", "flicks-his-tongue", "forest-child", "friends-with-moon", "frog-swallows-frog",
                    "frozen-foot", "gray-skies", "green-venom-tongue", "grey-throat", "grey-throat", "grinds-nails", "has-no-regrets",
                    "has-sugar-in-him", "hauls-ropes-faster", "he-cuts-the-flesh", "hears-voices-in-the-air", "hidden-hands",
                    "hides-his-eyes", "hides-his-foot", "hides-his-heart", "hides-in-mud", "high-heart", "honest-feet", "hooks-fish",
                    "hops-over-fires", "hops-over-roots", "hunting-tail", "hunts-in-shadow", "hunts-in-water", "hunts-with-daggers",
                    "iron-claws", "iron-heel", "iron-in-blood", "last-to-water", "laughs-at-all", "laughs-at-danger", "laughs-at-turtles",
                    "leaks-when-struck", "learns-through-pain", "leaves-no-tracks", "licks-his-claws", "listens-to-water",
                    "looks-under-rocks", "low-neck", "lusts-for-peace", "makes-no-soup", "marches-proud", "marsh-wader", "mirrored-skin",
                    "morning-star-steals-away-clouds", "moves-many-rocks", "moves-unseen", "mud-suits-him", "mud-toes",
                    "murmurs-to-trees", "narrows-his-eyes", "nelix-fly-breath", "never-cold", "nimble-hands", "nine-toes", "no-fingers",
                    "not-so-quick", "oaken-heart-and-head", "only-he-stands-there", "pain-giver", "paints-with-dreams", "pale-eyes",
                    "picks-many-fights", "plants-dreams", "proud-scale", "prowls-in-stealth", "pulls-with-might", "raven-biter",
                    "restless-tail", "rides-the-river", "right-wind", "runs-across-water", "runs-in-wild", "runs-with-quickness",
                    "scar-tail", "scattered-leaves", "scent-of-graves", "scouts-many-marshes", "seeks-the-night", "seeks-the-sun",
                    "sees-many-fish", "seven-bellies", "shade-runner", "shady-scales", "shakes-at-thunder", "shield-scale",
                    "shimmer-scales", "shines-in-moonlight", "short-scales", "silent-moss", "silver-gills", "sings-in-shadows",
                    "sings-like-thunder", "sings-to-crystal", "sings-with-drink", "six-coins", "skink-in-tree's-shade", "skips-the-pebble",
                    "slays-by-moon", "sleeps-beneath-filth", "sleeps-beneath-himself", "sleeps-on-shield", "slides-down-hills", "slow-tail",
                    "smart-snake", "smells-like-guar", "smokeskin-killer", "smooth-as-wind", "soft-scale", "sometimes-eats-fire",
                    "speaks-spells-gently", "stabs-through-hearts", "stands-in-shallows", "stands-in-still-water", "stands-in-thought",
                    "steady-hand", "steps-in-alleys", "stormy-eyes", "stream-murk", "strikes-from-shadows", "studies-many-things",
                    "summons-eyes", "sun-belly", "swift-catch", "swift-light", "swift-prestidigitator", "swift-tail", "swims-in-spells",
                    "swims-in-swells", "ten-tongues-weerhat", "thick-spine", "thinks-too-much", "thinks-with-belly", "three-toes",
                    "tips-the-scales", "tongue-toad", "tooth-in-the-sea", "touches-keels", "trades-for-gold", "trades-with-vigor",
                    "trills-so-sweet", "trouble-finder", "twice-bitten", "two-blades", "two-scales", "under-clouds-darkened",
                    "walks-by-starlight", "walks-softly", "walks-through-fog", "walks-with-mudcrabs", "walks-with-pride",
                    "walks-with-purpose", "walks-with-rushes", "walks-with-spirits", "wanders-in-tatters", "watcher-from-afar",
                    "watches-the-roots", "watches-water", "water-chaser", "weaves-nets", "weaves-one-basket", "wind-in-his-hair",
                    "wind-in-sails"
                ],
                "F": [
                    "amber-eyes", "argues-with-frogs", "axe-fist", "barters-with-wit", "bathed-in-steel", "bitten-once-shy",
                    "black-silk-earth", "blazing-glory", "blue-bird", "blue-eyes", "blue-scale", "born-under-stars", "borrows-trouble",
                    "branded-heart", "brands-the-guar", "breech-star", "breezes-whisper", "brown-tooth", "calls-to-nature", "calm-water",
                    "changer-of-minds", "chews-on-moss", "chews-the-marrow", "city-swimmer", "coin-hoarder", "cooks-the-meat",
                    "dances-with-kwama", "dawn-scale", "delves-deeply", "dreams-of-honey-and-gold", "dusk-scale", "eats-to-learn",
                    "eight-feather-tail", "eyes-like-night", "eyes-of-steel", "far-from-water", "far-walker", "fearless-breath",
                    "fights-with-tail", "finds-plants", "flies-in-wind", "follows-the-sun", "gathers-dead-things", "gentle-waters",
                    "gnarled-root", "gold-tail", "golden-heart", "good-with-numbers", "green-eyes-wander", "grins-at-cats", "hard-scales",
                    "has-no-loom", "head-in-clouds", "hears-the-stone", "heat-on-scales", "hides-aplenty", "hides-her-heart",
                    "hides-the-ashes", "honey-nose", "in-no-hurry", "juggles-scorpions", "keen-eyes", "knuckle-bones",
                    "leaps-before-looking", "licks-longfins", "licks-the-sand", "lights-sparks", "listens-to-sea", "lizard-eater",
                    "long-cast", "long-claw", "looks-forward", "looks-too-long", "loves-the-water", "makes-many-soups", "makes-no-ripples",
                    "makes-one-soup", "many-eyes", "many-eyes-watching", "mind-of-ice", "moves-like-water", "murk-watcher",
                    "mysteries-of-trees", "nimble-fingers", "nimble-knuckles", "on-staya-sundew", "one-eye", "open-hands", "paints-the-sky",
                    "pale-heart", "peers-through-glass", "plays-in-puddles", "poor-scales", "purple-plumes", "quill-weave",
                    "relieves-burdens", "remains-silent", "rising-in-still-waters", "river-swimmer", "root-mason", "rope-gill",
                    "runs-in-circles", "runs-with-questions", "scale-mender", "scales-like-silver", "scales-like-steel", "scared-of-snow",
                    "seeks-better-deals", "seeks-her-glory", "seeks-old-words", "seeks-white-bird", "sees-all-colors",
                    "sees-many-paths", "shares-with-many", "sharp-edge", "sharp-eye", "she-who-gleams", "sheathed-in-silk",
                    "shimmerscale", "shiny-trades", "short-tail", "silver-scales", "silver-throat", "sings-at-dawn", "sings-to-stumps",
                    "sings-with-frogs", "sings-with-joy", "sings-with-reed", "sister-of-wind", "sky-seer", "slays-no-dragons",
                    "sleeps-with-open-eyes", "slips-through-fingers", "slow-at-words", "smiles-with-knife", "snail-tail", "snub-tail",
                    "soars-in-sadness", "soft-wind", "sour-tooth", "spark-scale", "speaks-in-tongues", "speaks-to-clouds",
                    "speaks-with-hammer", "speaks-with-leaves", "speaks-with-lights", "spills-no-drinks", "stares-at-stars",
                    "steps-lightly", "stokes-the-flame", "stones-over-water", "strong-voice", "strong-with-tail", "sun-in-shadow",
                    "sun-on-scales", "swift-needle", "swims-in-silence", "swims-the-seas", "swims-to-sea", "tale-spinner",
                    "tall-trees-falling", "tastes-the-breeze", "teeth-like-stars", "tends-all-things", "tern-feather", "thinks-in-gears",
                    "thorned-blossom", "through-gilded-eyes", "travelling-new-woman", "trips-over-dirt", "two-tail", "under-root",
                    "values-many-things", "wakes-from-hope", "walks-in-ash", "walks-in-dry-places", "walks-in-leaves", "walks-lonely-steps",
                    "walks-many-leagues", "walks-with-bargains", "wallows-in-sand", "warm-river", "waters-the-grass", "way-with-words",
                    "wide-eye", "wine-for-all", "wonders-at-stars"
                ]
            }
        }
    }
};

NameList[Lizardfolk.name] = Lizardfolk;
