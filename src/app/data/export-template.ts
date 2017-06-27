/* tslint:disable:max-line-length */

export const ExportTemplate =
  `# {{name}}
### {{class.name}} ({{classArchetype.name}})
##### {{genderDescription}} {{raceDescription}}

>____
> ##### Information
> Alignment: {{alignmentDescription}}<br>
> Size: {{race.size}}<br>
> Age: {{ageDescription}} **({{ageClassification}})**<br>
> Height: {{heightDescription}} **({{heightClassification}})**<br>
> Weight: {{weightDescription}} **({{weightClassification}})**<br>

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

\`\`\`
\`\`\`

___
> ## {{name}}
>*{{race.size}} {{race.type}}, {{alignmentDescription}}*
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
> - **Senses** passive Perception{{#sensesString}}, {{/sensesString}}{{sensesString}}
> - **Languages** {{languagesString}}
> ___
{{#otherFeatures}}
> ***{{name}}. *** {{description}}
> 
{{/otherFeatures}}
> ### Actions
{{#activeFeatures}}
> ***{{name}}. *** {{description}}
{{/activeFeatures}}

<style>
  /* Printer Friendly A4 */
  .phb {
    background : white;
    width : 210mm;
    height : 296.8mm;
  }
  .phb hr+blockquote {background: white;}
</style>`;
