import * as Names from "app/models/names";
import { OrcNames } from "./common/orc-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Orc: Names.NameDefinition = {
    name: "Orc",
    formats: [
        { name: "Forename Surname", formats: ["{forename} {surnamePrefix}-{surname}"] }
    ],
    parts: {
        forename: OrcNames.forename,
        surnamePrefix: OrcNames.surnamePrefix,
        surname: OrcNames.surname,
    }
};

NameList[Orc.name] = Orc;
