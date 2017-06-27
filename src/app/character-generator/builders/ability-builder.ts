import { Abilities } from "app/data/abilities";
import { Character } from "app/models/characters/character";
import { NumberGenerator } from "app/shared/generators";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class AbilityBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character) {
        this.randomizeAbilities(character);
    }

    private randomizeAbilities(character: Character) {
        const abilityList = Object.keys(Abilities.AbilityList);
        let statList = abilityList.map((ability) => this.generateScore())
        statList = statList.sort((a, b) => a - b).reverse();

        const assignOrder: string[] = [];

        const pushAbility = (index) => {
            // Only push the class primary stat if it hasn't already been set.
            let tmpAbility;
            if (tmpAbility = abilityList[index]) {
                assignOrder.push(tmpAbility);
                abilityList.splice(index, 1);
            }
        }

        // If the primary stat is overridden, push that.
        if (this.config.primaryAbility) {
            pushAbility(abilityList.indexOf(this.config.primaryAbility.code));
        } else {
            pushAbility(abilityList.indexOf(character.class.primaryStat));
        }

        // If the secondary stat is overridden, push that.
        if (this.config.secondaryAbility) {
            pushAbility(abilityList.indexOf(this.config.secondaryAbility.code));
        }

        pushAbility(abilityList.indexOf(character.class.primaryStat));

        // Randomize the remaining abilities.
        while (abilityList.length > 0) {
            pushAbility(this.numGen.rollDie(abilityList.length) - 1);
        }

        for (let index = 0; index < assignOrder.length; index++) {
            character.baseAbilities.set(assignOrder[index], statList[index]);
        }
    }

    private generateScore(): number {
        const numGen = new NumberGenerator();
        const dice = numGen.rollDice(6, 4);
        dice.sort();
        dice.shift();
        return dice.reduce((t, n) => t + n);
    }
};
