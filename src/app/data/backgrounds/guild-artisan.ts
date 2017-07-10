import * as Equipment from "app/models/equipment";

import { Skills } from "../../data";
import * as Characters from "../../models/characters";
import { FeatureType } from "../../models/features/feature-type";
import { ArtisanToolList } from "../artisan-tools";
import { BackgroundList } from "./background-list";

export const GuildArtisan: Characters.Background = new Characters.Background({
    name: "Guild Artisan",
    reference: { source: "PHB", page: 132 },
    languages: { other: 1 },
    skillProficiencies: [{ proficiencies: [Skills.Insight, Skills.Persuasion] }],
    toolProficiencies: [{ proficiencies: ArtisanToolList, count: 1 }],
    money: new Equipment.Money({ platinum: 0, gold: 15, silver: 0, copper: 0 }),
    equipment: [
        {
            items: [
                new Equipment.Item("letter of introduction from your guild"),
                new Equipment.Item("traveler's clothes")
            ]
        },
        { items: ArtisanToolList, count: 1 },
    ],
    features: [{
        name: "Guild Membership",
        type: FeatureType.Passive,
        reference: { source: "PHB", page: 133 },
    }],
    personalityTraits: [
        "I believe that anything worth doing is worth doing right. I can't help it&mdash;I'm a perfectionist.",
        "I'm a snob who looks down on those who can't appreciate fine art.",
        "I always want to know how things work and what makes people tick.",
        "I'm full of witty aphorisms and have a proverb for every occasion.",
        "I'm rude to people who lack my commitment to hard work and fair play.",
        "I like to talk at length about my profession.",
        "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
        `
                I'm well known for my work, and I want to make sure everyone appreciates it.
                I'm always taken aback when people haven't heard of me.
            `,
    ],
    ideals: [
        `
                Community. It is the duty of all civilized people to strengthen the bonds of
                community and the security of civilization. (Lawful)
            `,
        "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
        "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
        "Greed. I'm only in it for the money. (Evil)",
        "People. I'm committed to the people I care about, not to ideals. (Neutral)",
        "Aspiration. I work hard to be the best there is at my craft.",
    ],
    bonds: [
        "The workshop where I learned my trade is the most important place in the world to me.",
        "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
        "I owe my guild a great debt for forging me into the person I am today.",
        "I pursue wealth to secure someone's love.",
        "One day I will return to my guild and prove that I am the greatest artisan of them all.",
        "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
    ],
    flaws: [
        "I'll do anything to get my hands on something rare or priceless.",
        "I'm quick to assume that someone Is trying to cheat me.",
        "No one must ever learn that I once stole money from guild coffers.",
        "I'm never satisfied with what I have&mdash;I always want more.",
        "I would kill to acquire a noble title.",
        "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
    ]
});

BackgroundList.push(GuildArtisan);
