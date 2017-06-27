import * as LanguageModels from "../models/languages";

export namespace Languages {
    export const LanguageList: LanguageModels.Language[] = [];

    export const Aarakocra: LanguageModels.Language = new LanguageModels.Language("Aarakocra");
    export const Abyssal: LanguageModels.Language = new LanguageModels.Language("Abyssal");
    export const Celestial: LanguageModels.Language = new LanguageModels.Language("Celestial");
    export const Common: LanguageModels.Language = new LanguageModels.Language("Common");
    export const DeepSpeech: LanguageModels.Language = new LanguageModels.Language("Deep Speech");
    export const Draconic: LanguageModels.Language = new LanguageModels.Language("Draconic");
    export const Dwarvish: LanguageModels.Language = new LanguageModels.Language("Dwarvish");
    export const Elvish: LanguageModels.Language = new LanguageModels.Language("Elvish");
    export const Giant: LanguageModels.Language = new LanguageModels.Language("Giant");
    export const Gnomish: LanguageModels.Language = new LanguageModels.Language("Gnomish");
    export const Goblin: LanguageModels.Language = new LanguageModels.Language("Goblin");
    export const Halfling: LanguageModels.Language = new LanguageModels.Language("Halfling");
    export const Infernal: LanguageModels.Language = new LanguageModels.Language("Infernal");
    export const Orc: LanguageModels.Language = new LanguageModels.Language("Orc");
    export const Primordial: LanguageModels.Language = new LanguageModels.Language("Primordial");
    export const Sylvan: LanguageModels.Language = new LanguageModels.Language("Sylvan");
    export const Undercommon: LanguageModels.Language = new LanguageModels.Language("Undercommon");

    LanguageList.push(Aarakocra);
    LanguageList.push(Abyssal);
    LanguageList.push(Celestial);
    LanguageList.push(Common);
    LanguageList.push(DeepSpeech);
    LanguageList.push(Draconic);
    LanguageList.push(Dwarvish);
    LanguageList.push(Elvish);
    LanguageList.push(Giant);
    LanguageList.push(Gnomish);
    LanguageList.push(Goblin);
    LanguageList.push(Halfling);
    LanguageList.push(Infernal);
    LanguageList.push(Orc);
    LanguageList.push(Primordial);
    LanguageList.push(Sylvan);
    LanguageList.push(Undercommon);
};
