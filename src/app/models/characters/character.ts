import * as _ from "lodash";

import * as Data from "../../data/";
import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Classes from "../classes";
import * as Features from "../features";
import * as Languages from "../languages";
import * as Races from "../races";
import { Background } from "./background";
import { Level } from "./level";

export class Character {
    abilities: Abilities.AbilityScores = new Abilities.CharacterAbilityScores(this);
    age: number;
    alignment: string;
    background: Background;
    baseAbilities: Abilities.AbilityScores = new Abilities.BasicAbilityScores();
    baseArmorClass = 10;
    baseHitPoints = 10;
    bond: string;
    class: Classes.Class;
    classArchetype: Classes.Archetype;
    flaw: string;
    gender: string;
    height: number;
    hitDie = 8;
    ideal: string;
    level: Level;
    name: string;
    otherLanguages: Languages.Language[] = [];
    personalityTrait: string;
    race: Races.Race;
    senses: Attributes.Senses = new Attributes.CharacterSenses(this);
    skillProficiencies: Abilities.SkillProficiency[] = [];
    speed: Attributes.Speed = new Attributes.CharacterSpeed(this);
    subrace: Races.Subrace;
    weight: number;

    get alignmentDescription(): string {
        return Data.Alignments[this.alignment];
    }

    get equippedArmor(): string {
        return "natural armor";
    }

    get armorClass(): number {
        return this.baseArmorClass + this.abilities.getModifier("DEX");
    }

    get genderDescription(): string {
        if (!this.gender) { return "Unknown"; }
        return Data.Genders[this.gender] || "Unknown";
    }

    get heightString(): string {
        const h = (this.height || 0);
        const inches = h % 12;
        const feet = (h - inches) / 12;
        return `${feet}'${inches}"`;
    }

    get features(): Features.Feature[] {
        // TODO: Add background features.
        return this.racialFeatures;
    }

    get hitPoints(): number {
        return (this.baseHitPoints || 0) + (this.abilities.getModifier("CON") * this.level.number);
    }

    get hitPointFormula(): string {
        const conBonus = this.abilities.getModifier("CON") * this.level.number;
        const conSign = (conBonus >= 0) ? "+" : "-";
        return `${this.level.number}d${this.hitDie} ${conSign} ${Math.abs(conBonus)}`;
    }

    get languages(): Languages.Language[] {
        if (this.subrace && this.subrace.languages) {
            return _.union(this.race.languages.known, this.subrace.languages.known, this.otherLanguages);
        } else {
            return _.union(this.race.languages.known, this.otherLanguages);
        }
    };

    get racialFeatures(): Features.Feature[] {
        if (this.subrace && this.subrace.features) {
            return _.union(this.race.features, this.subrace.features);
        } else {
            return this.race.features || [];
        }
    };

    getSkillModifier(skill: Abilities.Skill): number {
        let retVal = 0;

        const proficiencyBonus = this.level.proficiencyBonus;

        retVal += this.abilities.getModifier(skill.ability.code);
        const prof = this.skillProficiencies.filter((sp) => sp.skill === skill);
        if (prof.length > 0) {
            switch (prof[0].proficiencyType) {
                case "proficient": retVal += proficiencyBonus; break;
                case "jackOfAllTrades": retVal += Math.floor(proficiencyBonus / 2); break;
                case "expert": retVal += proficiencyBonus * 2; break;
            }
        }
        return retVal;
    }
};
