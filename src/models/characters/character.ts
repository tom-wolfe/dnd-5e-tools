import * as Data from "../../data/";
import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";
import * as Languages from "../languages";
import * as Races from "../races";

import * as _ from "lodash";

export class Character {
    abilities: Abilities.AbilityScores = new Abilities.CharacterAbilityScores(this);
    age: number;
    alignment: string;
    baseAbilities: Abilities.AbilityScores = new Abilities.BasicAbilityScores();
    gender: string;
    height: number;
    race: Races.Race;
    senses: Attributes.Senses = new Attributes.CharacterSenses(this);
    skillProficiencies: Abilities.SkillProficiency[] = [];
    speed: Attributes.Speed = new Attributes.CharacterSpeed(this);
    subrace: Races.Subrace;
    weight: number;

    get alignmentDescription() {
        return Data.Alignments[this.alignment];
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

    get languages(): Languages.Language[] {
        if (this.subrace && this.subrace.languages) {
            return _.union(this.race.languages.known, this.subrace.languages.known);
        } else {
            return this.race.languages.known;
        }
    };

    get racialFeatures(): Features.Feature[] {
        if (this.subrace && this.subrace.features) {
            return _.union(this.race.features, this.subrace.features);
        } else {
            return this.race.features;
        }
    };

    getSkillModifier(skill: Abilities.Skill): number {
        let retVal = 0;

        // TODO: Set proficiency bonus.

        retVal += this.abilities.getModifier(skill.ability.code);
        const prof = this.skillProficiencies.filter((sp) => sp.skill === skill);
        if (prof.length > 0) {
            if (prof[0].proficiencyType === "proficient") {
                retVal += 5; 
            };
        }
        return retVal;
    }
};
