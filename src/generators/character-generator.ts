import { AbilityScoreGenerator } from "./ability-score-generator";
import { NumberGenerator } from "./number-generator";

import * as Abilities from "../models/abilities";
import * as Characters from "../models/characters";
import * as Data from "../data/";
import * as Races from "../models/races";

export class CharacterGenerator {
    abGen = new AbilityScoreGenerator();
    numGen = new NumberGenerator();

    generateCharacter(): Characters.Character {
        const character = new Characters.Character();
        this.randomizeAbilities(character);
        this.randomizeRace(character);
        this.randomizeRaceBonuses(character);
        this.randomizeAlignment(character);
        return character;
    }

    randomizeAbilities(character: Characters.Character) {
        character.baseAbilities.strength = this.abGen.generateScore();
        character.baseAbilities.dexterity = this.abGen.generateScore();
        character.baseAbilities.constitution = this.abGen.generateScore();
        character.baseAbilities.wisdom = this.abGen.generateScore();
        character.baseAbilities.intelligence = this.abGen.generateScore();
        character.baseAbilities.charisma = this.abGen.generateScore();
    }

    randomizeRace(character: Characters.Character) {
        const raceKeys = Object.keys(Data.Races);
        const raceNum = this.numGen.rollDie(raceKeys.length) - 1;
        character.race = Data.Races[raceKeys[raceNum]];

        if (character.race.subraces && character.race.subraces.length > 0) {
            const subraceNum = this.numGen.rollDie(character.race.subraces.length) - 1;
            character.subrace = character.race.subraces[subraceNum];
        } else {
            character.subrace = undefined;
        }
    }

    randomizeRaceBonuses(character: Characters.Character) {
        // Figure out the combined stat bonuses of the race and sub race.
        const statMods: Abilities.StatMods = {};
        Object.assign(statMods, character.race.statMods);

        statMods.additionalPoints = (character.race.statMods.additionalPoints || 0);
        if (character.subrace) {
            const addPoints = statMods.additionalPoints + (character.subrace.statMods.additionalPoints || 0);
            Object.assign(statMods, character.subrace.statMods);
            statMods.additionalPoints = addPoints;
        }

        if (statMods.additionalPoints === 0) { return; }

        // Remove stats that already have bonuses.
        const statList = ["strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma"].filter((value) => {
            return !statMods[value] || statMods[value] < 1;
        });

        // Increment random stats.
        while (statMods.additionalPoints > 0) {
            const statIndex = this.numGen.rollDie(statList.length) - 1;
            const stat = statList[statIndex];
            character.race.statMods[stat] = (character.race.statMods[stat] || 0) + 1;
            statList.splice(statIndex, 1);
            statMods.additionalPoints -= 1;
        }

        console.log(character.race.statMods);
    }

    randomizeAlignment(character: Characters.Character) {
        const alignments = Object.keys(Data.Alignments);
        const alignmentNum = this.numGen.rollDie(alignments.length) - 1;
        character.alignment = alignments[alignmentNum];
    }
};
