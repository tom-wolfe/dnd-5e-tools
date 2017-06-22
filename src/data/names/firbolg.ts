/* cSpell:disable */

import { ElfNames } from "./common/elf-names";
import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const Firbolg: Races.NameDefinition = {
    name: "Firbolg",
    formats: [
        "{forenamePrefixConsonant}{forenameSuffixVowel}",
        "{forenamePrefixVowel}{forenameSuffixConsonant}"
    ],
    parts: {
        forenamePrefixConsonant: ElfNames.forenamePrefixConsonant,
        forenamePrefixVowel: ElfNames.forenamePrefixVowel,
        forenameSuffixVowel: ElfNames.forenameSuffixVowel,
        forenameSuffixConsonant: ElfNames.forenameSuffixConsonant,
    }
};

NameList[Firbolg.name] = Firbolg;
