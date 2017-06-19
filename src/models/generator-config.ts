import * as Abilities from "./abilities";
import * as Classes from "./classes";
import * as Races from "./races";
import * as Characters from "./characters";

export class GeneratorConfig {
    background: Characters.Background = null;
    class: Classes.Class = null;
    minLevel = 1;
    maxLevel = 5;
    primaryAbility: Abilities.Ability = null;
    race: Races.Race = null;
    secondaryAbility: Abilities.Ability = null;
    subrace: Races.Subrace = null;
};
