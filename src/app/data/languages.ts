import * as LanguageModels from "../models/languages";

export namespace Languages {
    export const LanguageList: { [index: string]: LanguageModels.Language } = {};

    export const Aarakocra: LanguageModels.Language = { name: "Aarakocra" };
    export const Abyssal: LanguageModels.Language = { name: "Abyssal" };
    export const Celestial: LanguageModels.Language = { name: "Celestial" };
    export const Common: LanguageModels.Language = { name: "Common" };
    export const DeepSpeech: LanguageModels.Language = { name: "Deep Speech" };
    export const Draconic: LanguageModels.Language = { name: "Draconic" };
    export const Dwarvish: LanguageModels.Language = { name: "Dwarvish" };
    export const Elvish: LanguageModels.Language = { name: "Elvish" };
    export const Giant: LanguageModels.Language = { name: "Giant" };
    export const Gnomish: LanguageModels.Language = { name: "Gnomish" };
    export const Goblin: LanguageModels.Language = { name: "Goblin" };
    export const Halfling: LanguageModels.Language = { name: "Halfling" };
    export const Infernal: LanguageModels.Language = { name: "Infernal" };
    export const Orc: LanguageModels.Language = { name: "Orc" };
    export const Primordial: LanguageModels.Language = { name: "Primordial" };
    export const Sylvan: LanguageModels.Language = { name: "Sylvan" };
    export const Undercommon: LanguageModels.Language = { name: "Undercommon" };

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
