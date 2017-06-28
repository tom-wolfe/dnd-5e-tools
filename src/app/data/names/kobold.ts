import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-kobold-names.php */

export const Kobold: Names.NameDefinition = new Names.NameDefinition({
    name: "Kobold",
    formats: [{ name: "Forename", formats: ["{name}"] }],
    parts: {
        name: {
            markovOrder: 2,
            mode: "markovOrItem",
            source: {
                "N": [
                    "crelk", "gholk", "droop", "arix", "aks", "galax", "garu", "hagnar", "hox", "irtos", "keshak", "meepo", "molo",
                    "ohsoss", "rotom", "sagin", "sik", "sniv", "taklak", "kod", "rek", "vorn", "tovi", "guba", "vuss", "tak", "kox", "tax",
                    "kon", "rex", "dik", "zir", "maka", "kakra", "kam", "kihro", "kex", "neks", "deekin"
                ]
            },
        }
    }
});

NameList.push(Kobold);
