import * as AbilityModels from "../models/abilities";

export namespace Abilities {
    export const AbilityList: { [index: string]: AbilityModels.Ability } = {};

    export const Strength: AbilityModels.Ability = new AbilityModels.Ability("STR", "Strength");
    export const Dexterity: AbilityModels.Ability = new AbilityModels.Ability("DEX", "Dexterity");
    export const Constitution: AbilityModels.Ability = new AbilityModels.Ability("CON", "Constitution");
    export const Wisdom: AbilityModels.Ability = new AbilityModels.Ability("WIS", "Wisdom");
    export const Intelligence: AbilityModels.Ability = new AbilityModels.Ability("INT", "Intelligence");
    export const Charisma: AbilityModels.Ability = new AbilityModels.Ability("CHA", "Charisma");

    AbilityList[Strength.code] = Strength;
    AbilityList[Dexterity.code] = Dexterity;
    AbilityList[Constitution.code] = Constitution;
    AbilityList[Wisdom.code] = Wisdom;
    AbilityList[Intelligence.code] = Intelligence;
    AbilityList[Charisma.code] = Charisma;
};
