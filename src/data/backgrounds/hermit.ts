import { Languages, Skills } from "../../data";
import { Backgrounds as BackgroundsImport } from "./background-list";
import * as Characters from "../../models/characters";

namespace Backgrounds {
    export const Hermit: Characters.Background = {
        name: "Hermit",
        reference: { source: "PHB", page: 134, url: "" },
        languages: { other: 1 },
        skillProficiencies: [Skills.Medicine, Skills.Religion],
        proficiencyCount: 2,
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
    };

    BackgroundsImport.BackgroundList[Hermit.name] = Hermit;
};
