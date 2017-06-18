import * as Data from "../../data/";
import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";
import * as Languages from "../languages";
import * as Races from "../races";

import * as _ from "lodash";

export class Character {
    baseAbilities: Abilities.AbilityScores = new Abilities.BasicAbilityScores();
    abilities: Abilities.AbilityScores = new Abilities.CharacterAbilityScores(this);
    race: Races.Race;
    gender: string;
    get genderDescription(): string {
        if (!this.gender) { return "Unknown"; }
        return Data.Genders[this.gender] || "Unknown";
    }
    subrace: Races.Subrace;
    height: number;
    weight: number;
    age: number;
    speed: Attributes.Speed = new Attributes.CharacterSpeed(this);
    senses: Attributes.Senses = new Attributes.CharacterSenses(this);
    get heightString(): string {
        const h = (this.height || 0);
        const inches = h % 12;
        const feet = (h - inches) / 12;
        return `${feet}'${inches}"`;
    }
    get racialFeatures(): Features.Feature[] {
        if (this.subrace && this.subrace.features) {
            return _.union(this.race.features, this.subrace.features);
        } else {
            return this.race.features;
        }
    };
    get languages(): Languages.Language[] {
        if (this.subrace && this.subrace.languages) {
            return _.union(this.race.languages.known, this.subrace.languages.known);
        } else {
            return this.race.languages.known;
        }
    };
    alignment: string;
    get alignmentDescription() {
        return Data.Alignments[this.alignment];
    };

};
