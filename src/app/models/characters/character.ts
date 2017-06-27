import * as Data from "app/data/";
import * as Descriptors from "app/shared/descriptors";
import * as _ from "lodash";

import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Classes from "../classes";
import * as Equipment from "../equipment";
import { Feature } from "../features";
import * as Features from "../features";
import { FeatureType } from "../features/feature-type";
import * as Languages from "../languages";
import { ProficiencyType } from "../proficiency-type";
import * as Races from "../races";
import { Background } from "./background";
import { Level } from "./level";

export class Character {
    readonly ageDescriptor: Descriptors.AgeDescriptor = new Descriptors.AgeDescriptor();
    readonly heightDescriptor: Descriptors.HeightDescriptor = new Descriptors.HeightDescriptor();
    readonly weightDescriptor: Descriptors.WeightDescriptor = new Descriptors.WeightDescriptor();

    readonly abilities: Abilities.AbilityScores = new Abilities.CharacterAbilityScores(this);
    age: number;
    alignment: string;
    background: Background;
    readonly baseAbilities: Abilities.AbilityScores = new Abilities.BasicAbilityScores();
    baseArmorClass = 10;
    baseHitPoints = 10;
    bond: string;
    class: Classes.Class;
    classArchetype: Classes.Archetype;
    readonly damageResistances: Equipment.DamageType[] = [];
    readonly features: Features.Feature[] = [];
    flaw: string;
    gender: string;
    height: number;
    hitDie = 8;
    ideal: string;
    readonly languages: Languages.Language[] = [];
    level: Level;
    name: string;
    personalityTrait: string;
    race: Races.Race;
    readonly senses: Attributes.Senses = new Attributes.CharacterSenses(this);
    readonly skillProficiencies: Abilities.SkillProficiency[] = [];
    readonly speed: Attributes.Speed = new Attributes.CharacterSpeed(this);
    subrace: Races.Subrace;
    readonly weaponProficiencies: Equipment.Weapon[] = [];
    weight: number;

    get armorProficiencyString(): string {
        // TODO: Implement.
        return "";
    }

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

    get activeFeatures(): Feature[] {
        return this.features.filter(feat => feat.type === FeatureType.Active);
    }

    get otherFeatures(): Feature[] {
        return this.features.filter(feat => feat.type !== FeatureType.Active);
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

    get damageResistancesString(): string {
        return _.join(this.damageResistances.map(x => Equipment.DamageType[x].toString()), ", ");
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

    get heightDescription(): string {
        const h = (this.height || 0);
        const inches = h % 12;
        const feet = (h - inches) / 12;
        return `${feet}'${inches}"`;
    }

    get heightClassification(): string {
        return this.heightDescriptor.describe(this);
    }

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

    get languagesString(): string {
        return _.join(this.languages.map(x => x.name).sort(), ", ");
    }

    get otherProficiencyString(): string {
        // TODO: Implement.
        return "";
    }

    get raceDescription(): string {
        if (!this.subrace) {
            return `${this.race.name}`;
        } else {
            return `${this.race.name} (${this.subrace.name})`;
        }
    }

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

    get toolProficiencyString(): string {
        // TODO: Implement.
        return "";
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

    get weaponProficiencyString(): string {
        return _.join(this.weaponProficiencies.map(w => w.name).sort(), ", ");
    }

    getSkillModifier(skill: Abilities.Skill): number {
        let retVal = 0;

        const proficiencyBonus = this.level.proficiencyBonus;

        retVal += this.abilities.getModifier(skill.ability.code);
        const prof = this.skillProficiencies.filter((sp) => sp.skill === skill);
        if (prof.length > 0) {
            switch (prof[0].type) {
                case ProficiencyType.Proficient: retVal += proficiencyBonus; break;
                case ProficiencyType.JackOfAllTrades: retVal += Math.floor(proficiencyBonus / 2); break;
                case ProficiencyType.Expert: retVal += proficiencyBonus * 2; break;
            }
        }
        return retVal;
    }
};
