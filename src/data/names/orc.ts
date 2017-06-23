import * as Races from "../../models/races";
import { OrcNames } from "./common/orc-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Orc: Races.NameDefinition = {
    name: "Orc",
    formats: [
        "{forename} {surnamePrefix}-{surname}"
    ],
    parts: {
        forename: OrcNames.forename,
        surnamePrefix: OrcNames.surnamePrefix,
        surname: OrcNames.surname,
    }
};

NameList[Orc.name] = Orc;
