

export class ItemDefinition {
    name: string;
    iconClass: string;
    nameFormats: string[];
    descriptionFormats: string[];
    parts: { [index: string]: string[] };
};
