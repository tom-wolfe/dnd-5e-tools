import * as Items from "../../models/items";
import { ItemTypeList } from "./item-type-list";

/* cSpell:disable */

export const Book: Items.ItemDefinition = new Items.ItemDefinition();
Object.assign(Book, {
    name: "Book",
    iconClass: "fa-book",
    nameFormats: [
        "Heraldry of {historicalPeriod}",
        "Great Battles of {historicalPeriod}",
        "{historicalPeriod}'s Greatest Generals",
        "Better than the Wheel: {historicalPeriod}'s Inventions",
        "Secret Societies of {historicalPeriod}",
        "Myths & Legends of {historicalPeriod}",

        "Best Collections of {object}",
        "How I Made a Fortune in {object}",
        "Going Long: {object} Investing",
        "Increasing the Value of Your {object}",
        "Decorative {object}",
        "Evaluating {object}: Quality & Beauty",

        "{name}: The Greatest {magic} Practitioner",
        "Tales of {magic}",
        "{magic}, A History",
        "Lost Spells of {magic}",
        "Secret Formulas of {magic}",
        "Using {magic} When Bound",
        "Effects of the Elements on {magic}",
        "{magic} Gone Awry and How to Control It",
        "{magic} in Warfare",

        "Ecology of the {creature}",
        "The {creature} Cookbook",
        "Binding the {creature}",
        "{creature}: Origins of the Species",
        "Poisons Derived from the {creature}",
        "Riddle of the {creature}",
        "Riddle of the {creature}",
        "The Fate of the {creature}",
        "A Guide to {creature} Anatomy",
        "Distributions of {creature} Populations",
        "Food Habits and Prey Selection of the {creature}",
        "Food Habits of the {creature} in {historicalPeriod}",
        "A History of the {creature}",
        "Comparative Growth of the Wild Male and Female {creature}",
        "A Study on {creature} Breeding",
        "Mating Habits of the {creature}",

        "A Guide to Better {trade}",
        "Beginner's Guide to {trade}",
        "{trade} Techniques",
        "Effective {trade}",
        "Building a {trade}-based Business",
        "Your First Year in {trade}",

        "Conquests of {name}",
        "Catalog of Miracles Performed by {name}",
        "Philosophies of {name}",
        "Collected Stories by {name}",
        "Recipes from {name}'s Kitchen",
        "Travels of {name}",

        "Secret Teachings of {faith}",
        "Comparing & Contrasting {faith}",
        "Follies of {faith}",
        "Proof of {faith}",
        "Great Miracles of {faith}",
        "Inner Peace Through {faith}",
        "Wars of {faith}",

        "Re-inventing the {technology}",
        "Building Your Own {technology}",
        "Safety First: {technology} by Example",
        "A Better Mousetrap: {technology}",
        "{technology} in Warfare",

        "Abuse of Power: {faith}'s Great Crisis",
        "{name}'s Impact on {faith}",
        "Using {faith} to Power {magic}",
        "The Abuse of {faith} by {name}",
        "{name}'s Struggles and Triumphs Through {faith}",

        "Combining {magic} and {magic}",
        "{technology} and {magic}",
        "Suffusing {technology} with {magic}",
        "{magic} Spells of the Great {name}",
        "{magic} Research Notes of {name}",
        "{magic} During the {historicalPeriod}",
        "Journal of {name} on {magic}",

        "{historicalPeriod}: A Critical Review",
        "{historicalPeriod}'s Impact on Daily Life",
        "{name}: The Greatest General of {historicalPeriod}",
        "Forgotten Magics of {historicalPeriod}",
        "Great Monuments of {historicalPeriod}",
        "The Remnants of {historicalPeriod}",
        "Memories of {historicalPeriod}",

        "{name}'s {object} Price Guide",
        "Effective Care of {object}",
        "Introduction to {object}",
        "Guide to Selling {object}",
        "Mining for {object}",
        "Making {object} More Beautiful",

        "{name}'s Guide to {magic}",
        "Augmented {magic}",
        "Introductory {magic}",
        "Secrets of {magic}",
        "Advanced {magic} Techniques",
        "Useful {magic} Techniques",

        "Failing at {trade} And How to Do Better",
        "Improve Your {trade} Game",
        "Complete {trade}",
        "Peasant's Guide to {trade}",
        "101 Problems in {trade} & How to Overcome Them",
        "Great Achievements of {trade}",

        "{name}'s Guide to the {creature}",
        "Great Leaders of the {creature}",
        "Strategies & Tactics of the {creature}",
        "To Serve {creature}",
        "Harvesting {creature} for Magical Components",
        "Harvesting {creature} for Ingredients",

        "Letters of {name} and {name}",
        "The Sainthood of {name}",
        "Songs of {name}",
        "Trials and Triumphs of {name}",
        "A Person of Change: {name}",
        "Great Leader: {name} the Magnificent",

        "Interpreting the Holiest Book of {faith}",
        "Origins of {faith}",
        "The End Times: Analyzing {faith}'s Predictions",
        "{faith} in our Time",
        "The {faith} Hymnal",
        "Why {faith} Must be Destroyed (& How to Do It)",

        "Applied {technology}",
        "Modern {technology} Applications",
        "20 Diagrams & Explanations to Improve {technology}",
        "{name}'s Influence on {technology}",
        "Overpowering {technology}",

        "{faith}'s of the {historicalPeriod}",
        "Comparing {faith} with {faith}",
        "{faith}'s Contributions to {technology}",
        "{faith} During the Great Crisis of {historicalPeriod}",
        "Resurgence of {faith} in our Times",
        "Undermining {faith}",

        "Battles of {historicalPeriod} Using {magic}",
        "{faith} and {magic}: A Fearsome Combination",
        "{faith} vs. {technology}",
        "{name}'s Greatest Achievements Using {magic}",
        "Moving on from {magic} to {magic}",
        "Origins of {magic}",
        "An Elementary Look at {plane}",

        "Geography of the {plane}",
        "Flora of the {plane}",
        "Fauna of the {plane}",
        "A Study of the {plane}",
        "The {plane}: An Adventurer's Guide",
        "Ecology of the {plane}",
        "{name}'s Journey on the {plane}",
        "Beyond the {plane}",
        "Understanding the {plane}",
        "Secrets of the {plane}",
        "Manual of the {plane}",
        "An Elementary Look at the {plane}",
    ],
    descriptionFormats: [
        "A {size} book that {condition} and {feature}. It is written in {language} by {name}.",
        "A {size} book that {condition} and {feature}. It is written in Common by {name}.",
        "A {size} book that {condition} and {specialFeature}. It is written in Common by {name}.",
        "A {size} book that {condition} and {specialFeature}. It is written in {language} by {name}."
    ],
    parts: {
        condition: [
            "is crumbling",
            "is in pristine condition",
            "has a few minor tears",
            "is well-used, but complete",
            "has been read once, only shelf wear",
            "is well-used, spine rolled",
            "is old and worm-infested",
            "is new but partially burned",
            "is nearly new but heavily annotated",
            "is usable but has discoloured edges",
            "is slightly used",
            "is well-used, but repaired"
        ],
        creature: [
            "Unicorn", "Centaur", "Troll", "Dragon", "Drake", "Wyrm", "Owlbear", "Beholder", "Goblin", "Kobold", "Kraken",
            "Wyvern", "Sea Beast", "Genie", "Djinn", "Giant", "Orc", "Ogre", "Xorn", "Aboleth", "Black Dragon", "Blue Dragon",
            "Green Dragon", "Red Dragon", "White Dragon", "Gold Dragon", "Silver Dragon", "Brass Dragon", "Bronze Dragon",
            "Copper Dragon", "Air Elemental", "Allosaurus", "Androsphynx", "Ankheg", "Ankylosaurus", "Azer", "Balor", "Banshee",
            "Barbed Devil", "Basilisk", "Bearded Devil", "Behir", "Wyrmling", "Blink Dog", "Pudding", "Black Pudding", "Devil",
            "Bone Devil", "Bugbear", "Bulette", "Centaur", "Chain Devil", "Chimera", "Chuul", "Golem", "Cloaker", "Cloud Giant",
            "Cockatrice", "Couatl", "Cyclops", "Darkmantle", "Deva", "Djinni", "Doppelganger", "Dragon Turtle", "Dretch", "Drider",
            "Dryad", "Mephit", "Earth Elemental", "Elemental", "Efreeti", "Drow", "Erinyes", "Ettercap", "Ettin", "Fire Elemental",
            "Fire Giant", "Flameskull", "Frost Giant", "Ghast", "Gelatinous Cube", "Glabrezu", "Gnoll", "Svirfneblin", "Gorgon",
            "Ooze", "Hag", "Grick", "Griffon", "Grimlock", "Naga", "Gynosphinx", "Harpy", "Hell Hound", "Hezrou", "Hill Giant",
            "Hippogriff", "Hobgoblin", "Homonculus", "Ice Devil", "Hydra", "Imp", "Manticore", "Merrow", "Nothic", "Oni", "Otyugh",
            "Purple Worm", "Rakshasa", "Roc", "Satyr", "Spectator", "Stirge", "Storm Giant", "Succubus", "Incubus", "Wraith",
            "Yeti", "Worg"
        ],
        faith: [
            "Emptiness", "The Raven Queen", "The Balance", "Enlightenment", "The Way", "Foregiveness", "The Vessel", "Death",
            "The Cleansing Flame", "The Dyling Light", "The Open Hand", "The Serpent's Fang", "The Victenti", "The Weavers"
        ],
        feature: [
            "has dog-eared pages",
            "has a bookmark in the form of a map fragment",
            "has hand-colored diagrams",
            "includes a library card",
            "is a collectible first edition",
            "has the owner's name inside the cover",
            "is signed and numbered by the author"
        ],
        historicalPeriod: [
            "The Ancients", "The Bronze Age", "The Time of Troubles", "The Iron Age", "The Age of Steel", "The Great War",
            "The Age of Strife", "The Holy Wars", "The Age of Heroes", "The Age of Invention", "The Time of Magic", "Current Days",
            "The Latter Days", "The Halcyon Days", "The Dawning", "The Demon War", "The First Melody", "The Clash of the Titans",
            "The Age of Magic", "The Second Symphony", "The Calamity", "The Rycelion"
        ],
        magic: [
            "Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation",
            "Path Magic", "Blood Magic", "Rune Magic", "Elemental Magic", "Magic", "Alchemy", "Natural Magic", "Talismanic Magic",
            "Ceremonial Magic", "Invocative Magic", "Fiendish Magic", "Fey Magic", "Divinatory Magic", "Infernal Magic",
            "Abyssal Magic", "Planar Magic", "Material Magic", "Astral Magic", "Chaos Magic"
        ],
        object: [
            "Rare Coins", "Rare Antiques", "Precious Artwork", "Weapons", "Sapphires", "Emeralds", "Jade", "Diamonds", "Silver",
            "Gold", "Adamantine", "Mithril", "Opals", "Onyx", "Rubies", "Amber", "Peridot"
        ],
        plane: [
            "Ethereal Plane", "Prime Material", "Astral Plane", "Outer Planes", "Abyss", "Positive Energy Plane", "Negative Energy Plane",
            "Air Elemental Plane", "Fire Elemental Plane", "Water Elemental Plane", "Earth Elemental Plan", "Celestial Plane",
            "Shadow Plane", "Shadowfell", "Eterna"
        ],
        size: [
            `small (5"x7") but thick (2"+)`,
            `medium (8"x10") and thick (2"+)`,
            `large (14"x20") and thick (2"+)`,
            `small (5"x7") and medium thickness (&frac12;&ndash;1")`,
            `medium (8"x10") and medium thickness (&frac12;&ndash;1")`,
            `large (14"x20") and medium thickness (&frac12;&ndash;1")`,
            `small (5"x7") but thin (&frac14;")`,
            `medium (8"x10") but thin (&frac14;")`,
            `large (14"x20") but thin (&frac14;")`,
            `small (5"x7") but just several pages`,
            `medium (8"x10") but just several pages`,
            `large (14"x20") but just several pages`
        ],
        specialFeature: [
            "page {number} follows page {number}&mdash;and no page bits are in the spine. The table of contents or index may have clues",
            "the book naturally opens to page {number}",
            "a small, flat object is hidden in the book's spine",
            "if you hold a page to the light, diagrams on the front and back combine to form a message or map",
            "letters circled on page {number} spell a coded message",
            "folding a page combines an illustration on one page with an illustration on the next page",
            "a picture is actually a map if you look only at the blues",
            "a note is hidden behind the back inside cover",
            "something is written on the inside cover in lemon ink",
            "several pages have been deceptively replaced",
            "the back inside cover is cut in a way that creates a built in slide rule"
        ],
        technology: [
            "Mills", "Clocks", "Clockwork", "Steampower", "Aqueducts", "Armor", "Torture Devices", "Weapons", "Alkalis", "Acids", "Poison",
            "Gun Powder", "Missile Weapons", "Siege Engines", "Catapults", "Trebuchets", "Castle Walls", "Firearm"
        ],
        trade: [
            "Carpentry", "Sailing", "Blacksmithing", "Herbalism", "Alchemy", "Pottery", "Masonry", "Fishing", "Farming", "Cooking",
            "Mining", "Cartography", "Scribing", "Apothecaring", "Falconry", "Hunting", "Painting", "Sculpting", "Composing", "Writing",
            "Shoemaking", "Locksmithing", "Haberdashing", "Smithing", "Carving", "Singing", "Performing", "Acting", "Dancing", "Tutoring",
            "Teaching", "Stewarding", "Milling", "Butchery", "Drapery", "Weaving", "Baking", "Squiring", "Tailoring", "Brewing"
        ]
    }
});

ItemTypeList.push(Book);
