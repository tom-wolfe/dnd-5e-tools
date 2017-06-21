/* cSpell:disable */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

import { DwarfSurnames } from "./common/dwarf-surnames";

export const DwarfNorse: Races.NameDefinition = {
    name: "Dwarf (Norse)",
    formats: [
        "{forename} {prefixAdjective}{suffixNoun}",
        "{forename} {prefixNoun}{suffixAdjective}",
    ],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "markov",
            source: {
                "F": [
                    "astrid",
                    "brynhild",
                    "freydis",
                    "gudrun",
                    "gunnhild",
                    "gunnvor",
                    "hilde",
                    "ingrid",
                    "ragnhild",
                    "ranveig",
                    "sigrid",
                    "sigrunn",
                    "siv",
                    "solveig",
                    "svanhild",
                    "torhild",
                    "torunn",
                    "turid",
                    "vigdis",
                    "yngvild",
                ],
                "M": [
                    "arne",
                    "bjørn",
                    "eirik",
                    "geir",
                    "gisle",
                    "gunnar",
                    "harald",
                    "håkon",
                    "inge",
                    "ivar",
                    "knut",
                    "leif",
                    "magnus",
                    "olav",
                    "rolf",
                    "sigurd",
                    "snorre",
                    "steinar",
                    "torstein",
                    "trygve",
                    "ulf",
                    "valdemar",
                    "vidar",
                    "yngve",
                ]
            },
        },
        prefixAdjective: DwarfSurnames.prefixAdjective,
        suffixNoun: DwarfSurnames.suffixNoun,
        prefixNoun: DwarfSurnames.prefixNoun,
        suffixAdjective: DwarfSurnames.suffixAdjective
    }
};

NameList[DwarfNorse.name] = DwarfNorse;
