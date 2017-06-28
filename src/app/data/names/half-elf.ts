import * as Names from "app/models/names";
import { ElfNames } from "./common/elf-names";
import { HumanNames } from "./common/human-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const HalfElf: Names.NameDefinition = new Names.NameDefinition({
    name: "Half-Elf",
    formats: [
        {
            name: "Elf Name",
            formats: [
                "{elfForenamePrefixConsonant}{elfForenameSuffixVowel} {elfSurname}",
                "{elfForenamePrefixVowel}{elfForenameSuffixConsonant} {elfSurname}",
            ]
        },
        { name: "Human Name", formats: ["{humanForename} {humanSurnamePrefix}{humanSurnameSuffix}"] },
        {
            name: "Elf Forename, Human Surname",
            formats: [
                "{elfForenamePrefixConsonant}{elfForenameSuffixVowel} {humanSurnamePrefix}{humanSurnameSuffix}",
                "{elfForenamePrefixVowel}{elfForenameSuffixConsonant} {humanSurnamePrefix}{humanSurnameSuffix}"
            ]
        },
        { name: "Human Forename, Elf Surname", formats: ["{humanForename} {elfSurname}"] }
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
});

NameList.push(HalfElf);
