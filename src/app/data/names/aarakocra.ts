import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-aarakocra-names.php */

export const Aarakocra: Names.NameDefinition = {
    name: "Aarakocra",
    formats: [{ name: "Forename", formats: ["{name}"] }],
    parts: {
        name: {
            markovOrder: 2,
            mode: "markovOrItem",
            source: {
                "N": [
                    "rharc", "guie", "krourk", "rhurk", "sac", "qrullaar", "kruallarc", "alli", "qrulli", "ekec", "gi", "cluck", "grass",
                    "del", "crid", "uacciss", "allarc", "qerad", "qhulle", "ziqarr", "rur", "klaerrk", "zaias", "zas", "irc", "allick",
                    "krikek", "kerehk", "qrakked", "sicia", "e", "qhif", "khaiag", "clarr", "our", "deke", "qheki", "qulies", "qrece",
                    "aiakees", "yed", "qa", "yag", "rharr", "zar", "cacce", "urrerrk", "galid", "riqerk", "ikif", "aiark", "irr", "yurc",
                    "qi", "cleck", "ucca", "rhekil", "ele", "graiakkerr", "zikiarc", "aes", "clahk", "duierrk", "dud", "gihk", "silleark",
                    "klucir", "guaceaf", "hikis", "klikkid", "krec", "khud", "gid", "sehk", "si", "cerass", "helaarr", "qrillac",
                    "qralleel", "kreqirc", "rhurc", "zas", "zerk", "qre", "klihk", "klucceel", "elis", "khurarr", "kruieqiarrk", "zuria",
                    "cla", "klirk", "rhef", "grik", "huss", "cekkarrk", "rhecce", "uiellac", "duqirc", "cakiec"
                ]
            },
        }
    }
};

NameList[Aarakocra.name] = Aarakocra;
