import * as Equipment from "app/models/equipment";

import { Skills } from "../../data";
import * as Characters from "../../models/characters";
import { FeatureType } from "../../models/features/feature-type";
import * as Tools from "../tools";
import { BackgroundList } from "./background-list";

export const Charlatan: Characters.Background = new Characters.Background({
    name: "Charlatan",
    reference: { source: "PHB", page: 128 },
    languages: {},
    skillProficiencies: [{ proficiencies: [Skills.Deception, Skills.SleightOfHand] }],
    toolProficiencies: [{ proficiencies: [Tools.DisguiseKit, Tools.ForgeryKit] }],
    money: new Equipment.Money({ platinum: 0, gold: 15, silver: 0, copper: 0 }),
    equipment: [
        { items: [Tools.DisguiseKit, new Equipment.Item("fine clothes")] },
        {
            items: [
                new Equipment.ItemQuantity(new Equipment.Item("stoppered bottle filled with colored liquid"), 10),
                new Equipment.Item("weighted dice"),
                new Equipment.Item("deck of marked cards"),
                new Equipment.Item("signet ring of an imaginary duke")
            ],
            count: 1
        }
    ],
    features: [{
        name: "Favorite False Identity",
        type: FeatureType.Passive,
        description: `
            You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to
            assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have
            seen an example of the kind of document or the handwriting you are trying to copy.
        `,
        reference: { source: "PHB", page: 128 },
    }],
    personalityTraits: [
        "I fall in and out of love easily, and am always pursuing someone.",
        "I have a joke for every occasion, especially occasions where humor is inappropriate.",
        "Flattery is my preferred trick for getting what I want,",
        "I'm a born gambler who can't resist taking a risk for a potential payoff.",
        "I lie about almost everything, even when there's no good reason to.",
        "Sarcasm and insults are my weapons of choice.",
        "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
        "I pocket anything I see that might have some value.",
    ],
    ideals: [
        "Independence. I am a free spirit - no one tells me what to do. (Chaotic)",
        "Fairness. I never target people who can't afford to lose a few coins. (Lawful)",
        "Charity. I distribute the money I acquire to the people who really need it. (Good)",
        "Creativity. I never run the same con twice. (Chaotic)",
        "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)",
        "Aspiration. I'm determined to make something of myself. (Any)",
    ],
    bonds: [
        "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
        "I owe everything to my mentor - a horrible person who's probably rotting in jail somewhere.",
        "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
        "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
        "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
        `
                I swindled and ruined a person who didn't deserve ill.
                I seek to atone for my misdeeds but might never be able to forgive myself.
            `,
    ],
    flaws: [
        "I can't resist a pretty face.",
        "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
        "I'm convinced that no one could ever fool me the way I fool others.",
        "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
        "I can't resist swindling people who are more powerful than me.",
        "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
    ]
});

BackgroundList.push(Charlatan);
