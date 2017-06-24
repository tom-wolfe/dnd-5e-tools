import * as Races from "../../models/races";
import { HumanNames } from "./common/human-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Aasimar: Races.NameDefinition = {
    name: "Aasimar",
    formats: [
        "{humanForename} {surnamePrefix}{surnameSuffix}",
        "{aasimarForename}",
        "{aasimarForename} {surnamePrefix}{surnameSuffix}"
    ],
    parts: {
        humanForename: HumanNames.forename,
        surnamePrefix: HumanNames.surnamePrefix,
        surnameSuffix: HumanNames.surnameSuffix,
        aasimarForename: {
            markovOrder: 2,
            mode: "markovOrItem",
            source: {
                "N": [
                    "abaddon", "adriel", "ariel", "azazel", "azrael", "barachiel", "camael", "cassiel", "castiel", "cherubiel", "clariel",
                    "daniel", "dumah", "eremiel", "gabriel", "gadreel", "hadraniel", "hahasiah", "haniel", "hashmal", "hesediel", "imamiah",
                    "israfel", "jegudiel", "jehoel", "jequn", "jerahmeel", "jibril", "jophiel", "kushiel", "leliel", "lirael", "lucifer",
                    "mebahiah", "metatron", "michael", "mikail", "muriel", "nanael", "netzach", "nithael", "ophaniel", "pahaliah",
                    "penemue", "poyel", "puriel", "qaphsiel", "raguel", "raphael", "raziel", "remiel", "rikbiel", "sabriel", "sachiel",
                    "samael", "sandalphon", "sariel", "schemhampharae", "selaphiel", "seraph", "seraphiel", "seraphim", "shamsiel",
                    "simiel", "temeluchus", "tzadkiel", "tzaphkiel", "tzaphqiel", "uriel", "uzziel", "vasiariah", "vehuel", "zachariel",
                    "zadkiel", "zaphkiel", "zophiel"
                ]
            }
        }
    }
};

NameList[Aasimar.name] = Aasimar;
