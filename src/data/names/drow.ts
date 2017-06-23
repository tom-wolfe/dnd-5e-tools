import * as Races from "../../models/races";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Partially adapted from http://www.angelfire.com/rpg2/vortexshadow/names.html */

export const Drow: Races.NameDefinition = {
    name: "Elf (Drow)",
    formats: [
        "{forenamePrefix}{forenameSuffix} {surnamePrefix}{surnameSuffix}",
        "{forenamePrefix}{forenameSuffix}{forenameSuffix} {surnamePrefix}{surnameSuffix}",
        "{forenamePrefix}{forenameSuffix}'{forenameSuffix} {surnamePrefix}{surnameSuffix}",
        "{forenamePrefix}{forenameSuffix} {forenamePrefix}",
        "{forenameSuffix}'{forenamePrefix}{forenameSuffix} {surnamePrefix}{surnameSuffix}",
    ],
    parts: {
        forenamePrefix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "adin", "akor", "alak", "alaun", "alton", "aly", "amal", "ang", "ant", "ardul", "aun", "bae", "bal", "bar", "bel",
                    "belar", "berg", "bhin", "briz", "bruh", "bur", "cal", "chal", "char", "chasz", "chess", "dhaun", "dil", "din", "dip",
                    "dirz", "div", "dris", "driz", "duag", "dur", "eclave", "elaug", "elk", "elv", "elvan", "erel", "erth", "ethe", "faer",
                    "felyn", "fil", "filf", "g’eld", "gauss", "gel", "ghaun", "gin", "go", "grey", "gul", "hael", "hal", "hatch", "houn",
                    "hurz", "iliv", "illiam", "ilm", "ilph", "ilzt", "im", "in", "irae", "irr", "ist", "iym", "izz", "jar", "jhael", "jhan",
                    "jhul", "jys", "kalan", "kel", "kren", "kron", "lael", "lar", "les", "lineeer", "llt", "lua", "lyme", "mal", "malag",
                    "mas", "may", "mer", "micar", "min", "mol", "mourn", "myr", "nad", "nal", "nath", "ned", "neer", "nhil", "nil", "null",
                    "nym", "olor", "omar", "orgoll", "pellan", "phaer", "phar", "phyr", "phyx", "qil", "qualn", "quar", "quav", "quev",
                    "quil", "quil", "ran", "rauv", "relon", "rhyl", "rik", "ril", "riz", "ryl", "sab", "sabal", "selds", "shar", "shi`n",
                    "shri", "shur", "shynt", "sin", "sol", "sorn", "spir", "ssap", "ssz", "susp", "szin", "szor", "t’riss", "tal", "talab",
                    "tar", "taz", "teb", "that", "tluth", "triel", "tsab", "uhls", "ulviir", "umrae", "url", "val", "vas", "vesz", "vic",
                    "vier", "vlon", "vorn", "vuz", "waer", "wehl", "welv", "wod", "wruz", "wuyon", "xull", "xun", "yas", "yaz", "zakn",
                    "zar", "zebey", "zek", "zes", "zez", "zilv"
                ]
            }
        },
        forenameSuffix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "a", "ace", "ae", "aere", "afae", "afay", "afein", "agh", "aghar", "al", "ala", "anna", "antar", "aonar", "arra", "as",
                    "aste", "atar", "atlab", "aufein", "aun", "avin", "axle", "ayne", "baste", "breena", "bryn", "cice", "cyrl", "d", "da",
                    "daer", "dan", "dar", "dax", "dia", "diira", "diirn", "dinn", "dor", "dorl", "dra", "driira", "driirn", "dril", "drin",
                    "dyn", "e", "eari", "erd", "erin", "eth", "eyl", "fein", "ffyn", "fryn", "gloth", "gos", "hrae", "hriir", "hrys",
                    "iara", "ica", "ice", "idil", "iira", "imar", "in", "inid", "inidia", "inil", "intra", "inyon", "irahc", "isstra",
                    "ithra", "jra", "jss", "kacha", "kah", "kiira", "lara", "launim", "lay", "lin", "lochar", "lyn", "mice", "mur’ss",
                    "myr", "na", "nar", "net", "net", "nilee", "nitra", "nolu", "oj", "olg", "olil", "olin", "olvir", "omph", "onia",
                    "onim", "or", "orvir", "oyn", "oyss", "qualyn", "quarra", "quiri", "ra", "rae", "raema", "raen", "raena", "rak", "ral",
                    "rar", "ree", "riia", "riina", "ril", "roos", "ryn", "ryna", "ryne", "rysn", "shalee", "ssysn", "stin", "stra", "tana",
                    "tar", "tel", "thara", "thrae", "ton", "tran", "tree", "trin", "tyrr", "ual", "ue", "uit", "une", "uque", "urra", "va",
                    "vayas", "ven", "vrae", "vrae", "vyll", "vyr", "wae", "wiira", "wyss", "xae", "xena", "xyra", "yl", "ylene", "yln",
                    "ymma", "ynda", "ynrae", "yraen", "yrd", "yrr", "zaer", "zar", "zen", "zt", "zyne", "zyr"
                ]
            }
        },
        surnamePrefix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "alean", "ale", "arab", "arken", "auvry", "baen", "barri", "cladd", "desp", "de", "do'", "eils", "everh", "fre", "gode",
                    "hla", "hun", "ken", "kil", "mae", "mel", "my", "noqu", "orly", "ouss", "rilyn", "teken'", "tor", "zau"
                ]
            }
        },
        surnameSuffix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "afin", "ana", "ani", "ar", "arn", "ate", "ath", "duis", "ervs", "ep", "ett", "ghym", "iryn", "lyl", "ndar", "neld",
                    "rae", "rahel", "rret", "sek", "th", "tlar", "t'tar", "tyl", "und", "urden", "val", "virr", "zynge"
                ]
            }
        }
    }
};

NameList[Drow.name] = Drow;
