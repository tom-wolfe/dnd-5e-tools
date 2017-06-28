import { Skills } from "app/data";
import { GamingSetList } from "app/data/gaming-sets";
import * as Tools from "app/data/tools";
import * as Characters from "app/models/characters";
import * as Equipment from "app/models/equipment";
import { FeatureType } from "app/models/features/feature-type";

import { BackgroundList } from "./background-list";

export const Criminal: Characters.Background = new Characters.Background({
    name: "Criminal",
    reference: { source: "PHB", page: 129, url: "" },
    languages: {},
    skillProficiencies: [{ proficiencies: [Skills.Deception, Skills.Stealth] }],
    toolProficiencies: [
        { proficiencies: [Tools.ThievesTools] },
        { proficiencies: GamingSetList, count: 1 }
    ],
    money: new Equipment.Money({ platinum: 0, gold: 15, silver: 0, copper: 0 }),
    equipment: [
        { items: [[{ name: "crowbar" }, { name: "dark common clothes with hood" }]] }
    ],
    features: [{
        name: "Criminal Contact",
        type: FeatureType.Passive,
        description: `
            You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get
            messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan
            masters, and seedy sailors who can deliver messages for you.
        `
    }],
    personalityTraits: [
        "I always have a plan for what to do when things go wrong.",
        "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
        "The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.",
        "I would rather make a new friend than a new enemy.",
        "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
        "I don’t pay attention to the risks in a situation. Never tell me the odds.",
        "The best way to get me to do something is to tell me I can’t do it.",
        "I blow up at the slightest insult."
    ],
    ideals: [
        "Honor. I don’t steal from others in the trade. (Lawful)",
        "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
        "Charity. I steal from the wealthy so that I can help people in need. (Good)",
        "Greed. I will do whatever it takes to become wealthy. (Evil)",
        "People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
        "Redemption. There’s a spark of good in everyone. (Good)"
    ],
    bonds: [
        "I’m trying to pay off an old debt I owe to a generous benefactor.",
        "My ill-gotten gains go to support my family.",
        "Something important was taken from me, and I aim to steal it back.",
        "I will become the greatest thief that ever lived.",
        "I’m guilty of a terrible crime. I hope I can redeem myself for it.",
        "Someone I loved died because of I mistake I made. That will never happen again.",
    ],
    flaws: [
        "When I see something valuable, I can’t think about anything but how to steal it.",
        "When faced with a choice between money and my friends, I usually choose the money.",
        "If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.",
        "I have a “tell” that reveals when I’m lying.",
        "I turn tail and run when things look bad.",
        "An innocent person is in prison for a crime that I committed. I’m okay with that.",
    ]
});

BackgroundList.push(Criminal);
