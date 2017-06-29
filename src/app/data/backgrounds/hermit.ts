import * as Equipment from "app/models/equipment";

import { Skills } from "../../data";
import * as Characters from "../../models/characters";
import { FeatureType } from "../../models/features/feature-type";
import * as Tools from "../tools";
import { BackgroundList } from "./background-list";

export const Hermit: Characters.Background = new Characters.Background({
    name: "Hermit",
    reference: { source: "PHB", page: 134, url: "" },
    languages: { other: 1 },
    skillProficiencies: [{ proficiencies: [Skills.Medicine, Skills.Religion] }],
    toolProficiencies: [{ proficiencies: [Tools.HerbalismKit] }],
    money: new Equipment.Money({ platinum: 0, gold: 5, silver: 0, copper: 0 }),
    equipment: [
        {
            items: [
                Tools.HerbalismKit,
                new Equipment.Item("scroll case full of notes"),
                new Equipment.Item("common clothes"),
                new Equipment.Item("winter blanket")
            ]
        },
    ],
    features: [{
        name: "Discovery",
        type: FeatureType.Passive,
        description: `
            The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this
            revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings
            of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact
            that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would
            be damaging to the people who or consigned you to exile, and hence the reason for your return to society.

            Work with your DM to determine the details of your discovery and its impact on the campaign.
        `
    }],
    personalityTraits: [
        "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
        "I am utterly serene, even in the face of disaster.",
        "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
        "I feel tremendous empathy for all who suffer.",
        "I'm oblivious to etiquette and social expectations.",
        "I connect everything that happens to me to a grand, cosmic plan.",
        "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
        "I am working on a grand philosophical theory and love sharing my ideas.",
    ],
    ideals: [
        "Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)",
        "Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
        "Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)",
        "Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)",
        "Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)",
        "Self-Knowledge. If you know yourself, there's nothing left to know. (Any)",
    ],
    bonds: [
        "Nothing is more important than the other members of my hermitage, order, or association.",
        "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
        "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
        "I entered seclusion because I loved someone I could not have.",
        "Should my discovery come to light, it could bring ruin to the world.",
        "My isolation gave me great insight into a great evil that only I can destroy.",
    ],
    flaws: [
        "Now that I've returned to the world, I enjoy its delights a little too much.",
        "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
        "I am dogmatic in my thoughts and philosophy.",
        "I let my need to win arguments overshadow friendships and harmony.",
        "I'd risk too much to uncover a lost bit of knowledge.",
        "I like keeping secrets and won't share them with anyone.",
    ]
});

BackgroundList.push(Hermit);
