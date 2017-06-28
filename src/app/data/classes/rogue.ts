import * as Tools from "app/data/tools";
import * as Weapons from "app/data/weapons";
import { ArmorType } from "app/models/equipment";

import * as ClassModels from "../../models/classes";
import { WeaponType } from "../../models/equipment";
import { ClassList } from "./class-list";
import { Skills } from "app/data";

export const Rogue: ClassModels.Class = new ClassModels.Class({
    name: "Rogue",
    primaryStat: "DEX",
    hitDie: 8,
    savingThrows: ["DEX", "INT"],
    armorProficiencies: [{ proficiencies: [ArmorType.Light] }],
    weaponProficiencies: [{
        proficiencies: [
            ...Weapons.WeaponList.filter(w => w.type === WeaponType.Simple),
            Weapons.HandCrossbow, Weapons.Longsword, Weapons.Rapier, Weapons.Shortsword
        ]
    }],
    toolProficiencies: [{ proficiencies: [Tools.ThievesTools] }],
    skillProficiencies: [{
        proficiencies: [
            Skills.Acrobatics, Skills.Athletics, Skills.Deception, Skills.Insight, Skills.Intimidation, Skills.Investigation,
            Skills.Perception, Skills.Performance, Skills.Persuasion, Skills.SleightOfHand, Skills.Stealth
        ], count: 4
    }],
    otherProficiencies: [],
    archetypeName: { singular: "Rogueish Archetypes", plural: "Roguish Archetypes" },
    reference: { source: "PHB", page: 94, url: "https://www.dndbeyond.com/characters/classes/rogue" },
    archetypes: [
        {
            name: "Thief",
            reference: {
                source: "PHB", page: 97,
                url: "https://www.dndbeyond.com/characters/classes/rogue#Thief"
            }
        }, {
            name: "Assassin",
            reference: {
                source: "PHB", page: 97,
                url: ""
            }
        }, {
            name: "Arcane Trickster",
            reference: {
                source: "PHB", page: 97,
                url: ""
            }
        }, {
            name: "Mastermind",
            reference: {
                source: "SCG", page: 135,
                url: ""
            }
        }, {
            name: "Swashbuckler",
            reference: {
                source: "SCG", page: 135,
                url: ""
            }
        }, {
            name: "Scout",
            reference: {
                source: "UA", document: "Ranger & Rogue", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf#page=2"
            }
        }
    ]
});

ClassList.push(Rogue);
