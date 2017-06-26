import * as _ from "lodash";

import * as Data from "../../data/";
import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Classes from "../classes";
import * as Descriptors from "app/shared/descriptors";
import * as Features from "../features";
import * as Languages from "../languages";
import * as Races from "../races";
import { Background } from "./background";
import { Level } from "./level";

export class Character {
    ageDescriptor: Descriptors.AgeDescriptor = new Descriptors.AgeDescriptor();
    heightDescriptor: Descriptors.HeightDescriptor = new Descriptors.HeightDescriptor();
    weightDescriptor: Descriptors.WeightDescriptor = new Descriptors.WeightDescriptor();

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

    get strength(): number {
        return this.abilities.get("STR");
    }

    get strengthMod(): string {
        return this.abilities.getModifierString("STR");
    }

    get dexterity(): number {
        return this.abilities.get("DEX");
    }

    get dexterityMod(): string {
        return this.abilities.getModifierString("DEX");
    }

    get constitution(): number {
        return this.abilities.get("CON");
    }

    get constitutionMod(): string {
        return this.abilities.getModifierString("CON");
    }

    get intelligence(): number {
        return this.abilities.get("INT");
    }

    get intelligenceMod(): string {
        return this.abilities.getModifierString("INT");
    }

    get wisdom(): number {
        return this.abilities.get("WIS");
    }

    get wisdomMod(): string {
        return this.abilities.getModifierString("WIS");
    }

    get charisma(): number {
        return this.abilities.get("CHA");
    }

    get charismaMod(): string {
        return this.abilities.getModifierString("CHA");
    }

    get ageDescription(): string {
        const a = (this.age || 0);
        return `${a} years old`;
    }

    get ageClassification(): string {
        return this.ageDescriptor.describe(this);
    }

    get alignmentDescription(): string {
        return Data.Alignments[this.alignment];
    }

    get armorClass(): number {
        return this.baseArmorClass + this.abilities.getModifier("DEX");
    }

    get equippedArmor(): string {
        return "natural armor";
    }

    get genderDescription(): string {
        if (!this.gender) { return "Unknown"; }
        return Data.Genders[this.gender].name || "Unknown";
    }

    get genderIconClass(): string {
        if (!this.gender) { return "fa-genderless"; }
        return Data.Genders[this.gender].iconClass || "Unknown";
    }

    get hitPoints(): number {
        return (this.baseHitPoints || 0) + (this.abilities.getModifier("CON") * this.level.number);
    }

    get hitPointFormula(): string {
        const conBonus = this.abilities.getModifier("CON") * this.level.number;
        const conSign = (conBonus >= 0) ? "+" : "-";
        return `${this.level.number}d${this.hitDie} ${conSign} ${Math.abs(conBonus)}`;
    }

    get features(): Features.Feature[] {
        // TODO: Add background features.
        return this.racialFeatures;
    }

    get heightDescription(): string {
        const h = (this.height || 0);
        const inches = h % 12;
        const feet = (h - inches) / 12;
        return `${feet}'${inches}"`;
    }

    get heightClassification(): string {
        return this.heightDescriptor.describe(this);
    }

    get languages(): Languages.Language[] {
        if (this.subrace && this.subrace.languages) {
            return _.union(this.race.languages.known, this.subrace.languages.known, this.otherLanguages);
        } else {
            return _.union(this.race.languages.known, this.otherLanguages);
        }
    };

    get otherSpeedsDescription(): string {
        const pushSpeed = (speed: string, speeds: string[]) => {
            const val = this.speed[speed] || 0;
            if (val > 0) { speeds.push(`${speed} ${val} ft.`); }
        };

        const speeds: string[] = [];
        pushSpeed("climb", speeds);
        pushSpeed("fly", speeds);
        pushSpeed("swim", speeds);

        if (speeds.length === 0) { return ""; } else { return `, ${_.join(speeds, ", ")}`; }
    }

    get passivePerception(): number {
        return 10 + this.getSkillModifier(Data.Skills.Perception);
    }

    get languageString(): string {
        return _.join(this.languages.map(x => x.name), ", ");
    }

    get raceDescription(): string {
        if (!this.subrace) {
            return `${this.race.name}`;
        } else {
            return `${this.race.name} (${this.subrace.name})`;
        }
    }

    get racialFeatures(): Features.Feature[] {
        if (this.subrace && this.subrace.features) {
            return _.union(this.race.features, this.subrace.features);
        } else {
            return this.race.features || [];
        }
    };

    get sensesString(): string {
        const append = (input: string, sense: string): string => {
            let temp = 0;
            if ((temp = this.senses[sense.toLowerCase()] || 0) > 0) {
                if (input.trim().length > 0) { input += ", "; }
                return `${sense} ${this.senses[sense.toLowerCase()]} ft.`;
            }
            return input;
        }

        if (!this.senses) { return ""; }
        let output = "";
        output = append(output, "Darkvision");
        output = append(output, "Blindsight");
        output = append(output, "Tremorsense");
        output = append(output, "Truesight");
        return output;
    }

    get skillString(): string {
        const format = (modifier: number) => (modifier >= 0) ? "+" + modifier : modifier.toString();
        const profs = this.skillProficiencies.map(p => `${p.skill.name} ${format(this.getSkillModifier(p.skill))}`).sort();
        return _.join(profs, ", ");
    }

    get walkSpeedDescription(): string {
        return this.speed.walk + " ft.";
    }

    get weightDescription(): string {
        const w = (this.weight || 0);
        return `${w} lbs.`;
    }

    get weightClassification(): string {
        return this.weightDescriptor.describe(this);
    }

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
