import * as Names from "app/models/names";
import { HumanNames } from "./common/human-names";
import { OrcNames } from "./common/orc-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const HalfOrc: Names.NameDefinition = {
    name: "Half-Orc",
    formats: [
        // Orc names
        "{orcForename} {orcSurnamePrefix}-{orcSurname}",

        // Human names.
        "{humanForename} {humanSurnamePrefix}{humanSurnameSuffix}",

        // Half and half.
        "{orcForename} {humanSurnamePrefix}{humanSurnameSuffix}",
        "{humanForename} {orcSurnamePrefix}-{orcSurname}"
    ],
    parts: {
        orcForename: OrcNames.forename,
        orcSurnamePrefix: OrcNames.surnamePrefix,
        orcSurname: OrcNames.surname,

        humanForename: HumanNames.forename,
        humanSurnamePrefix: HumanNames.surnamePrefix,
        humanSurnameSuffix: HumanNames.surnameSuffix
    }
};

NameList[HalfOrc.name] = HalfOrc;
