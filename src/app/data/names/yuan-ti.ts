import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const YuanTi: Names.NameDefinition = new Names.NameDefinition()
Object.assign(YuanTi, {
    name: "Yuan-ti",
    formats: [{ name: "Forename", formats: ["{name}"] }],
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
});

NameList.push(YuanTi);
