import { Languages, Skills } from "../../data";
import { Classes as ClassesImport } from "./class-list";
import * as ClassModels from "../../models/classes";

namespace Classes {
    export const Barbarian: ClassModels.Class = {
        name: "Barbarian",
        nameFormat: "{{archetype}} {class}}",
        reference: { source: "PHB", page: 127, url: "https://www.dndbeyond.com/characters/classes/barbarian" }
    };

    ClassesImport.ClassList[Barbarian.name] = Barbarian;
};
