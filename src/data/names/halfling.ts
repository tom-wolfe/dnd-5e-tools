import * as Races from "../../models/races";
import { HumanNames } from "./common/human-names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from https://thecollaborativegamer.wordpress.com/people/tables-for-creating-fantasy-names/names-halflings/ */

export const Halfling: Races.NameDefinition = {
    name: "Halfling",
    formats: [
        "{forename} {surnamePrefix}{surnameSuffix}",
    ],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "markovOrItem",
            source: {
                "M": [
                    "adelard", "adelbert", "adelgrim", "alaric", "alberic", "andwise", "ansegar", "arnor", "athanaric", "balbo",
                    "bandobras", "basso", "berilac", "bilba", "bilbo", "bildad", "bingo", "bladud", "blanco", "bob", "bodo", "bosco",
                    "bowman", "briffo", "bruno", "brutus", "bucca", "bungo", "caradas", "caradoc", "carambo", "carl", "cedivar", "celedor",
                    "cerdic", "ceredic", "conrad", "cosimo", "cotman", "cottar", "déagol", "dinodas", "doderic", "dodinas", "drogo", "dudo",
                    "elfstan", "erling", "everard", "falco", "faramir", "faramond", "fastolph", "fastred", "ferdinand", "ferumbras",
                    "filibert", "flambard", "folcard", "folco", "fortinbras", "fosco", "fredegar", "frodo", "fulvus", "gerontius",
                    "goodwill", "gorbadoc", "gorbulas", "gorhendad", "gormadoc", "griffo", "gringamor", "grossman", "gruffo", "guido",
                    "gundabald", "gundahar", "gundobad", "gundolpho", "habaccuc", "haiduc", "hal", "halfred", "hamfast", "hamilcar",
                    "harding", "hending", "heribald", "herugar", "hildibrand", "hildifons", "hildigard", "hildigrim", "hob", "hobson",
                    "holfast", "holman", "hugo", "iago", "ilberic", "inigo", "iolo", "isembard", "isembold", "isengar", "isengrim",
                    "isengrin", "isumbras", "jago", "jo", "jolly", "largo", "longo", "lotho", "magnus", "marcho", "marco", "marmadoc",
                    "marroc", "meneaduc", "meriadoc", "merimac", "merimas", "merry", "milo", "minto", "moro", "mosco", "mungo", "nibs",
                    "nick", "nicol", "nob", "obo", "odo", "odovacar", "olo", "orgulas", "orlando", "otho", "paladin", "peregrin", "pippin",
                    "polo", "ponto", "porro", "posco", "reginard", "robin", "robur", "roderic", "rollo", "rorimac", "rudibert", "rudigar",
                    "rudolph", "rufus", "sadoc", "sago", "samlad", "samwise", "sancho", "saradas", "saradoc", "scudamor", "seredic",
                    "sigismond", "sméagol", "tango", "ted", "theobald", "theodoric", "tóbias", "tobold", "togo", "tolman", "tomacca",
                    "tomburän,", "uffo", "valdemar", "vigo", "wilcome", "wilibald", "wilimar", "will", "wiseman"
                ],
                "F": [
                    "adaldrida", "alfrida", "amalda", "amaranth", "amethyst", "angelica", "arabella", "asphodel", "belba", "belinda",
                    "bell", "belladonna", "bellisima", "bertha", "berylla", "camelia", "cara", "caramella", "celendine", "chica", "cora",
                    "cornelia", "daisy", "diamanda", "diamond", "dina", "donnamira", "dora", "duenna", "eglantine", "elanor", "esmeralda",
                    "estella", "fatima", "gerda", "gilly", "gloriana", "goldilocks", "grimalda", "hilda", "jasmine", "jemima", "jessamine",
                    "lalia", "laura", "lavinia", "lily", "linda", "lobelia", "malva", "mantissa", "marigold", "matilda", "maxima", "may",
                    "melba", "melilot", "melissa", "menegilda", "mentha", "mimosa", "mirabella", "miranda", "myrtle", "nina", "nora",
                    "pamphila", "pandora", "pansy", "pearl", "peony", "pervinca", "pimpernel", "poppy", "prima", "primrose", "primula",
                    "prisca", "regina", "rhoda", "robinia", "rosa", "rosamunda", "rose", "rowan", "ruby", "salvia", "savanna", "selina",
                    "semolina", "tanta", "yolanda"
                ]
            }
        },
        surnamePrefix: {
            mode: "item",
            markovOrder: 2,
            source: {
                "N": [
                    "bag", "bank", "boff", "bulge", "bolge", "brace", "brandy", "brock", "bunce", "burrow", "button", "bean", "bann",
                    "chubb", "chet", "clay", "clod", "clip", "dig", "diggle", "digger", "dug", "dugs", "fair", "fare", "far", "gam",
                    "gard", "gauk", "gold", "good", "goold", "green", "grubb", "hay", "head", "hog", "horn", "heap", "light", "long",
                    "loam", "lee", "mag", "mug", "math", "mathom", "noak", "noakes", "new", "old", "oak", "over", "proud", "puddi",
                    "pod", "pipe", "roper", "rum", "rumble", "root", "sack", "sand", "smoke", "small", "smial", "took", "tunnelly",
                    "two", "tea", "under", "whit", "whim", "weed"
                ]
            }
        },
        surnameSuffix: {
            mode: "item",
            markovOrder: 2,
            source: {
                "N": [
                    "bairn", "blower", "body", "brace", "brook", "buck", "burrow", "button", "dale", "es", "field", "fin", "foot", "foot",
                    "foot", "furrow", "garden", "gee", "ger", "gin", "gins", "girdle", "got", "hair", "hand", "head", "heaver", "hedge",
                    "hill", "hole", "home", "house", "iffer", "ins", "kin", "lock", "man", "mathom", "mouth", "ner", "nose", "pen", "pipe",
                    "rogers", "smial", "smoke", "strong", "tea", "tunnel", "umble", "ville", "ward", "weed", "wort", "worthy"
                ]
            }
        }
    }
};

NameList[Halfling.name] = Halfling;
