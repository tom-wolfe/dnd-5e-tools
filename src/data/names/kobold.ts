/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-kobold-names.php */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const Kobold: Races.NameDefinition = {
    name: "Kobold",
    formats: [
        "{name}"
    ],
    parts: {
        name: {
            markovOrder: 2,
            mode: "markov",
            source: {
                "N": [
                    "crelk", "gholk", "droop", "arix", "aks", "galax", "garu", "hagnar", "hox", "irtos", "keshak", "meepo", "molo",
                    "ohsoss", "rotom", "sagin", "sik", "sniv", "taklak", "kod", "rek", "vorn", "tovi", "guba", "vuss", "tak", "kox", "tax",
                    "kon", "rex", "dik", "zir", "maka", "kakra", "kam", "kihro", "kex", "neks", "deekin"
                ]
            },
        }
    }
};

NameList[Kobold.name] = Kobold;
