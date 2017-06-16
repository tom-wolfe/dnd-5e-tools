import * as Data from "../../data/";
import * as Races from "../races";
import * as Abilities from "../abilities";
import * as Attributes from "../attributes";
import * as Features from "../features";

import * as _ from "lodash";

export class Character {
    baseAbilities: Abilities.AbilityScores = new Abilities.BasicAbilityScores();
    abilities: Abilities.AbilityScores = new Abilities.CharacterAbilityScores(this);
    race: Races.Race;
    subrace: Races.Subrace;
    speed: Attributes.Speed = new Attributes.CharacterSpeed(this);
    get racialFeatures(): Features.Feature[] {
        if (this.subrace && this.subrace.features)  {
            return _.union(this.race.features, this.subrace.features);
        } else {
            return this.race.features;
        }
    };
    alignment: string;
    get alignmentDescription() {
        return Data.Alignments[this.alignment];
    };
};