import * as Names from "app/models/names";
import { DwarfSurnames } from "./common/dwarf-surnames";
import { NameList } from "./name-list";

/* cSpell:disable */

export const DwarfTolkien: Names.NameDefinition = {
    name: "Dwarf (Tolkien)",
    formats: [
        "{forename} {prefixAdjective}{suffixNoun}",
        "{forename} {prefixNoun}{suffixAdjective}",
    ],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "markovOrItem",
            source: {
                "N": [
                    "dagrik", "thaugnit", "utror", "vagnok", "ikekut ", "radivis", "donik", "krazimir", "darbek", "balkom", "egrak",
                    "balin", "bifur", "bofur", "bombur", "dori", "dwalin", "fili", "gloin", "kili", "nori", "oin", "ori", "durin", "fundin",
                    "nain", "thror", "thrain", "farin", "dis", "gimli", "borin", "frerin", "fror", "gror", "frar", "nali", "nar", "narvi",
                    "mim", "ibun", "khim", "akor", "nurot", "kravis", "drazimir", "kanarr", "kadarr", "kromdrak", "beldek", "murmiir"
                ]
            },
        },
        prefixAdjective: DwarfSurnames.prefixAdjective,
        suffixNoun: DwarfSurnames.suffixNoun,
        prefixNoun: DwarfSurnames.prefixNoun,
        suffixAdjective: DwarfSurnames.suffixAdjective
    }
};

NameList[DwarfTolkien.name] = DwarfTolkien;
