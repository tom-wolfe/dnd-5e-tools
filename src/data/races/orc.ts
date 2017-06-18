import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Orc: RaceModels.Race = {
    name: "Orc",
    size: "Medium",
    senses: { darkvision: 60 },
    age: { maturity: 12, max: 50 },
    height: { base: 68, modifier: 12 },
    weight: { base: 230, modifier: 4 },
    languages: { known: [ Languages.Common, Languages.Orc ] },
    statMods: { strength: +2, constitution: +1 },
    speed: { walk: 30 },
    features: [
        {
            name: "Aggressive", type: "active",
            description: `
                As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear.
                You must end this move closer to the enemy than you started.
            `
        },
        CommonFeatures.menacing,
        CommonFeatures.powerfulBuild,
        {
            name: "Natural Armor", type: "passive",
            description: `
                You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your
                natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply
                as normal while you use your natural armor.
            `
        }, {
            name: "Hungry Jaws", type: "active",
            description: `
                In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack
                with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1)
                equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.
            `
        }
    ],
    reference: { source: "VGM", page: 120 },
    subraces: null
};

Races[Orc.name] = Orc;
