import { InstrumentList } from "app/data/instruments";
import * as Tools from "app/data/tools";
import * as Equipment from "app/models/equipment";

import { Skills } from "../../data";
import * as Characters from "../../models/characters";
import { FeatureType } from "../../models/features/feature-type";
import { BackgroundList } from "./background-list";

export const Entertainer: Characters.Background = new Characters.Background({
    name: "Entertainer",
    reference: { source: "PHB", page: 130 },
    languages: {},
    skillProficiencies: [{ proficiencies: [Skills.Acrobatics, Skills.Performance] }],
    toolProficiencies: [
        { proficiencies: [Tools.DisguiseKit] },
        { proficiencies: InstrumentList, count: 1 }
    ],
    money: new Equipment.Money({ platinum: 0, gold: 15, silver: 0, copper: 0 }),
    equipment: [
        { items: [new Equipment.Item("fine clothes"), new Equipment.Item("costume")] },
        { items: InstrumentList, count: 1 },
        // TODO: Allow to generate random trinket.
        {
            items: [
                new Equipment.Item("love letter"),
                new Equipment.Item("lock of hair"),
                new Equipment.Item("trinket")], count: 1
        },
    ],
    features: [{
        name: "By Popular Demand",
        type: FeatureType.Passive,
        description: `
            You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a
            noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality
            of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure.
            When strangers recognize you in a town where you have performed, they typically take a liking to you.
        `,
        reference: { source: "PHB", page: 130 },
    }],
    personalityTraits: [
        "I know a story relevant to almost every situation.",
        "Whenever I come to a new place, I collect local rumors and spread gossip.",
        "I'm a hopeless romantic, always searching for that &quot;special someone.&quot;",
        "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
        "I love a good insult, even one directed at me.",
        "I get bitter if I'm not the center of attention.",
        "I'll settle for nothing less than perfection.",
        "I change my mood or my mind as quickly as I change key in a song.",
    ],
    ideals: [
        "Beauty. When I perform, I make the world better than it was. (Good)",
        "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
        "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
        "Greed. I'm only in it for the money and fame. (Evil)",
        "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
        "Honesty. Art should reflect the soul; it should come",
    ],
    bonds: [
        "My instrument is my most treasured possession, and it reminds me of someone I love.",
        "Someone stole my precious instrument, and someday I'll get it back.",
        "I want to be famous, whatever it takes.",
        "I idolize a hero of the old tales and measure my deeds against that person's.",
        "I will do anything to prove myself superior to my hated rival.",
        "I would do anything for the other members of my old troupe.",
    ],
    flaws: [
        "I'll do anything lo win fame and renown.",
        "I'm a sucker for a pretty face.",
        "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
        "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
        "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
        "Despite my best efforts, I am unreliable to my friends.",
    ]
});

BackgroundList.push(Entertainer);
