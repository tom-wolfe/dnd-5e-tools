/* cSpell:disable */

import { NameList } from "./name-list";
import { HumanNames } from "./common/human-names";

import * as Races from "../../models/races";

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
