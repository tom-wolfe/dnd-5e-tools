import * as Abilities from "app/models/abilities";
import * as Characters from "app/models/characters";
import * as Classes from "app/models/classes";
import * as Names from "app/models/names";
import * as Races from "app/models/races";

export class CharacterGeneratorConfig {
    background: Characters.Background = null;
    class: Classes.Class = null;
    classArchetype: Classes.Archetype = null;
    minLevel = 1;
    maxLevel = 5;
    name: Names.NameDefinition = null;
    primaryAbility: Abilities.Ability = null;
    race: Races.Race = null;
    secondaryAbility: Abilities.Ability = null;
    subrace: Races.Subrace = null;
};
