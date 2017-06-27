import * as LanguageModels from "../models/languages";

export namespace Languages {
    export const LanguageList: { [index: string]: LanguageModels.Language } = {};

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

    // TODO: Change to list.

    LanguageList[Aarakocra.name] = Aarakocra;
    LanguageList[Abyssal.name] = Abyssal;
    LanguageList[Celestial.name] = Celestial;
    LanguageList[Common.name] = Common;
    LanguageList[DeepSpeech.name] = DeepSpeech;
    LanguageList[Draconic.name] = Draconic;
    LanguageList[Dwarvish.name] = Dwarvish;
    LanguageList[Elvish.name] = Elvish;
    LanguageList[Giant.name] = Giant;
    LanguageList[Gnomish.name] = Gnomish;
    LanguageList[Goblin.name] = Goblin;
    LanguageList[Halfling.name] = Halfling;
    LanguageList[Infernal.name] = Infernal;
    LanguageList[Orc.name] = Orc;
    LanguageList[Primordial.name] = Primordial;
    LanguageList[Sylvan.name] = Sylvan;
    LanguageList[Undercommon.name] = Undercommon;
};
