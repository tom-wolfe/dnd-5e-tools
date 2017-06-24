import * as Abilities from "../models/abilities";
import * as Characters from "../models/characters";
import * as Classes from "../models/classes";
import * as Races from "../models/races";

export class CharacterGeneratorConfig {
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
