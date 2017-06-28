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
import * as Proficiencies from "../proficiencies";
import * as Races from "../races";
import { Background } from "./background";
import { Level } from "./level";

export class Character {
    readonly ageDescriptor: Descriptors.AgeDescriptor = new Descriptors.AgeDescriptor();
    readonly heightDescriptor: Descriptors.HeightDescriptor = new Descriptors.HeightDescriptor();
    readonly weaponDescriptor: Descriptors.WeaponDescriptor = new Descriptors.WeaponDescriptor(this);
    readonly weightDescriptor: Descriptors.WeightDescriptor = new Descriptors.WeightDescriptor();

    readonly abilities: Abilities.AbilityScores = new Abilities.CharacterAbilityScores(this);
    age: number;
    alignment: string;
    readonly armorProficiencies: Proficiencies.Proficiency<Equipment.ArmorType>[] = [];
    background: Background;
    readonly baseAbilities: Abilities.AbilityScores = new Abilities.BasicAbilityScores();
    baseArmorClass = 10;
    baseHitPoints = 10;
    bond: string;
    class: Classes.Class;
    classArchetype: Classes.Archetype;
    readonly damageResistances: Equipment.DamageType[] = [];
    readonly equipment: Equipment.Item[] = [];
    equippedArmor: Equipment.Armor;
    equippedShield: Equipment.Armor;
    readonly features: Features.Feature[] = [];
    flaw: string;
    gender: string;
    height: number;
    hitDie = 8;
    ideal: string;
    readonly languages: Languages.Language[] = [];
    level: Level;
    name: string;
    readonly otherProficiencies: Proficiencies.Proficiency<Equipment.Item>[] = [];
    personalityTrait: string;
    race: Races.Race;
    savingThrowProficiencies: string[] = [];
    readonly senses: Attributes.Senses = new Attributes.CharacterSenses(this);
    readonly skillProficiencies: Proficiencies.Proficiency<Abilities.Skill>[] = [];
    readonly speed: Attributes.Speed = new Attributes.CharacterSpeed(this);
    subrace: Races.Subrace;
    readonly toolProficiencies: Proficiencies.Proficiency<Equipment.Item>[] = [];
    readonly weaponProficiencies: Proficiencies.Proficiency<Equipment.Weapon>[] = [];
    weight: number;

    get armorProficiencyString(): string {
        return _.join(this.armorProficiencies.map(x => Equipment.ArmorType[x.thing].toString()), ", ") || "[None]";
    }

    get actions(): Feature[] {
        return _.union(this.activeFeatures, this.weaponAttacks);
    }

    get activeFeatures(): Feature[] {
        return this.features.filter(feat => feat.type === FeatureType.Active);
    }

    get ageClassification(): string {
        return this.ageDescriptor.describe(this);
    }

    get ageDescription(): string {
        const a = (this.age || 0);
        return `${a} years old`;
    }

    get alignmentDescription(): string {
        return Data.Alignments[this.alignment];
    }

    get armorClass(): number {
        const dexMod = this.abilities.getModifier("DEX");
        let ac = this.baseArmorClass + dexMod;
        if (this.equippedArmor) {
            ac = this.equippedArmor.ac;
            if (this.equippedArmor.plusDex) {
                switch (this.equippedArmor.type) {
                    case Equipment.ArmorType.Light:
                        ac += this.abilities.getModifier("DEX");
                        break;
                    case Equipment.ArmorType.Medium:
                        ac += Math.min(this.abilities.getModifier("DEX"), 2);
                        break;
                }
            }
        }
        if (this.equippedShield) {
            ac += this.equippedShield.ac;
        }
        return ac;
    }

    get charisma(): number {
        return this.abilities.get("CHA");
    }

    get charismaMod(): string {
        return this.abilities.getModifierString("CHA");
    }

    get constitution(): number {
        return this.abilities.get("CON");
    }

    get constitutionMod(): string {
        return this.abilities.getModifierString("CON");
    }

    get damageResistancesString(): string {
        return _.join(this.damageResistances.map(x => Equipment.DamageType[x].toString()), ", ") || "[None]";
    }

    get dexterity(): number {
        return this.abilities.get("DEX");
    }

