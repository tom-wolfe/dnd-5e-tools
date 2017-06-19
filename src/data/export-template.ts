export const ExportTemplate =
`# {{character.name}}

>____
> - **Aliases:** [None]
> - **Status:** Alive
> - **Age:** {{age}}
> - **Gender:** {{character.genderDescription}}
> - **Height:** {{character.heightDescription}}
> - **Weight:** {{character.weightDescription}}
> - **Race:** {{character.race.name}} ({{character.subrace.name}})
> - **Occupation:** {{character.class.name}}

___
> ## Base Stats
> ___
> - **Armor Class** {{character.armorClass}} ({{character.equippedArmor}})
> - **Hit Points** {{character.hitPoints}} ({{character.hitPointFormula}})
> - **Speed** {{character.speed.walk}}
>___
>| STR  |  DEX  |  CON  |  INT  |  WIS  |  CHA  |
>|:----:|:-----:|:-----:|:-----:|:-----:|:-----:|
>|8 (-1)|12 (+1)|12 (+1)|14 (+2)|12 (+1)|18 (+4)|
>___
> - **Saving Throws** Wis +4, Cha +7
> - **Skills** Deception +7, Intimidation +7, Insight +4, Persuasion +7, Perception +4
> - **Senses** blindsight 120 ft., passive Perception 14 (18 w/raven)
> - **Languages** Common, Elven, Infernal, Draconic
> ___
> ***Voice of the Chain Master.*** Can speak through your familiar.

<style>
  /* Printer Friendly A4 */
  .phb {
    background : white;
    width : 210mm;
    height : 296.8mm;
  }
  .phb hr+blockquote {background: white;}
</style>
`;
