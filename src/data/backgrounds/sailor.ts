import { Languages, Skills } from "../../data";
import { BackgroundList } from "./background-list";
import * as Characters from "../../models/characters";

export const Sailor: Characters.Background = {
    name: "Sailor",
    reference: { source: "PHB", page: 139, url: "" },
    languages: {},
    skillProficiencies: [Skills.Athletics, Skills.Perception],
    proficiencyCount: 2,
    personalityTraits: [
        "My friends know they can rely on me, no matter what.",
        "I work hard so that I can play hard when the work is done.",
        "I enjoy sailing into new ports and making new friends over a flagon of ale.",
        "I stretch the truth for lhe sake of a good story.",
        "To me, a tavern brawl is a nice way to get to know a new city.",
        "I never pass up a friendly wager.",
        "My language is as foul as an otyugh nest.",
        "I like a job well done, especially if I can convince someone else to do it.",
    ],
    ideals: [
        "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
        "Fairness. We all do the work, so we ali share in the rewards. (Lawful)",
        "Freedom. The sea is freedom&mdash;the freedom to go anywhere and do anything. (Chaotic)",
        "Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)",
        "People. I'm committed to my crewmates, not to ideals. (Neutral)",
        "Aspiration. Someday I'll own my own ship and chart my own destiny. (Any)",
    ],
    bonds: [
        "I'm loyal to my captain first, everything else second.",
        "The ship is most important&mdash;crewmates and captains come and go.",
        "I'll always remember my first ship.",
        "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
        "I was cheated out of my fair share of lhe profits, and I want to get my due.",
        "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.",
    ],
    flaws: [
        "I follow orders, even if I think they're wrong.",
        "I'll say anything lo avoid having to do extra work.",
        "Once someone questions my courage, I never back down no matter how dangerous the situation.",
        "Once I start drinking, it's hard for me to stop.",
        "I can't help but pocket loose coins and other trinkets I come across.",
        "My pride will probably lead to my destruction.",
    ]
};

BackgroundList[Sailor.name] = Sailor;

