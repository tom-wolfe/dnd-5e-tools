import * as Abilities from "./abilities";
import * as Characters from "./characters";
import * as Classes from "./classes";
import * as Races from "./races";

export class GeneratorConfig {
    background: Characters.Background = null;
    class: Classes.Class = null;
    classArchetype: Classes.Archetype = null;
    minLevel = 1;
    maxLevel = 5;
    name: Races.NameDefinition = null;
    primaryAbility: Abilities.Ability = null;
    race: Races.Race = null;
    secondaryAbility: Abilities.Ability = null;
    subrace: Races.Subrace = null;
};
