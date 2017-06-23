import * as Races from "../../models/races";
import { ElfNames } from "./common/elf-names";
import { HumanNames } from "./common/human-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const HalfElf: Races.NameDefinition = {
    name: "Half-Elf",
    formats: [
        // Elf names.
        "{elfForenamePrefixConsonant}{elfForenameSuffixVowel} {elfSurname}",
        "{elfForenamePrefixVowel}{elfForenameSuffixConsonant} {elfSurname}",

        // Human names.
        "{humanForename} {humanSurnamePrefix}{humanSurnameSuffix}",

        // Half and half.
        "{humanForename} {elfSurname}",
        "{elfForenamePrefixVowel}{elfForenameSuffixConsonant} {humanSurnamePrefix}{humanSurnameSuffix}",
    ],
    parts: {
        elfForenamePrefixConsonant: ElfNames.forenamePrefixConsonant,
        elfForenamePrefixVowel: ElfNames.forenamePrefixVowel,
        elfForenameSuffixVowel: ElfNames.forenameSuffixVowel,
        elfForenameSuffixConsonant: ElfNames.forenameSuffixConsonant,
        elfSurname: ElfNames.surname,

        humanForename: HumanNames.forename,
        humanSurnamePrefix: HumanNames.surnamePrefix,
        humanSurnameSuffix: HumanNames.surnameSuffix
    }
};

NameList[HalfElf.name] = HalfElf;
