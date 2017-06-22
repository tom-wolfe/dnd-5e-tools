/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-warforged-names.php */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const Warforged: Races.NameDefinition = {
    name: "Warforged",
    formats: [
        "{forename}"
    ],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "abider", "achiever", "actor", "adapter", "adviser", "aegis", "agent", "animal", "apparatus", "armament", "artist",
                    "audience", "author", "awakener", "basher", "bastion", "battler", "bear", "beast", "beauty", "beetle", "bender",
                    "binder", "blade", "book", "booster", "boot", "bouncer", "brain", "brander", "brawler", "breaker", "bringer", "browser",
                    "bruiser", "buffet", "bug", "builder", "bulwark", "calmer", "candle", "cannon", "carer", "carriage", "carrier", "cart",
                    "carver", "case", "caster", "catcher", "chain", "chains", "challenger", "champion", "chaperon", "charger", "chaser",
                    "chopper", "claymore", "cleaver", "climber", "clock", "club", "clubber", "coil", "commander", "controller", "cook",
                    "counter", "creator", "creature", "creese", "crew", "croaker", "crow", "crumbler", "crusher", "curator", "curtana",
                    "custodian", "cutlas", "cutlass", "cutter", "dagger", "data", "dealer", "decipherer", "defender", "definer", "delver",
                    "designer", "destroyer", "diagnoser", "director", "dirk", "diver", "doctor", "dozer", "dreamer", "drifter", "driver",
                    "drone", "echo", "edge", "enchanter", "epee", "eraser", "estoc", "etcher", "examiner", "expert", "falchion", "familiar",
                    "fighter", "figure", "fire", "five", "flail", "flame", "fluke", "foil", "follower", "forger", "four", "friend",
                    "fumbler", "gasher", "gauger", "ghost", "giant", "gift", "glaive", "glancer", "griller", "grunter", "guardian", "guest",
                    "guide", "hacker", "hammer", "handler", "heart", "help", "hook", "horn", "host", "hummer", "hunter", "image",
                    "inspector", "iron", "judge", "junior", "jury", "katana", "kid", "killer", "knife", "knocker", "kris", "launcher",
                    "leaper", "lifter", "lock", "locket", "lurker", "mace", "machine", "mark", "marker", "mask", "masker", "mauler",
                    "melter", "menace", "mentor", "merger", "metal", "mime", "mistake", "model", "molder", "murderer", "nameless",
                    "needle", "nemo", "novice", "nurse", "observer", "officer", "ogler", "one", "ornament", "painter", "passenger",
                    "patient", "patriot", "pierce", "pilot", "pious", "player", "porter", "preacher", "pretender", "prize", "probe",
                    "protector", "prowler", "punisher", "query", "ravager", "reader", "reckoner", "relic", "render", "rescuer", "responder",
                    "reviewer", "rider", "rune", "saber", "sabre", "safeguard", "salvager", "saviour", "scimitar", "scorcher", "scratcher",
                    "scrubber", "searcher", "security", "seeker", "senior", "senser", "sentinel", "sentry", "servant", "shaper", "shepherd",
                    "shield", "shielder", "shredder", "slasher", "slicer", "smasher", "smiter", "snooper", "spark", "sparkle", "special",
                    "spirit", "sprinter", "sprite", "squasher", "stalker", "status", "steel", "steeple", "stick", "sticks", "stitcher",
                    "striker", "student", "stumbler", "subject", "suit", "sunderer", "supporter", "surveyor", "sword", "tackler", "taunter",
                    "teacher", "teaser", "tempter", "tester", "thief", "thinker", "three", "thunder", "tinkerer", "titan", "toad", "toledo",
                    "tutor", "twister", "two", "undoer", "unit", "unmaker", "unsung", "vessel", "victor", "visitor", "voice", "walker",
                    "ward", "warden", "watcher", "whisperer", "wielder", "winker", "winner", "wonderer", "wrestler", "zealot", "zero"
                ]
            }
        }
    }
};

NameList[Warforged.name] = Warforged;
