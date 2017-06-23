import * as Races from "../../models/races";
import { HumanNames } from "./common/human-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Human: Races.NameDefinition = {
    name: "Human",
    formats: [
        "{forename} {surnamePrefix}{surnameSuffix}"
    ],
    parts: {
        forename: HumanNames.forename,
        surnamePrefix: HumanNames.surnamePrefix,
        surnameSuffix: HumanNames.surnameSuffix
    }
};

NameList[Human.name] = Human;
