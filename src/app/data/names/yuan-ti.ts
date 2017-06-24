import * as Races from "../../models/races";
import { NameList } from "./name-list";

/* cSpell:disable */

export const YuanTi: Races.NameDefinition = {
    name: "Yuan-ti",
    formats: [
        "{name}"
    ],
    parts: {
        name: {
            markovOrder: 2,
            mode: "markovOrItem",
            source: {
                "N": [
                    "acalan", "acamapichtli", "ahuiliztli", "ahuiliztli", "atl", "centehua", "centeotl", "chalchiuhtlicue", "chalchiuitl",
                    "chicomecoatl", "chimalli", "chimalma", "chimalpopoca", "citlali", "citlalli", "citlalmina", "coatl", "cozamalotl",
                    "cuauhtémoc", "eréndira", "huitzilin", "huitzilopochtli", "itzcóatl", "itzli", "matlal", "matlalihuitl", "mayahuel",
                    "nochehuatl", "quauhtli", "quetzalcoatl", "teiuc", "teyacapan", "tezcatlipoca", "tlacotl", "tlaloc", "tlaloc",
                    "tlaltecuhtli,", "tochtli", "tonatiuh", "totec", "tototl", "xilonen", "xipe", "xiuhpilli", "xochitl", "xochitl",
                    "yaotl", "yaretzi", "zolin"
                ]
            },
        }
    }
};

NameList[YuanTi.name] = YuanTi;
