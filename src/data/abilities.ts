import * as AbilityModels from "../models/abilities";

export const Abilities: { [index: string]: AbilityModels.Ability } = {};

export const Strength: AbilityModels.Ability = { code: "STR", name: "Strength" };
export const Dexterity: AbilityModels.Ability = { code: "DEX", name: "Dexterity" };
export const Constitution: AbilityModels.Ability = { code: "CON", name: "Constitution" };
export const Wisdom: AbilityModels.Ability = { code: "WIS", name: "Wisdom" };
export const Intelligence: AbilityModels.Ability = { code: "INT", name: "Intelligence" };
export const Charisma: AbilityModels.Ability = { code: "CHA", name: "Charisma" };

Abilities[Strength.code] = Strength;
Abilities[Dexterity.code] = Dexterity;
Abilities[Constitution.code] = Constitution;
Abilities[Wisdom.code] = Wisdom;
Abilities[Intelligence.code] = Intelligence;
Abilities[Charisma.code] = Charisma;
