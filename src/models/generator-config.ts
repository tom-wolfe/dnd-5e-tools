import * as Abilities from "./abilities";
import * as Races from "./races";

export class GeneratorConfig {
    race: Races.Race = null;
    subrace: Races.Subrace = null;
    primaryAbility: Abilities.Ability = null;
    secondaryAbility: Abilities.Ability = null;
    minLevel = 1;
    maxLevel = 5;
};
