/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-changeling-names.php */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const Changeling: Races.NameDefinition = {
    name: "Changeling",
    formats: [
        "{name}"
    ],
    parts: {
        name: {
            markovOrder: 2,
            mode: "markov",
            source: {
                "N": ["nirx", "daks", "hits", "vuks", "meec", "yot", "weeg", "mars", "yeac", "tourt", "lag", "suk", "borx", "purx", "iez",
                    "wun", "iek", "wix", "iez", "arx", "wot", "noukt", "baim", "aisk", "veam", "jask", "maits", "vam", "raet", "yirs",
                    "tum", "eaks", "teem", "az", "books", "vouts", "taig", "furt", "vaic", "foc", "mits", "vors", "morx", "pat", "sosk",
                    "visk", "firt", "neec", "larx", "hogs", "burt", "miex", "bak", "niesk", "eats", "nag", "vim", "vies", "eegs", "yaig",
                    "sask", "eart", "mirs", "feas", "lak", "lum", "pan", "lam", "figs", "rom", "hun", "mak", "lic", "housk", "yeert", "aikt",
                    "rars", "hugs", "mat", "neag", "ats", "bask", "veesk", "ieks", "fiek", "vun", "raix", "art", "ut", "lorx", "sigs", "juc",
                    "dok", "parx", "vus", "hirs", "nuz", "fooks", "fairt", "liez"
                ]
            },
        }
    }
};

NameList[Changeling.name] = Changeling;
