import * as Features from "../models/features";

export namespace Feats {
    export const FeatList: Features.Feature[] = [];

    export const Alert: Features.Feature = new Features.Feature({
        name: "Alert",
        type: Features.FeatureType.SingleMod,
        // TODO: Apply initiative bonus
        reference: { source: "PHB", page: 165, url: "https://www.dndbeyond.com/characters/feats/alert" }
    });
    FeatList.push(Alert);

    export const Athlete: Features.Feature = new Features.Feature({
        name: "Athlete",
        type: Features.FeatureType.SingleMod,
        // TODO: Increase STR/DEX
        reference: { source: "PHB", page: 165, url: "https://www.dndbeyond.com/characters/feats/athlete" }
    });
    FeatList.push(Athlete);

    export const Actor: Features.Feature = new Features.Feature({
        name: "Actor",
        type: Features.FeatureType.SingleMod,
        // TODO: Increase CHA
        reference: { source: "PHB", page: 165, url: "https://www.dndbeyond.com/characters/feats/actor" }
    });
    FeatList.push(Actor);

    export const Charger: Features.Feature = new Features.Feature({
        name: "Charger",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 165, url: "https://www.dndbeyond.com/characters/feats/charger" }
    });
    FeatList.push(Charger);

    export const CrossbowExpert: Features.Feature = new Features.Feature({
        name: "Crossbow Expert",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 165, url: "https://www.dndbeyond.com/characters/feats/crossbow-expert" }
    });
    FeatList.push(CrossbowExpert);

    export const DefensiveDuelist: Features.Feature = new Features.Feature({
        name: "Defensive Duelist",
        type: Features.FeatureType.Passive,
        // Set pre-requisite
        reference: { source: "PHB", page: 165, url: "https://www.dndbeyond.com/characters/feats/defensive-duelist" }
    });
    FeatList.push(DefensiveDuelist);

    export const DualWielder: Features.Feature = new Features.Feature({
        name: "Dual Wielder",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 165, url: "https://www.dndbeyond.com/characters/feats/dual-wielder" }
    });
    FeatList.push(DualWielder);

    export const DungeonDelver: Features.Feature = new Features.Feature({
        name: "Dungeon Delver",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 166, url: "https://www.dndbeyond.com/characters/feats/dungeon-delver" }
    });
    FeatList.push(DungeonDelver);

    export const Durable: Features.Feature = new Features.Feature({
        name: "Durable",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 166, url: "https://www.dndbeyond.com/characters/feats/durable" }
    });
    FeatList.push(DungeonDelver);

    export const ElementalAdept: Features.Feature = new Features.Feature({
        name: "Elemental Adept",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 166, url: "https://www.dndbeyond.com/characters/feats/elemental-adept" }
    });
    FeatList.push(ElementalAdept);

    export const Grappler: Features.Feature = new Features.Feature({
        name: "Grappler",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/grappler" }
    });
    FeatList.push(Grappler);

    export const GreatWeaponMaster: Features.Feature = new Features.Feature({
        name: "Great Weapon Master",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/great-weapon-master" }
    });
    FeatList.push(GreatWeaponMaster);

    export const Healer: Features.Feature = new Features.Feature({
        name: "Healer",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/healer" }
    });
    FeatList.push(Healer);

    export const HeavilyArmored: Features.Feature = new Features.Feature({
        name: "Heavily Armored",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/heavily-armored" }
    });
    FeatList.push(HeavilyArmored);

    export const HeavyArmorMaster: Features.Feature = new Features.Feature({
        name: "Heavily Armored",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/heavy-armor-master" }
    });
    FeatList.push(HeavyArmorMaster);

    export const InspiringLeader: Features.Feature = new Features.Feature({
        name: "Inspiring Leader",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/inspiring-leader" }
    });
    FeatList.push(InspiringLeader);

    export const KeenMind: Features.Feature = new Features.Feature({
        name: "Keen Mind",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/keen-mind" }
    });
    FeatList.push(KeenMind);

    export const LightlyArmored: Features.Feature = new Features.Feature({
        name: "Lightly Armored",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/lightly-armored" }
    });
    FeatList.push(LightlyArmored);

    export const Linguist: Features.Feature = new Features.Feature({
        name: "Linguist",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/linguist" }
    });
    FeatList.push(Linguist);

    export const Lucky: Features.Feature = new Features.Feature({
        name: "Lucky",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 167, url: "https://www.dndbeyond.com/characters/feats/lucky" }
    });
    FeatList.push(Lucky);

    export const MageSlayer: Features.Feature = new Features.Feature({
        name: "Mage Slayer",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/mage-slayer" }
    });
    FeatList.push(MageSlayer);

    export const MagicInitiate: Features.Feature = new Features.Feature({
        name: "Magic Initiate",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/magic-initiate" }
    });
    FeatList.push(MagicInitiate);

    export const MartialAdept: Features.Feature = new Features.Feature({
        name: "Martial Adept",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/martial-adept" }
    });
    FeatList.push(MartialAdept);

    export const MediumArmorMaster: Features.Feature = new Features.Feature({
        name: "Medium Armor Master",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/medium-armor-master" }
    });
    FeatList.push(MediumArmorMaster);

    export const Mobile: Features.Feature = new Features.Feature({
        name: "Mobile",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/mobile" }
    });
    FeatList.push(Mobile);

    export const ModeratelyArmored: Features.Feature = new Features.Feature({
        name: "Moderately Armored",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/moderately-armored" }
    });
    FeatList.push(ModeratelyArmored);

    export const MountedCombatant: Features.Feature = new Features.Feature({
        name: "Mounted Combatant",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/mounted-combatant" }
    });
    FeatList.push(MountedCombatant);

    export const Observant: Features.Feature = new Features.Feature({
        name: "Observant",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/observant" }
    });
    FeatList.push(Observant);

    export const PolearmMaster: Features.Feature = new Features.Feature({
        name: "Polearm Master",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/polearm-master" }
    });
    FeatList.push(PolearmMaster);

    export const Resilient: Features.Feature = new Features.Feature({
        name: "Resilient",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 168, url: "https://www.dndbeyond.com/characters/feats/resilient" }
    });
    FeatList.push(Resilient);

    export const RitualCaster: Features.Feature = new Features.Feature({
        name: "Ritual Caster",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 169, url: "https://www.dndbeyond.com/characters/feats/ritual-caster" }
    });
    FeatList.push(RitualCaster);

    export const SavageAttacker: Features.Feature = new Features.Feature({
        name: "Savage Attacker",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 169, url: "https://www.dndbeyond.com/characters/feats/savage-attacker" }
    });
    FeatList.push(SavageAttacker);

    export const Sentinel: Features.Feature = new Features.Feature({
        name: "Sentinel",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 169, url: "https://www.dndbeyond.com/characters/feats/sentinel" }
    });
    FeatList.push(Sentinel);

    export const Sharpshooter: Features.Feature = new Features.Feature({
        name: "Sharpshooter",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/sharpshooter" }
    });
    FeatList.push(Sharpshooter);

    export const ShieldMaster: Features.Feature = new Features.Feature({
        name: "Shield Master",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/shield-master" }
    });
    FeatList.push(ShieldMaster);

    export const Skilled: Features.Feature = new Features.Feature({
        name: "Skilled",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/skilled" }
    });
    FeatList.push(Skilled);

    export const Skulker: Features.Feature = new Features.Feature({
        name: "Skulker",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/skulker" }
    });
    FeatList.push(Skulker);

    export const SpellSniper: Features.Feature = new Features.Feature({
        name: "Spell Sniper",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/spell-sniper" }
    });
    FeatList.push(SpellSniper);

    export const TavernBrawler: Features.Feature = new Features.Feature({
        name: "Tavern Brawler",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/tavern-brawler" }
    });
    FeatList.push(TavernBrawler);

    export const Tough: Features.Feature = new Features.Feature({
        name: "Tough",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/tough" }
    });
    FeatList.push(Tough);

    export const WarCaster: Features.Feature = new Features.Feature({
        name: "War Caster",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/war-caster" }
    });
    FeatList.push(WarCaster);

    export const WeaponMaster: Features.Feature = new Features.Feature({
        name: "Weapon Master",
        type: Features.FeatureType.Passive,
        reference: { source: "PHB", page: 170, url: "https://www.dndbeyond.com/characters/feats/weapon-master" }
    });
    FeatList.push(WeaponMaster);
};