    get dexterityMod(): string {
        return this.abilities.getModifierString("DEX");
    }

    get equipmentString(): string {
        return _.join(this.equipment.map(x => x.name).sort(), ", ") || "[None]";
    }

    get equippedArmorString(): string {
        let armor = this.equippedArmor ? this.equippedArmor.name : "natural armor";
        if (this.equippedShield) {
            armor += " + " + this.equippedShield.name;
        }
        return armor;
    }

    get genderDescription(): string {
        if (!this.gender) { return "Unknown"; }
        return Data.Genders[this.gender].name || "Unknown";
    }

    get genderIconClass(): string {
        if (!this.gender) { return "fa-genderless"; }
        return Data.Genders[this.gender].iconClass || "Unknown";
    }

    get heightClassification(): string {
        return this.heightDescriptor.describe(this);
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

    get intelligence(): number {
        return this.abilities.get("INT");
    }

    get intelligenceMod(): string {
        return this.abilities.getModifierString("INT");
    }

    get languagesString(): string {
        return _.join(this.languages.map(x => x.name).sort(), ", ") || "[None]";
    }

    get otherFeatures(): Feature[] {
        return this.features.filter(feat => feat.type !== FeatureType.Active);
    }

    get otherProficiencyString(): string {
        return _.join(this.otherProficiencies.map(t => t.thing.name), ", ") || "[None]";
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

    get raceDescription(): string {
        if (!this.subrace) {
            return `${this.race.name}`;
        } else {
            return `${this.race.name} (${this.subrace.name})`;
        }
    }

    get savingThrowProficiencyString(): string {
        const format = (modifier: number) => (modifier >= 0) ? "+" + modifier : modifier.toString();
        const profs = this.savingThrowProficiencies.map(x => {
            const name = Data.Abilities.AbilityList[x].name;
            const mod = this.abilities.getModifier(x) + this.level.proficiencyBonus;
            return `${name} ${format(mod)}`;
        }).sort();
        return _.join(profs, ", ") || "[None]";
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
        const profs = this.skillProficiencies.map(p => `${p.thing.name} ${format(this.getSkillModifier(p.thing))}`).sort();
        return _.join(profs, ", ");
    }

    get strength(): number {
        return this.abilities.get("STR");
    }

    get strengthMod(): string {
        return this.abilities.getModifierString("STR");
    }

    get toolProficiencyString(): string {
        return _.join(this.toolProficiencies.map(t => t.thing.name), ", ") || "[None]";
    }

    get walkSpeedDescription(): string {
        return this.speed.walk + " ft.";
    }

    get weaponAttacks(): Feature[] {
        const retVal: Feature[] = [];
        this.equipment.filter(e => e instanceof Equipment.Weapon).forEach((weapon: Equipment.Weapon) => {
            retVal.push({
                name: weapon.name,
                description: this.weaponDescriptor.describe(weapon),
                type: FeatureType.Active
            });
        })
        return retVal;
    }

    get weaponProficiencyString(): string {
        return _.join(this.weaponProficiencies.map(w => w.thing.name).sort(), ", ") || "[None]";
    }

    get weightDescription(): string {
        return `${this.weight || 0} lbs.`;
    }

    get weightClassification(): string {
        return this.weightDescriptor.describe(this);
    }

    get wisdom(): number {
        return this.abilities.get("WIS");
    }

    get wisdomMod(): string {
        return this.abilities.getModifierString("WIS");
    }

    getSkillModifier(skill: Abilities.Skill): number {
        let retVal = 0;

        const proficiencyBonus = this.level.proficiencyBonus;

        retVal += this.abilities.getModifier(skill.ability.code);
        const prof = this.skillProficiencies.filter((sp) => sp.thing === skill);
        if (prof.length > 0) {
            switch (prof[0].type) {
                case Proficiencies.ProficiencyType.Proficient: retVal += proficiencyBonus; break;
                case Proficiencies.ProficiencyType.JackOfAllTrades: retVal += Math.floor(proficiencyBonus / 2); break;
                case Proficiencies.ProficiencyType.Expert: retVal += proficiencyBonus * 2; break;
            }
        }
        return retVal;
    }
};
