import * as AbilityModels from "../models/abilities";

export namespace Abilities {
    export const AbilityList: { [index: string]: AbilityModels.Ability } = {};

    export const Strength: AbilityModels.Ability = { code: "STR", name: "Strength" };
    export const Dexterity: AbilityModels.Ability = { code: "DEX", name: "Dexterity" };
    export const Constitution: AbilityModels.Ability = { code: "CON", name: "Constitution" };
    export const Wisdom: AbilityModels.Ability = { code: "WIS", name: "Wisdom" };
    export const Intelligence: AbilityModels.Ability = { code: "INT", name: "Intelligence" };
    export const Charisma: AbilityModels.Ability = { code: "CHA", name: "Charisma" };

    AbilityList[Strength.code] = Strength;
    AbilityList[Dexterity.code] = Dexterity;
    AbilityList[Constitution.code] = Constitution;
    AbilityList[Wisdom.code] = Wisdom;
    AbilityList[Intelligence.code] = Intelligence;
    AbilityList[Charisma.code] = Charisma;
};
