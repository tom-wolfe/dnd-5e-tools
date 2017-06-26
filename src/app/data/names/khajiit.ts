import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Based on names from http://en.uesp.net/wiki/Lore:Khajiit_Names */

export const Khajiit: Names.NameDefinition = {
    name: "Khajiit",
    formats: [
        { name: "Honorific'Forename", formats: ["{honorificPrefix}'{forename}"] },
        { name: "Forename-Honorific", formats: ["{forename}-{honorificSuffix}"] },
        { name: "Honorific'Forename-Honorific", formats: ["{honorificPrefix}'{forename}-{honorificSuffix}"] },
        { name: "Forename", formats: ["{forenamePrefix}{forenameSuffix}"] },
    ],
    parts: {
        honorificPrefix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": ["dar", "do", "dro", "j", "ja", "ji", "ra", "ri"],
                "F": ["dra", "daro", "ko", "la"],
                "N": ["do", "m", "ma", "qa", "s"]
            },
        },
        honorificSuffix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": ["dar", "do", "dro", "ji", "ra", "ri"],
                "F": ["dra", "daro", "ko"],
                "N": ["do", "ma", "qa"]
            },
        },
        forenamePrefix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": ["ab'", "ak'", "akh'", "am", "fa'", "hus", "mo", "moham", "moj", "na", "om", "sha", "sin", "za'", "zan'"],
                "F": ["a", "azi", "ela", "fa", "kha", "ki", "mo", "na", "ra", "ri", "sa", "sha", "so", "ta", "za"],
            },
        },
        forenameSuffix: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": ["ar", "bar", "bil", "der", "dul", "gh", "ir", "kir", "med", "nir", "noud", "sien", "soud", "taba", "tabe", "urabi"],
                "F": [
                    "ahin", "ahni", "feliz", "hana", "heh", "hrazad", "jjan", "khtar", "nita", "raya", "riba", "shima", "srin", "tima",
                    "zita"
                ],
            },
        },
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                "M": [
                    "aiq", "baasha", "bakha", "barri", "bassa", "dar", "darr", "dato", "dhannar", "dirr", "drassa", "farahn", "fazir",
                    "ghasta", "hanir", "jahirr", "jazha", "jazha", "jhad", "jhan", "jidarr", "karim", "khar", "kier", "mhad", "mhirr",
                    "nashi", "qanar", "raaj", "radirr", "rasha", "rathad", "raverr", "razirr", "ren", "riska", "saddha", "sakhar",
                    "shajirr", "shan", "shanji", "sharr", "shavir", "skar", "tasarr", "tesh", "thri", "vanni", "virr", "zaadha", "zah",
                    "zahn", "zahr", "zakar", "zamha", "zargo", "zaymar", "zhar", "zharim", "zhid", "zhirr", "zhirr", "zin"
                ],
                "F": [
                    "affri", "ahdahni", "ahjara", "dahnara", "dara", "darsha", "dasha", "desi", "dran", "drassa", "jarsha", "kara",
                    "nisaba", "raska", "rava", "sava", "shaba", "shani", "shivani", "thasa", "tsani", "vandra", "vassa", "zaka"
                ]
            }
        }
    }
};

NameList[Khajiit.name] = Khajiit;
