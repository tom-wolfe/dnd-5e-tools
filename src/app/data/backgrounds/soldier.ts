import * as Vehicles from "app/data/vehicles";
import * as Equipment from "app/models/equipment";

import { Skills } from "../../data";
import * as Characters from "../../models/characters";
import { FeatureType } from "../../models/features/feature-type";
import { GamingSetList } from "../gaming-sets";
import { BackgroundList } from "./background-list";

export const Soldier: Characters.Background = new Characters.Background({
    name: "Soldier",
    reference: { source: "PHB", page: 140, url: "https://www.dndbeyond.com/characters/backgrounds/soldier" },
    languages: {},
    skillProficiencies: [{ proficiencies: [Skills.Athletics, Skills.Intimidation] }],
    toolProficiencies: [{ proficiencies: GamingSetList, count: 1 }],
    otherProficiencies: [{ proficiencies: [Vehicles.LandVehicles] }],
    money: new Equipment.Money({ platinum: 0, gold: 10, silver: 0, copper: 0 }),
    equipment: [
        {
            items: [
                new Equipment.Item("common clothes"),
                new Equipment.Item("insignia of rank"),
                new Equipment.Item("trophy from a fallen enemy")]
        },
        {
            items: [
                new Equipment.Item("bone dice"),
                new Equipment.Item("deck of cards")
            ], count: 1
        },
    ],
    features: [{
        name: "Military Rank",
        type: FeatureType.Passive,
        reference: { source: "PHB", page: 140, url: "https://www.dndbeyond.com/characters/backgrounds/soldier#military-rank" },
    }],
    personalityTraits: [
        "I'm always polite and respectful.",
        "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
        "I've lost too many friends, and I'm slow to make new ones.",
        "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
        "I can stare down a hell hound without flinching.",
        "I enjoy being strong and like breaking things.",
        "I have a crude sense of humor.",
        "I face problems head-on. A simple, direct solution is the best path to success.",
    ],
    ideals: [
        "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
        "Responsibility. I do what I must and obey just authority. (Lawful)",
        "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
        "Might. In life as in war, the stronger force wins. (Evil)",
        "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
        "Nation. My city, nation, or people are all that matter. (Any)",
    ],
    bonds: [
        "I would still lay down my life for the people I served with.",
        "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
        "My honor is my life.",
        "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
        "Those who fight beside me are those worth dying for.",
        "I fight for those who cannot fight for themselves.",
    ],
    flaws: [
        "The monstrous enemy we faced in battle still leaves me quivering with fear.",
        "I have little respect for anyone who is not a proven warrior.",
        "I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.",
        "My hatred of my enemies is blind and unreasoning.",
        "I obey the law, even if the law causes misery.",
        "I'd rather eat my armor than admit when I'm wrong.",
    ]
});

BackgroundList.push(Soldier);
