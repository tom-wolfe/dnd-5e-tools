import * as Names from "app/models/names";
import { ElfNames } from "./common/elf-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Firbolg: Names.NameDefinition = new Names.NameDefinition({
    name: "Firbolg",
    formats: [
        {
            name: "Forename",
            formats: [
                "{forenamePrefixConsonant}{forenameSuffixVowel}", "{forenamePrefixVowel}{forenameSuffixConsonant}"
            ]
        }
    ], parts: {
        forenamePrefixConsonant: ElfNames.forenamePrefixConsonant,
        forenamePrefixVowel: ElfNames.forenamePrefixVowel,
        forenameSuffixVowel: ElfNames.forenameSuffixVowel,
        forenameSuffixConsonant: ElfNames.forenameSuffixConsonant,
    }
});

NameList.push(Firbolg);
