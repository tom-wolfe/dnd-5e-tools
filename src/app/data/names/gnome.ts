import * as Races from "../../models/races";
import { GnomeSurnames } from "./common/gnome-surnames";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-gnome-names.php */

export const Gnome: Races.NameDefinition = {
    name: "Gnome",
    formats: [
        "{firstSyllable}{secondSyllable} {surnamePrefixAdjective}{surnameSuffixNoun}",
        "{firstSyllable}{secondSyllable} {surnamePrefixNoun}{surnameSuffixAdjective}",
    ],
    parts: {
        firstSyllable: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": [
                    "al", "ari", "bil", "bri", "cal", "cor", "dav", "dor", "eni", "er", "far", "fel", "ga", "gra", "his", "hor", "ian",
                    "ipa", "je", "jor", "kas", "kel", "lan", "lo", "mah", "man", "mer", "nes", "ni", "or", "oru", "pana", "po", "qua",
                    "quo", "ras", "ron", "sa", "sal", "sin", "tan", "to", "tra", "um", "uri", "val", "vor", "war", "wil", "wre", "xal",
                    "xo", "ye", "yos", "zan", "zil"
                ],
                "F": [
                    "alu", "ari", "ban", "bree", "car", "cel", "daphi", "do", "eili", "el", "fae", "fen", "fol", "gal", "gren", "hel",
                    "hes", "ina", "iso", "jel", "jo", "klo", "kri", "lil", "lori", "min", "my", "ni", "ny", "oda", "or", "phi", "pri",
                    "qi", "que", "re", "rosi", "sa", "sel", "spi", "ta", "tifa", "tri", "ufe", "uri", "ven", "vo", "wel", "wro", "xa",
                    "xyro", "ylo", "yo", "zani", "zin"
                ]
            },
        },
        secondSyllable: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": [
                    "bar", "ben", "bis", "corin", "cryn", "don", "dri", "fan", "fiz", "gim", "grim", "hik", "him", "ji", "jin", "kas",
                    "kur", "len", "lin", "min", "mop", "morn", "nan", "ner", "ni", "nik", "pip", "pos", "rick", "ros", "rug", "ryn",
                    "ser", "ston", "tix", "tor", "ver", "vyn", "win", "wor", "xif", "xim", "ybar", "yur", "ziver", "zu"
                ],
                "F": [
                    "bi", "bys", "celi", "ci", "dira", "dysa", "fi", "fyx", "gani", "gyra", "hana", "hani", "kasys", "kini", "la", "li",
                    "lin", "lys", "mila", "miphi", "myn", "myra", "na", "niana", "noa", "nove", "phina", "pine", "qaryn", "qys", "rhana",
                    "roe", "sany", "ssa", "sys", "tina", "tra", "wyn", "wyse", "xi", "xis", "yaris", "yore", "za", "zyre"
                ]
            },
        },

        surnamePrefixAdjective: GnomeSurnames.prefixAdjective,
        surnameSuffixNoun: GnomeSurnames.suffixNoun,
        surnamePrefixNoun: GnomeSurnames.prefixNoun,
        surnameSuffixAdjective: GnomeSurnames.suffixAdjective
    }
};

NameList[Gnome.name] = Gnome;
