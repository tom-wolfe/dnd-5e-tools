import { AbilityScoreGenerator } from "./ability-score-generator";
import { NumberGenerator } from "./number-generator";
import { Character } from "../models/character";
import { StatMods } from "../models/race";
import * as Data from "../data/";

export class CharacterGenerator {
    abGen = new AbilityScoreGenerator();
    numGen = new NumberGenerator();

    generateCharacter(): Character {
        const character = new Character();
        this.randomizeAbilities(character);
        this.randomizeRace(character);
        this.randomizeRaceBonuses(character);
        this.randomizeAlignment(character);
        return character;
    }

    randomizeAbilities(character: Character) {
        character.baseAbilities.strength = this.abGen.generateScore();
        character.baseAbilities.dexterity = this.abGen.generateScore();
        character.baseAbilities.constitution = this.abGen.generateScore();
        character.baseAbilities.wisdom = this.abGen.generateScore();
        character.baseAbilities.intelligence = this.abGen.generateScore();
        character.baseAbilities.charisma = this.abGen.generateScore();
    }

    randomizeRace(character: Character) {
        const raceNum = this.numGen.rollDie(Data.Races.length) - 1;
        character.race = Data.Races[raceNum];

        if (character.race.subraces && character.race.subraces.length > 0) {
            const subraceNum = this.numGen.rollDie(character.race.subraces.length) - 1;
            character.subrace = character.race.subraces[subraceNum];
        } else {
            character.subrace = undefined;
        }
    }

    randomizeRaceBonuses(character: Character) {
        // Figure out the combined stat bonuses of the race and sub race.
        const statMods: StatMods = {};
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

    randomizeAlignment(character: Character) {
        const alignments = Object.keys(Data.Alignments);
        const alignmentNum = this.numGen.rollDie(alignments.length) - 1;
        character.alignment = alignments[alignmentNum];
    }
};
