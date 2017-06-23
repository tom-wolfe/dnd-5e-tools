import * as Races from "../../models/races";
import { DragonSyllables } from "./common/dragon-syllables";
import { NameList } from "./name-list";

/* cSpell:disable */

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
