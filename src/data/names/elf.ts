/* cSpell:disable */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const Elf: Races.NameDefinition = {
    name: "Elf",
    formats: ["{forename} {surname}"],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "markov",
            source: {
                "M": [
                    "adorellan", "aegnor", "aiwin", "amdir", "amras", "amrod", "amroth", "angrod", "aolis", "ardryll", "argon", "beleg",
                    "caranthir", "celeborn", "celebrimbor", "celegorm", "cirdan", "curufin", "daeron", "denethor", "duilin", "eärendil",
                    "ecthelion", "edrahil", "egalmoth", "elaith", "eldrin", "elemmakil", "elidyr", "elidyr", "ellisar", "elmo",
                    "elrond", "elu", "enel", "enerdhil", "eol", "erolith", "ettrian", "fëanor", "filarion", "finarfin", "fingolfin",
                    "fingon", "finrod", "galadhon", "galathil", "galdor", "galion", "gil-galad", "gildor", "glorfindel", "gwindor",
                    "haldir", "ingwë", "ingwion", "inialos", "lashul", "legolas", "lindir", "mirthal", "morthil", "nasir", "olwë",
                    "orodreth", "oropher", "orophin", "rúmil", "saeros", "tehlmar", "thranduil"
                ],
                "F": [
                    "aerith", "aleesia", "amairë", "anairë", "annael", "aredhel", "arlayna", "arwen", "celaena", "celebrian", "eärwen",
                    "eldalótë", "elemmírë", "elenaril", "elenwë", "enelyë", "findis", "finduilas", "galadriel", "idril", "ilyana",
                    "imin", "iminyë", "imra", "indis", "irien", "irimë", "lúthien", "míriel", "mithrellas", "nellas", "nerdanel",
                    "nimrodel", "rothana", "shyael", "thalia", "tinesia"
                ]
            },
        },
        "surname": {
            markovOrder: 2,
            mode: "markov",
            source: {
                "N": [
                    "heleneth", "helvaris", "hermenor", "talindar", "tormaer", "ulalynn", "undomiel"
                ]
            },
        }
    }
};

NameList[Elf.name] = Elf;
