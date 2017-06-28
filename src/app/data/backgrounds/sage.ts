import { Skills } from "../../data";
import * as Characters from "../../models/characters";
import { FeatureType } from "../../models/features/feature-type";
import { BackgroundList } from "./background-list";

export const Sage: Characters.Background = new Characters.Background();
Object.assign(Sage, {
    name: "Sage",
    reference: { source: "PHB", page: 137, url: "https://www.dndbeyond.com/characters/backgrounds/sage" },
    languages: { other: 2 },
    skillProficiencies: [{ proficiencies: [Skills.Arcana, Skills.History] }],
    features: [{
        name: "Researcher",
        type: FeatureType.Passive,
        description: `
            When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you
            can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or
            creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply
            cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.

        `
    }],
    personalityTraits: [
        "I use polysyllabic words that convey the impression of great erudition.",
        "I’ve read every book in the world’s greatest libraries—or I like to boast that I have.",
        "I’m used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.",
        "There’s nothing I like more than a good mystery.",
        "I’m willing to listen to every side of an argument before I make my own judgment.",
        "I … speak … slowly … when talking … to idiots, … which … almost … everyone … is … compared … to me.",
        "I am horribly, horribly awkward in social situations.",
        "I’m convinced that people are always trying to steal my secrets.",
    ],
    ideals: [
        "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)",
        "Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
        "Logic. Emotions must not cloud our logical thinking. (Lawful)",
        "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
        "Power. Knowledge is the path to power and domination. (Evil)",
        "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)",
    ],
    bonds: [
        "It is my duty to protect my students.",
        "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
        "I work to preserve a library, university, scriptorium, or monastery.",
        "My life’s work is a series of tomes related to a specific field of lore.",
        "I’ve been searching my whole life for the answer to a certain question.",
        "I sold my soul for knowledge. I hope to do great deeds and win it back.",
    ],
    flaws: [
        "I am easily distracted by the promise of information.",
        "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
        "Unlocking an ancient mystery is worth the price of a civilization.",
        "I overlook obvious solutions in favor of complicated ones.",
        "I speak without really thinking through my words, invariably insulting others.",
        "I can’t keep a secret to save my life, or anyone else’s.",
    ]
});

BackgroundList.push(Sage);
