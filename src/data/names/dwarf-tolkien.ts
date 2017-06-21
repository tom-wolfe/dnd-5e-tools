/* cSpell:disable */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

import { DwarfSurnames } from "./common/dwarf-surnames";

export const DwarfTolkien: Races.NameDefinition = {
    name: "Dwarf (Tolkien)",
    formats: [
        "{forename} {prefixAdjective}{suffixNoun}",
        "{forename} {prefixNoun}{suffixAdjective}",
    ],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "markov",
            source: {
                "N": [
                    "Dagrik",
                    "Thaugnit ",
                    "Utror",
                    "Vagnok",
                    "Ikekut ",
                    "Radivis",
                    "Donik",
                    "Krazimir",
                    "Darbek",
                    "Balkom",
                    "Egrak",
                    "Balin",
                    "Bifur",
                    "Bofur",
                    "Bombur",
                    "Dori",
                    "Dwalin",
                    "Fili",
                    "Gloin",
                    "Kili",
                    "Nori",
                    "Oin",
                    "Ori",
                    "Durin",
                    "Fundin",
                    "Nain",
                    "Thror",
                    "Thrain",
                    "Farin",
                    "Dis",
                    "Gimli",
                    "Borin",
                    "Frerin",
                    "Fror",
                    "Gror",
                    "Frar",
                    "Nali",
                    "Nar",
                    "Narvi",
                    "Mim",
                    "Ibun",
                    "Khim",
                    "Akor",
                    "Nurot",
                    "Kravis",
                    "Drazimir",
                    "Kanarr",
                    "Kadarr",
                    "Kromdrak",
                    "Beldek",
                    "Murmiir",
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
