import * as Names from "app/models/names";
import { HumanNames } from "./common/human-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Human: Names.NameDefinition = {
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
