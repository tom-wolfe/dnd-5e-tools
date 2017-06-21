/* cSpell:disable */

import { Names } from "./name-list";

import * as Races from "../../models/races";

export const ElfAlternate: Races.NameDefinition = {
    name: "Elf (Alternate)",
    formats: ["{forenamePrefix}{forenameSuffix} {surnamePrefix}{surnameSuffix}"],
    parts: {
        forenamePrefix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "ael", "aer", "af", "ah", "al", "am", "ama", "an", "ang", "ansr", "ar", "arì", "arn", "aza", "bael", "bes", "cael",
                    "cal", "cas", "cla", "cor", "cy", "dae", "dho", "dre", "du", "eil", "eir", "el", "er", "ev", "fera", "fi", "fir", "fis",
                    "gael", "gar", "gil", "ha", "hu", "ia", "il", "ja", "jar", "ka", "kan", "ker", "keth", "koeh", "kor", "la", "laf",
                    "lam", "lue", "ly", "mai", "mal", "mara", "my", "na", "nai", "nim", "nu", "ny", "py", "r", "raer", "re", "ren", "rh",
                    "rid", "ru", "rua", "rum", "sae", "seh", "sel", "sha", "she", "si", "sim", "sol", "sum", "syl", "t", "ta", "tahl",
                    "tha", "ther", "tho", "thro", "tia", "tra", "uth", "ver", "vil", "von", "ya", "za", "zy"
                ]
            },
        },
        forenameSuffix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "a", "abrar", "adar", "ae", "ael", "aer", "aera", "aethas", "aethus", "afel", "ah", "aha", "ahal", "ahel", "aia",
                    "aias", "aira", "aith", "al", "ala", "ali", "am", "ama", "an", "ana", "ani", "anis", "ar", "ara", "aral", "ari", "aro",
                    "aruil", "as", "asar", "asel", "ash", "ashk", "ath", "ather", "atri", "atria", "atril", "avain", "avar", "avara",
                    "avel", "avia", "avin", "azair", "brar", "dar", "deth", "dre", "drim", "drimme", "dul", "ean", "eath", "efel", "el",
                    "ela", "ele", "elis", "emar", "en", "er", "erl", "ern", "eruill", "ess", "eth", "etha", "ethal", "ethar", "ethil",
                    "eti", "evar", "ezara", "fel", "hal", "har", "hel", "ia", "ian", "ianna", "iat", "iel", "ihal", "ihar", "ihel", "ii",
                    "ik", "il", "ila", "ilam", "im", "imil", "in", "inal", "inar", "ine", "ion", "ir", "ira", "ire", "is", "isal", "isar",
                    "isel", "iss", "ist", "itae", "itas", "iten", "ith", "ithar", "kash", "ki", "la", "lae", "lam", "lan", "lanna", "lar",
                    "las", "lath", "lean", "lia", "lian", "lie", "lihn", "lirr", "lis", "lith", "llae", "llinn", "lua", "luth", "lyn",
                    "lys", "lyth", "ma", "mah", "mahs", "mil", "mus", "nae", "nal", "nes", "nin", "nine", "nis", "nyn", "odar", "okash",
                    "ola", "olan", "on", "onal", "onna", "or", "oro", "oth", "othi", "que", "quis", "ra", "rad", "rae", "raee", "rah",
                    "rahd", "rail", "ral", "ran", "rath", "re", "reen", "reth", "ri", "ri", "ria", "ria", "ro", "ro", "ron", "ruil",
                    "ryl", "sah", "sal", "sali", "san", "sar", "sel", "sha", "she", "shor", "spar", "tae", "tas", "ten", "thal", "thal",
                    "thar", "thas", "ther", "thi", "thil", "thir", "thus", "ti", "til", "tria", "tril", "tril", "ua", "ual", "uanna",
                    "uath", "udrim", "uhar", "ulam", "umil", "us", "uth", "vain", "van", "vanna", "var", "vara", "via", "vin", "wyn", "ya",
                    "yn", "yr", "yth", "zair", "zara"
                ]
            },
        },
        "surnamePrefix": {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "alean", "alea", "arabi", "arkenea", "auvrea", "baequi", "banni", "cygreen", "dirth", "dryear", "dwin'", "eyllis",
                    "eyther", "freani", "heasi", "hlae", "hunith", "kennyr", "kille", "maern", "melith", "myrth", "norre", "orle", "oussea",
                    "rilynn", "teasen'", "tyr", "tyrnea"
                ]
            },
        },
        "surnameSuffix": {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "altin", "anea", "annia", "aear", "arnith", "atear", "athem", "dlues", "elrvis", "eplith", "ettln", "ghymn", "itryn",
                    "lylth", "nddare", "neldth", "rae", "raheal", "rretyn", "sithek", "thym", "tlarn", "tlithar", "tylar", "undlin",
                    "urdrenn", "valsa", "virrea", "zea"
                ]
            },
        }
    }
};

Names.NameList[ElfAlternate.name] = ElfAlternate;
