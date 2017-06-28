# {{name}}

___
___
> ## {{name}}
> ##### {{class.name}} {{#classArchetype}}({{classArchetype.name}}){{/classArchetype}}
> *{{genderDescription}} {{raceDescription}}*<br>
> *{{race.size}} humanoid, {{alignmentDescription}}*
> ___
> - **Level** {{level.number}}
> - **Proficiency Bonus** +{{level.proficiencyBonus}}
> - **Armor Class** {{armorClass}} ({{equippedArmor}})
> - **Hit Points** {{hitPoints}} ({{hitPointFormula}})
> - **Speed** {{walkSpeedDescription}}{{otherSpeedsDescription}}
>___
>|STR|DEX|CON|INT|WIS|CHA|
>|:---:|:---:|:---:|:---:|:---:|:---:|
>|{{strength}} ({{strengthMod}})|{{dexterity}} ({{dexterityMod}})|{{constitution}} ({{constitutionMod}})|{{intelligence}} ({{intelligenceMod}})|{{wisdom}} ({{wisdomMod}})|{{charisma}} ({{charismaMod}})|
>___
> - **Damage Resistances** {{damageResistancesString}}
> - **Skills** {{skillString}}
> - **Saving Throws** {{savingThrowProficiencyString}}
> - **Senses** passive Perception{{#sensesString}}, {{/sensesString}}{{sensesString}}
> - **Languages** {{languagesString}}
>___
> - **Weapon Proficiencies** {{weaponProficiencyString}}
> - **Armor Proficiencies** {{armorProficiencyString}}
> - **Tool Proficiencies** {{toolProficiencyString}}
> - **Other Proficiencies** {{otherProficiencyString}}
> ___
> - **Equipment** {{equipmentString}}
> ___
{{#otherFeatures}}
> ***{{name}}. *** {{description}}
> 
{{/otherFeatures}}
> ### Actions
{{#actions}}
> ***{{name}}. *** {{description}}
{{/actions}}

<br>
>____
> ##### Information
> Alignment: {{alignmentDescription}}<br>
> Size: {{race.size}}<br>
> Age: {{ageDescription}} **({{ageClassification}})**<br>
> Height: {{heightDescription}} **({{heightClassification}})**<br>
> Weight: {{weightDescription}} **({{weightClassification}})**<br>

\`\`\`
\`\`\`

<div class='descriptive'>
##### Background: {{background.name}}
<br>
***Trait.*** {{personalityTrait}}
<br>
***Ideal.*** {{ideal}}
<br>
***Bond.*** {{bond}}
<br>
***Flaw.*** {{flaw}}
</div>

<style>
  /* Printer Friendly A4 */
  .phb {
    background : white;
    width : 210mm;
    height : 296.8mm;
  }
  .phb hr+blockquote {background: white;}
</style>