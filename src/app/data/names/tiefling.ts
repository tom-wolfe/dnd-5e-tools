import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Tiefling: Names.NameDefinition = new Names.NameDefinition()
Object.assign(Tiefling, {
    name: "Tiefling",
    formats: [{ name: "Forename", formats: ["{name}"] }],
    parts: {
        name: {
            markovOrder: 2,
            mode: "markovOrItem",
            maxLength: 15,
            source: {
                /* Adapted from from: https://en.wikipedia.org/wiki/List_of_theological_demons */
                "N": [
                    "aamon", "abaddon", "agares", "aim", "alal", "alastor", "allocer", "alloces", "amaymon", "amdusias", "amon", "amy",
                    "ancitif", "andras", "andrealphus", "andromalius", "apollyon", "astaroth", "baal", "bael", "balam", "baphomet",
                    "barbas", "barbatos", "bathin", "bathym", "beleth", "belphegor", "bifrons", "botis", "buer", "bune", "caacrinolaas",
                    "caassimolar", "caim", "canio", "cerbere", "chax", "cimeies", "cimejes", "classyalabolas", "corson", "crocell",
                    "dantalion", "decarabia", "demogorgon", "devil", "eligos", "flauros", "flavros", "focalor", "foraii", "foras",
                    "forcas", "forcas", "forneus", "forras", "furcas", "furfur", "gaap", "gamigin", "glassia-labolis", "glasya-labolas",
                    "gomory", "gremory", "gusion", "gusoin", "gusoyn", "haagenti", "haborym", "halphas", "hauras", "haures", "havres",
                    "hemataus", "incubus", "ipes", "ipos", "kimaris", "legion", "leonard", "leraie", "leraje", "lucifer", "lucifuge",
                    "malaphar", "malephar", "malphas", "malthus", "mammon", "marax", "marchosias", "marthim", "mathim", "merihem",
                    "morax", "murmur", "naberius", "naberus", "orias", "oriax", "orobas", "ose", "paimon", "phenex", "pithius", "procell",
                    "pruflas", "raum", "rofocale", "ronove", "sabnock", "saleos", "seir", "shax", "sitri", "solas", "stolas", "succubus",
                    "surgat", "tannin", "titivillus", "ukobach", "valac", "valefar", "vapula", "vassago", "vepar", "vine", "zagan",
                    "zepar", "ziminiar"
                ]
            },
        }
    }
});

NameList.push(Tiefling);
