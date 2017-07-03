import { Levels } from "app/data";
import * as Data from "app/data/";
import * as Classes from "app/data/classes";
import { Armor, ArmorType } from "app/models/equipment";
import { Character } from "app/models/characters/character";
import * as _ from "lodash";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class ClassBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character): void {
        this.randomizeClass(character);
        this.randomizeLevel(character);
        this.randomizeHitPoints(character);
        this.randomizeEquipment(character);
    }

    private randomizeClass(character: Character) {
        if (this.config.class) {
            character.class = this.config.class;
        } else {
            const classNum = this.numGen.rollDie(Classes.ClassList.length) - 1;
            character.class = Classes.ClassList[classNum];
        }

        if (character.class.archetypes) {
            if (this.config.classArchetype) {
                character.classArchetype = this.config.classArchetype;
            } else {
                const archNum = this.numGen.rollDie(character.class.archetypes.length) - 1;
                character.classArchetype = character.class.archetypes[archNum];
            }
        } else {
            character.classArchetype = null;
        }

        character.savingThrowProficiencies.push(...character.class.savingThrows);

        character.class.armorProficiencies.forEach(op => {
            this.grantProficiencyOption(character.armorProficiencies, op);
        });
        character.class.weaponProficiencies.forEach(op => {
            this.grantProficiencyOption(character.weaponProficiencies, op);
        });
        character.class.skillProficiencies.forEach(op => {
            this.grantProficiencyOption(character.skillProficiencies, op, Data.Skills.SkillList);
        });
        (character.class.toolProficiencies || []).forEach(op => {
            this.grantProficiencyOption(character.toolProficiencies, op);
        });
        (character.class.otherProficiencies || []).forEach(op => {
            this.grantProficiencyOption(character.otherProficiencies, op);
        });
    }

    private randomizeLevel(character: Character) {
        character.level = Levels[this.numGen.numberBetween(this.config.minLevel, this.config.maxLevel)];
    }

    private randomizeHitPoints(character: Character) {
        const hitDice = this.numGen.rollDice(character.class.hitDie, character.level.number - 1);
        hitDice.push(character.class.hitDie); // Max roll for first level.
        character.baseHitPoints = _.sum(hitDice);
    }

    private randomizeEquipment(character: Character) {
        if (!character.class.equipment) { return; }
        character.class.equipment.forEach(option => {
            this.grantEquipmentOption(character, option);
        });

        // Equip random shield and armour.
        const equipment = character.getEquipment();
        const shields = equipment.filter(a => a instanceof Armor && a.type === ArmorType.Shield);
        if (shields.length > 0) {
            character.equippedShield = shields[this.numGen.rollDie(shields.length) - 1] as Armor;
        }
        const armor = equipment.filter(a => a instanceof Armor && a.type !== ArmorType.Shield);
        if (armor.length > 0) {
            character.equippedArmor = armor[this.numGen.rollDie(armor.length) - 1] as Armor;
        }
    }
};
