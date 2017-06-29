import * as Equipment from "app/models/equipment";

import { Skills } from "../../data";
import * as Characters from "../../models/characters";
import { FeatureType } from "../../models/features/feature-type";
import { InstrumentList } from "../instruments";
import * as Weapons from "../weapons";
import { BackgroundList } from "./background-list";

export const Outlander: Characters.Background = new Characters.Background({
    name: "Outlander",
    reference: { source: "PHB", page: 136, url: "" },
    languages: { other: 1 },
    skillProficiencies: [{ proficiencies: [Skills.Athletics, Skills.Survival] }],
    toolProficiencies: [{ proficiencies: InstrumentList, count: 1 }],
    money: new Equipment.Money({ platinum: 0, gold: 10, silver: 0, copper: 0 }),
    equipment: [
        { items: [Weapons.Quarterstaff, { name: "hunting trap" }, { name: "animal trophy" }, { name: "traveler's clothes" }] }
    ],
    features: [{
        name: "Wanderer",
        type: FeatureType.Passive,
        description: `
            You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and
            other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day,
            provided that the land offers berries, small game, water, and so forth.
        `
    }],
    personalityTraits: [
        "I'm driven by a wanderlust that led me away from home.",
        "I watch over my friends as if they were a litter of newborn pups.",
        "I once ran twenty-five miles without stopping to warn to my e1an of an approaching ore horde. I'd do it again if I had to.",
        "I have a lesson for every situation, drawn from observing nature.",
        "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
        "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
        "I feel far more comfortable around animals than people.",
        "I was, in fact, raised by wolves.",
    ],
    ideals: [
        "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
        "Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
        "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)",
        "Might. The strongest are meant to rule. (Evil)",
        "Nature. The natural world is more important than ali the constructs of civilization. (Neutral)",
        "Glory. I must earn glory in battle, for myself and my clan. (Any)",
    ],
    bonds: [
        "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
        "An injury to the unspoiled wilderness of my home is an injury to me.",
        "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
        "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
        "I suffer awful visions of a coming disaster and will do anything to prevent it.",
        "It is my duty to provide children to sustain my tribe.",
    ],
    flaws: [
        "I am too enamored of ale, wine, and other intoxicants.",
        "There's no room for caution in a life lived to the fullest.",
        "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
        "Iam slow to trust members of other races, tribes, and societies.",
        "Violence is my answer to almost any challenge.",
        "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
    ]
});

BackgroundList.push(Outlander);
