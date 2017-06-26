import * as Names from "app/models/names";
import { HumanNames } from "./common/human-names";
import { OrcNames } from "./common/orc-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const HalfOrc: Names.NameDefinition = {
    name: "Half-Orc",
    formats: [
        { name: "Orc Name", formats: ["{orcForename} {orcSurnamePrefix}-{orcSurname}"] },
        { name: "Human Name", formats: ["{humanForename} {humanSurnamePrefix}{humanSurnameSuffix}"] },
        { name: "Orc Forename, Human Surname", formats: ["{orcForename} {humanSurnamePrefix}{humanSurnameSuffix}"] },
        { name: "Human Forename, Orc Surname", formats: ["{humanForename} {orcSurnamePrefix}-{orcSurname}"] }
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
