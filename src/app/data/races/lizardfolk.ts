import { Languages } from "app/data/languages";
import { Skills } from "app/data/skills";
import * as Characters from "app/models/characters";
import { FeatureType, TimeUnit } from "app/models/features";
import { ProficiencyType } from "app/models/proficiency-type";
import * as RaceModels from "app/models/races";

import * as Names from "../names";
import { RaceList } from "./race-list";

export const Lizardfolk: RaceModels.Race = {
    name: "Lizardfolk",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 14, max: 65 },
    height: { base: 60, modifier: 20 },
    weight: { base: 120, modifier: 8 },
    nameDefinition: Names.Lizardfolk,
    languages: { known: [Languages.Common, Languages.Draconic] },
    abilityMods: { "CON": +2, "WIS": +1 },
    features: [
        {
            name: "Bite", type: FeatureType.Active,
            description: `
                    Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing
                    damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
                `
        }, {
            name: "Cunning Artisan", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            description: `
                    As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant
                    creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or ld4 darts or
                    blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as
                    leatherworker's tools.
                `
        }, {
            name: "Hold Breath", type: FeatureType.Passive,
            description: "You can hold your breath for up to 15 minutes at a time."
        }, {
            name: "Hunter's Lore", type: FeatureType.Passive,
            skillProficiencies: [{
                proficiencies: [Skills.Nature, Skills.Perception, Skills.Stealth, Skills.Survival],
                count: 2, type: ProficiencyType.Proficient
            }],
            description: `
                    You gain proficiency with two of the following skills of your choice:
                    Animal Handling, Nature, Perception, Stealth, and Survival.
                `
        }, {
            name: "Natural Armor", type: FeatureType.SingleMod,
            description: `
                    You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your
                    natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply
                    as normal while you use your natural armor.
                `,
            apply(character: Characters.Character) {
                character.baseArmorClass = 13;
            }
        }, {
            name: "Hungry Jaws", type: FeatureType.Active,
            description: `
                    In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack
                    with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1)
                    equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.
                `
        }
    ],
    reference: { source: "VGM", page: 111 },
    subraces: []
};

RaceList[Lizardfolk.name] = Lizardfolk;
