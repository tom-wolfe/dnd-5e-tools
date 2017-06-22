/* cSpell:disable */

import { DragonSyllables } from "./common/dragon-syllables";
import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const Dragonborn: Races.NameDefinition = {
    name: "Dragonborn",
    formats: [
        "{syllable}{syllable}",
        "{syllable}{syllable}{syllable}",
    ],
    parts: {
        syllable: DragonSyllables.syllable,
    }
};

NameList[Dragonborn.name] = Dragonborn;
