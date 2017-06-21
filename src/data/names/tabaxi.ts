/* cSpell:disable */

import { Names as Names } from "./name-list";

import * as Races from "../../models/races";

export const Tabaxi: Races.NameDefinition = {
    name: "Tabaxi",
    formats: ["{forename}"],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "markov",
            source: {
                "M": [
                    "ab'ar", "ab'bar", "ab'bil", "ab'der", "ab'dul", "ab'gh", "ab'ir", "ab'kir", "ab'med", "ab'nir", "ab'noud", "ab'sien",
                    "ab'soud", "ab'taba", "ab'tabe", "ab'urabi", "ak'ar", "ak'bar", "ak'bil", "ak'der", "ak'dul", "ak'gh", "ak'ir",
                    "ak'kir", "ak'med", "ak'nir", "ak'noud", "ak'sien", "ak'soud", "ak'taba", "ak'tabe", "ak'urabi", "akh'ar", "akh'bar",
                    "akh'bil", "akh'der", "akh'dul", "akh'gh", "akh'ir", "akh'kir", "akh'med", "akh'nir", "akh'noud", "akh'sien",
                    "akh'soud", "akh'taba", "akh'tabe", "akh'urabi", "amar", "ambar", "ambil", "amder", "amdul", "amgh", "amir", "amkir",
                    "ammed", "amnir", "amnoud", "amsien", "amsoud", "amtaba", "amtabe", "amurabi", "baadargo", "bhisha", "dahlima",
                    "dro'barri", "dro'farahn", "dro'marash", "dro'qanar", "dro'sakhar", "dro'shanji", "dro'shavir", "dro'tasarr",
                    "dro'zah", "dro'zaymar", "dro'zharim", "dro'zhirr", "fa'ar", "fa'bar", "fa'bil", "fa'der", "fa'dul", "fa'gh", "fa'ir",
                    "fa'kir", "fa'med", "fa'nir", "fa'noud", "fa'sien", "fa'soud", "fa'taba", "fa'tabe", "fa'urabi", "hassiri", "husar",
                    "husbar", "husbil", "husder", "husdul", "husgh", "husir", "huskir", "husmed", "husnir", "husnoud", "hussien",
                    "hussoud", "hustaba", "hustabe", "husurabi", "j'baana", "j'baasha", "j'bari", "j'darr", "j'datharr", "j'dato",
                    "j'dhannar", "j'ghasta", "j'hanir", "j'jarsha", "j'jazha", "j'kara", "j'kier", "j'mhad", "j'raksa", "j'rasha",
                    "j'riska", "j'saddha", "j'skar", "j'zamha", "j'zargo", "j'zhar", "j'zhirr", "j'zidzo", "j'zin-dar", "ja'fazir",
                    "jo'ren-dar", "jo'thri-dar", "jobasha", "jodhur", "joshur", "k'sharr", "kesh", "kharjo", "m'aiq", "m'dasha", "m'desi",
                    "m'dirr", "m'nashi", "m'raaj-dar", "m'shan", "ma'dara", "ma'dran", "ma'jhad", "ma'jidarr", "ma'khar", "ma'randru-jo",
                    "ma'raska", "ma'tasarr", "ma'zaddha", "ma'zahn", "ma'zaka", "moar", "mobar", "mobil", "moder", "modul", "mogh",
                    "mohamar", "mohambar", "mohambil", "mohamder", "mohamdul", "mohamgh", "mohamir", "mohamkir", "mohammed", "mohamnir",
                    "mohamnoud", "mohamsien", "mohamsoud", "mohamtaba", "mohamtabe", "mohamurabi", "moir", "mojar", "mojbar", "mojbil",
                    "mojder", "mojdul", "mojgh", "mojir", "mojkir", "mojmed", "mojnir", "mojnoud", "mojsien", "mojsoud", "mojtaba",
                    "mojtabe", "mojurabi", "mokir", "momed", "monir", "monoud", "mosien", "mosoud", "motaba", "motabe", "mourabi", "naar",
                    "nabar", "nabil", "nader", "nadul", "nagh", "nair", "nakir", "named", "nanir", "nanoud", "nasien", "nasoud", "nataba",
                    "natabe", "naurabi", "omar", "ombar", "ombil", "omder", "omdul", "omgh", "omir", "omkir", "ommed", "omnir", "omnoud",
                    "omsien", "omsoud", "omtaba", "omtabe", "omurabi", "qa'dar", "r'vanni", "ra'dirsha", "ra'jahirr", "ra'jhan",
                    "ra'jhera", "ra'jiradh", "ra'jirr", "ra'karim", "ra'kheran", "ra'kothre", "ra'mhirr", "ra'sava", "ra'tesh", "ra'virr",
                    "ra'zahr", "ra'zhid", "ranarr-jo", "ri'bassa", "ri'darsha", "ri'dumiwa", "ri'jirr", "ri'saad", "ri'shajirr",
                    "ri'vassa", "ri'zaadha", "ri'zakar", "s'bakha", "s'drassa", "s'radirr", "s'rathad", "s'rava", "s'raverr", "s'razirr",
                    "s'renji", "s'shani", "s'vandra", "s'virr", "shaar", "shabar", "shabil", "shader", "shadul", "shagh", "shair",
                    "shakir", "shamed", "shanir", "shanoud", "shasien", "shasoud", "shataba", "shatabe", "shaurabi", "sholani", "sinar",
                    "sinbar", "sinbil", "sinder", "sindul", "singh", "sinir", "sinkir", "sinmed", "sinnir", "sinnoud", "sinsien",
                    "sinsoud", "sintaba", "sintabe", "sinurabi", "thengil", "urjabhi", "urjorad", "vasha", "wadarkhu", "za'ar", "za'bar",
                    "za'bil", "za'der", "za'dul", "za'gh", "za'ir", "za'kir", "za'med", "za'nir", "za'noud", "za'sien", "za'soud",
                    "za'taba", "za'tabe", "za'urabi", "zan'ar", "zan'bar", "zan'bil", "zan'der", "zan'dul", "zan'gh", "zan'ir", "zan'kir",
                    "zan'med", "zan'nir", "zan'noud", "zan'sien", "zan'soud", "zan'taba", "zan'tabe", "zan'urabi"
                ],
                "F": [
                    "aahin", "aahni", "abanji", "abhuki", "adanja", "addhiranirr", "adharanji", "afeliz", "affri", "ahana", "ahdahni",
                    "ahdarji", "ahdni", "ahdri", "aheh", "ahjara", "ahjazda", "ahjisi", "ahkari", "ahnarra", "ahnassi", "ahndahra",
                    "ahnia", "ahnisa", "ahrazad", "ahzini", "aina", "ajira", "ajjan", "akhtar", "anita", "anjari", "arabhi", "aravi",
                    "araya", "ariba", "ashidasha", "ashima", "ashni", "asrin", "atahba", "atahbah", "atima", "atrabhi", "ayisha",
                    "aziahin", "aziahni", "azifeliz", "azihana", "aziheh", "azihrazad", "azijjan", "azikhtar", "azinita", "aziraya",
                    "aziriba", "azishima", "azisrin", "azita", "azitima", "azizita", "bahdahna", "bahdrashi", "baissa", "bhusari",
                    "chirranirr", "dahleena", "dahnara", "dro'nahrahe", "ekapi", "elaahin", "elaahni", "elafeliz", "elahana", "elaheh",
                    "elahrazad", "elajjan", "elakhtar", "elanita", "elaraya", "elariba", "elashima", "elasrin", "elatima", "elazita",
                    "faahin", "faahni", "fafeliz", "fahana", "faheh", "fahrazad", "fajjan", "fakhtar", "fanita", "faraya", "fariba",
                    "fashima", "fasrin", "fatima", "fazita", "habasi", "harassa", "idhassi", "inerri", "inorra", "kaasha", "khaahin",
                    "khaahni", "khafeliz", "khahana", "khaheh", "khahrazad", "khajjan", "khakhtar", "khamuzi", "khanita", "kharaya",
                    "khariba", "khashima", "khasrin", "khatima", "khayla", "khazita", "khazura", "khinjarsi", "kiahin", "kiahni",
                    "kifeliz", "kihana", "kiheh", "kihrazad", "kijjan", "kikhtar", "kinita", "kiraya", "kiriba", "kiseena", "kishashi",
                    "kishima", "kishni", "kisimba", "kisisa", "kisrin", "kitima", "kizita", "moahin", "moahni", "mofeliz", "mohana",
                    "moheh", "mohrazad", "mojjan", "mokhtar", "monita", "moraya", "moriba", "moshima", "mosrin", "motima", "mozita",
                    "naahin", "naahni", "nafeliz", "nahana", "naheh", "nahrazad", "nahsi", "najjan", "nakhtar", "nanita", "naraya",
                    "nariba", "nashima", "nasrin", "natima", "nazita", "nisaba", "ra'zhinda", "raahin", "raahni", "rabinna", "rafeliz",
                    "rahana", "raheh", "rahrazad", "rajjan", "rakhtar", "ranita", "raraya", "rariba", "rashima", "rasrin", "ratima",
                    "razita", "riahin", "riahni", "rifeliz", "rihana", "riheh", "rihrazad", "rijjan", "rikhtar", "rinita", "riraya",
                    "ririba", "rishima", "risrin", "ritima", "rizita", "s'fara", "s'jirra", "s'kasha", "s'krivva", "s'mirra", "s'thasa",
                    "saahin", "saahni", "safeliz", "sahana", "saheh", "sahrazad", "sajjan", "sakhtar", "sanita", "saraya", "sariba",
                    "sashima", "sasrin", "satima", "sazita", "shaahin", "shaahni", "shaba", "shafeliz", "shahana", "shaheh", "shahrazad",
                    "shajjan", "shakhtar", "shamada", "shanita", "sharaya", "shariba", "shashima", "shasrin", "shatima", "shavari",
                    "shazita", "shivani", "shomara", "shotherra", "shunari", "shuravi", "soahin", "soahni", "sofeliz", "sohana", "soheh",
                    "sohrazad", "sojjan", "sokhtar", "sonita", "soraya", "soriba", "soshima", "sosrin", "sotima", "sozita", "taahin",
                    "taahni", "tafeliz", "tahana", "taheh", "tahrazad", "tajjan", "takhtar", "talasma", "tanita", "taraya", "tariba",
                    "tashima", "tasrin", "tatima", "tazita", "tsabhi", "tsajadhi", "tsalajma", "tsalani", "tsani", "tsarrina", "tsavani",
                    "tsavi", "tsiya", "tsramla", "tsrasuna", "tsrava", "tsrazami", "ubaasi", "udarra", "unjara", "vajhira", "vanjirra",
                    "yushi", "zaahin", "zaahni", "zabhila", "zafeliz", "zahana", "zaheh", "zahraji", "zahrasha", "zahrazad", "zajjan",
                    "zakhtar", "zanita", "zaraya", "zariba", "zashima", "zasrin", "zatima", "zaynabi", "zazita"
                ]
            }
        }
    }
};

Names.NameList[Tabaxi.name] = Tabaxi;
