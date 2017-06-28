import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-goliath-names.php */

export const Goliath: Names.NameDefinition = new Names.NameDefinition()
Object.assign(Goliath, {
    name: "Goliath",
    formats: [
        { name: "Forename 'Nickname' Surname", formats: ["{forenamePrefix}{forenameSuffix} '{nicknameAdjective}{nicknameNoun}' {surname}"]},
    ],
    parts: {
        forenamePrefix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": [
                    "ag", "apa", "au", "aug", "eg", "gau", "gea", "gha", "ili", "kana", "kava", "keo", "khu", "la", "ma", "mau", "mea",
                    "mo", "na", "neo", "pa", "pu", "tha", "thava", "tho", "va", "vau", "vega", "vi", "vo"
                ],
                "F": [
                    "age", "ane", "gau", "ge", "ina", "kau", "ke", "ki", "kuo", "la", "le", "maa", "man", "mau", "me", "na", "nal", "ni",
                    "one", "ori", "paa", "pau", "pe", "tha", "the", "thu", "vaa", "vau", "ve", "vu"
                ]
            },
        },
        forenameSuffix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": [
                    "gak", "gal", "gan", "gath", "ghan", "gith", "glath", "gun", "kan", "kein", "khal", "kin", "kon", "lath", "lig", "lok",
                    "mahg", "mahk", "mahl", "mak", "man", "mith", "mul", "nak", "nath", "nihl", "noth", "path", "phak", "thag", "thak",
                    "tham", "thi", "thok", "veith", "vek", "vhal", "vhik", "vith", "voi"
                ],
                "F": [
                    "gea", "geo", "gia", "gu", "kea", "keo", "ki", "kia", "kio", "la", "lai", "lane", "lea", "leo", "lo", "lu", "meo", "mi",
                    "mia", "ne", "nea", "neo", "ni", "nia", "nu", "peo", "peu", "pu", "rea", "ri", "ria", "the", "thea", "thia", "thio",
                    "thu", "vea", "vi", "via", "vu"
                ]
            },
        },

        nicknameAdjective: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "adept", "bear", "brave", "bright", "dawn", "day", "deer", "dream", "flint", "fearless", "flower", "food", "fright",
                    "goat", "hard", "hide", "high", "honest", "horn", "keen", "lone", "long", "low", "lumber", "master", "mind", "mountain",
                    "night", "rain", "river", "rock", "root", "silent", "sky", "sly", "smart", "steady", "stone", "storm", "strong",
                    "swift", "thread", "thunder", "tree", "tribe", "true", "truth", "wander", "wild", "wise", "wound"
                ]
            },
        },
        nicknameNoun: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "aid", "bearer", "breaker", "caller", "carver", "chaser", "climber", "cook", "dream", "drifter", "eye", "finder",
                    "fist", "friend", "frightener", "guard", "hand", "hauler", "heart", "herder", "hunter", "jumper", "killer", "lander",
                    "leader", "leaper", "logger", "maker", "mender", "picker", "runner", "shot", "smasher", "speaker", "stalker", "striker",
                    "tanner", "twister", "vigor", "walker", "wanderer", "warrior", "watcher", "weaver", "worker"
                ]
            },
        },
        surname: {
            markovOrder: 3,
            mode: "markovOrItem",
            source: {
                "N": [
                    "achebe", "ademola", "adeoye", "adesida", "adesina", "adeyemi", "aguda", "akenzua", "akerele", "akiloye", "akinjide",
                    "akintola", "akinyemi", "akpabio", "akunyili", "alakija", "alamieyeseigha", "amaechi", "anenih", "anikulapo-kuti",
                    "asari- dokubo", "attah", "awolowo", "ayim", "azikiwe", "babangida", "balewa", "balogun", "bamgboshe", "bankole",
                    "bello", "biobaku", "boro", "buhari", "chukwumereije", "danjuma", "dimka", "diya", "effiong", "egwu", "ekwensi", "eze",
                    "ezekwesili", "fagbure", "falana", "gbadamosi", "gowon", "ibori", "igbinedion", "igwe", "ironsi", "iweala", "iwu",
                    "jaja", "jakande", "jang", "jomo-gbomo", "kalejaiye", "kalu", "madaki", "magoro", "mbadinuju", "mbanefo", "ngige",
                    "nnamani", "nzeogwu", "obasanjo", "obi", "odili", "ohakim", "ojukwu", "okadigbo", "okafor", "okar", "okeke", "okereke",
                    "okilo", "okiro", "okonjo", "okonkwo", "okorie", "okotie-eboh", "okoye", "okpara", "olanrewaju", "omehia", "onobanjo",
                    "onwuatuegwu", "onwudiwe", "onyejekwe", "orji", "oyenusi", "oyinlola", "saro-wiwa", "sekibo", "solarin", "soyinka",
                    "tinibu", "uba", "yar’adua"
                ]
            },
        },
    }
});

NameList.push(Goliath);
