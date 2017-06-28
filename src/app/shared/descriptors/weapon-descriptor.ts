import * as Equipment from "app/models/equipment";
import * as _ from "lodash";

import { Character } from "../../models/characters/character";
import { Descriptor } from "./descriptor";

export class WeaponDescriptor extends Descriptor<Equipment.Weapon> {
    constructor(private character: Character) { super(); }

    describe(weapon: Equipment.Weapon): string {
        const isMelee = !_.includes(weapon.properties, Equipment.WeaponProperty.Ranged)
        const isRanged = !isMelee || _.includes(weapon.properties, Equipment.WeaponProperty.Thrown)

        // Attack type.
        let type = "";
        switch (true) {
            case isMelee && isRanged: type = "Melee or Ranged"; break;
            case isMelee: type = "Melee"; break;
            case isRanged: type = "Ranged"; break;
        }

        // Reach
        const dmgBonus = this.getDamageBonus(weapon);
        const hitBonus = this.getHitBonus(weapon, dmgBonus);
        const reach = this.describeReach(weapon, isMelee, isRanged);
        const damage = this.describeDamage(weapon, isMelee, isRanged, dmgBonus);

        return `${type} Weapon Attack: ${hitBonus} to hit, ${reach}, one target. Hit: ${damage}.`;
    }

    private describeReach(weapon: Equipment.Weapon, isMelee: boolean, isRanged: boolean): string {
        let retVal = "";
        if (isMelee) {
            let reach = 5;
            if (_.includes(weapon.properties, Equipment.WeaponProperty.Reach)) {
                reach = 10;
            }
            retVal = `reach ${reach} ft.`
        }
        if (isRanged) {
            if (retVal) { retVal += " or "; }
            retVal += `range ${weapon.range.from}/${weapon.range.to} ft.`;
        }
        return retVal;
    }

    private getHitBonus(weapon: Equipment.Weapon, dmgBonus: number) {
        let bonus = 0;
        if (_.includes(this.character.weaponProficiencies.map(w => w.thing), weapon)) {
            bonus += this.character.level.proficiencyBonus;
        }

        // Damage bonus.
        const hitBonus = bonus + dmgBonus;
        return hitBonus >= 0 ? "+" + hitBonus : hitBonus.toString();
    }

    private getDamageBonus(weapon: Equipment.Weapon) {
        let ability = "STR";
        if (_.includes(weapon.properties, Equipment.WeaponProperty.Ranged) ||
            _.includes(weapon.properties, Equipment.WeaponProperty.Finesse)) {
            ability = "DEX";
        }
        return this.character.abilities.getModifier(ability);
    }

    private describeDamage(weapon: Equipment.Weapon, isMelee: boolean, isRanged: boolean, dmgBonus: number): string {
        const damage = weapon.damageDice + " + " + dmgBonus;
        const damageType = Equipment.DamageType[weapon.damageType].toString().toLowerCase();

        return `${damage} ${damageType} damage`;
    }

    private describeAttack(hitBonus: string, reach: string, damage: string, damageType: string): string {
        return `${hitBonus} to hit, reach ${reach} ft., one target. Hit: ${damage} ${damageType} damage.`;
    }
};
