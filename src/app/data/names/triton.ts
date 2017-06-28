import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Triton: Names.NameDefinition = new Names.NameDefinition()
Object.assign(Triton, {
    name: "Triton",
    formats: [{ name: "Forename Surname", formats: ["{forename} {surname}"] }],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "markovOrItem",
            maxLength: 10,
            source: {
                "M": [
                    "abydos", "adeimanthos", "aegon", "aetes", "agathocles", "aigeus", "alcides", "alexarchos", "alkiphron", "ameinias",
                    "amphion", "anakreon", "anaxis", "androcles", "anthemion", "antipatros", "apisaon", "archesilaus", "argaeus",
                    "aristarchus", "aristomachos", "arridaios", "aschines", "asterion", "atreus", "autesion", "bacchylides", "bathyaes",
                    "borus", "cöon", "cebriones", "chalcon", "chersis", "chrysaor", "cisseus", "cleonicus", "coenus", "crathis",
                    "ctesippus", "cyrenios", "damianos", "davos", "demarmenos", "demonous", "diadumenus", "dionysophanes", "dolops",
                    "dromeus", "echemmon", "elatreus", "eniopus", "epeius", "epizelos", "erxandros", "euanthes", "euenius", "eumastas",
                    "euphorion", "eurydemos", "eurysthenes", "eutychides", "exaduis", "gennadios", "gorgos", "hagnon", "harpocras",
                    "helicaon", "hermippos", "heromenes", "hippokratides", "hippotion", "hyperenor", "iasos", "idas", "inaros", "iphitus",
                    "ismenios", "kalchas", "kallipides", "karopophores", "kerameikos", "koinos", "kritias", "kyrios", "lampus", "leagros",
                    "leonidas", "licymnios", "lycoris", "lysanios", "maeon", "maron", "megadates", "melampos", "melicertes", "menexinos",
                    "methodios", "mikkos", "moeris", "mulius", "naubolus", "nestor", "nicon", "nisos", "ochos", "oenomaus", "onesilos",
                    "orcus", "orsiphantes", "pallans", "panites", "parthenopaeus", "pedocles", "pelonus", "periclymenus", "peteos",
                    "phalinos", "pheidippides", "philaon", "philocypros", "philon", "phintias", "phorbas", "phylas", "pixodarus",
                    "podaroes", "polyctor", "polymedes", "porphyrios", "praxites", "prokrustes", "prytanis", "pyrrhus", "ribes", "schedius",
                    "sicinnos", "sippas", "sosibios", "speudon", "sthenelus", "syagros", "taureas", "telephus", "tereus", "tharybis",
                    "theodekles", "theopompos", "thersandros", "thorax", "thymoetes", "timesithius", "tisandros", "triton", "tymnes",
                    "xenophanes", "zethus"
                ],
                "F": [
                    "achradina", "actë", "adeia", "aegiolea", "aerope", "agamede", "agape", "agarista", "agathonice", "aglaia",
                    "aikaterine", "aketa", "alcestis", "alcmene", "alemene", "althaea", "althea", "amathea", "amphithoe", "ampinomene",
                    "anais", "andromeda", "anteia", "anthousa", "anticleia", "antiochis", "anysia", "apseudes", "arethusa", "ariadne",
                    "aristonike", "arsinoe", "artemisia", "astera", "astyocheia", "atë", "auge", "autonoe", "axiothea", "basiane",
                    "berenike", "briseis", "caleope", "callianessa", "calypso", "castianiera", "chione", "chloë", "chryse", "chrysothemis",
                    "cilla", "clio", "clymere", "corythia", "creusa", "ctimene", "cydippe", "cymothoe", "cythereia", "damaris", "danaë",
                    "deineira", "deipyle", "demetria", "dexamene", "diomede", "dirce", "dorothea", "drosis", "egeria", "eidothee",
                    "elcmene", "elpir", "enyo", "epicaste", "erigone", "eriphyle", "eucarpia", "eunice", "euphro", "europa", "eurydike",
                    "evadne", "glauce", "gorgo", "haidee", "harmodias", "hecuba", "hekaline", "helice", "heliodora", "helle", "hermione",
                    "herophile", "hilaera", "hippodamia", "hypsipyle", "iaera", "ianessa", "ino", "iolanthe", "iomene", "iphianassa",
                    "iphimedeia", "iphitheme", "iris", "ismene", "jocasta", "kallixeina", "katana", "kephissa", "khlöe", "kleio", "klymene",
                    "koré", "kydilla", "kynthia", "kyra", "lais", "lampetie", "lanike", "laodamia", "laothoe", "latona", "lede",
                    "leucothea", "limnoreia", "lyra", "maera", "maiandria", "medea", "megaera", "megare", "melantho", "melita", "menelaia",
                    "metis", "milo", "molpadia", "monime", "myrine", "neaera", "nephele", "nicopolis", "nikasepolis", "niobe", "oenone",
                    "olympias", "oreithuia", "orithyia", "otonia", "panope", "parthenia", "pasiphae", "penelope", "percalus", "periboea",
                    "perse", "persis", "pervinca", "phaedre", "phaia", "pherusa", "philea", "philomache", "philona", "phryne", "phylia",
                    "phylo", "podarge", "polydamna", "polymede", "procne", "prone", "protogonia", "psyche", "pyrrha", "raisa", "rhene",
                    "rhode", "roxane", "scylla", "semele", "sotera", "stheneboea", "tecmessa", "thais", "thaleia", "thebe", "themis",
                    "theophane", "theophano", "thessala", "thetis", "thoë", "thyia", "timo", "tryphosa", "xanthe", "xantippe", "xenophile",
                    "zita"
                ]
            }
        },
        surname: {
            mode: "markovOrItem",
            markovOrder: 2,
            source: {
                "N": [
                    "agne", "agnes", "alanis", "alexopoulos", "ambrosia", "anagnos", "anastas", "anastos", "andreadis", "andreas", "andris",
                    "angelis", "angelopoulos", "anthes", "anthis", "antoni", "antoniou", "antonopoulos", "apostolos", "apostolou",
                    "argyros", "artino", "arvanitis", "asker", "athan", "athanas", "athanasiou", "athans", "athas", "bakas", "bakas",
                    "balaban", "ballas", "balli", "ballis", "ballis", "banis", "barba", "barbas", "barberis", "barlas", "baros", "bella",
                    "biros", "booras", "boosalis", "bouras", "buros", "callas", "callas", "callis", "caras", "caras", "carras",
                    "castellanos", "chaconas", "chontos", "chris", "christakos", "christodoulou", "christopoulos", "christos", "christou",
                    "chronis", "collias", "comis", "condos", "constantinides", "constantinou", "contos", "cosmos", "cosse", "costas",
                    "delis", "dellis", "demetriou", "demo", "demopoulos", "demos", "dimitriou", "doukas", "drakos", "drivas", "drivas",
                    "dukas", "economides", "economos", "economou", "eliades", "elias", "eliopoulos", "floros", "fotopoulos", "fotos",
                    "frangos", "gabris", "galanis", "galanos", "galatas", "ganas", "ganas", "ganis", "garis", "gekas", "georgas",
                    "georgiades", "georgiadis", "georgiou", "georgopoulos", "german", "gerou", "gianakos", "giannopoulos", "gianopoulos",
                    "gikas", "glaros", "goga", "gogola", "golias", "gonce", "goulas", "gounaris", "grivas", "halkias", "hallas", "hanas",
                    "harris", "hatzis", "hero", "herod", "hondros", "ioannou", "kairis", "kakos", "kalfas", "kalivas", "kallas", "kallis",
                    "kamber", "kanas", "kanelos", "kappas", "kara", "karahalios", "karalis", "karalis", "karas", "karras", "karras",
                    "katsaros", "kazan", "kefalas", "kellis", "kokes", "kollias", "kondos", "kontos", "korba", "kormos", "kosko", "kosta",
                    "kostas", "kostopoulos", "kotas", "kotas", "kouris", "kritikos", "ladas", "lagana", "lagos", "lambros", "lampros",
                    "laskaris", "lasko", "lazos", "lekas", "leos", "leva", "leventis", "liakos", "lias", "lillis", "linard", "livas",
                    "logo", "lois", "loris", "loukas", "macris", "maheras", "makos", "makris", "mallas", "mangas", "maniatis", "manikas",
                    "manis", "manolis", "manos", "maragos", "maras", "marinos", "maris", "markos", "martis", "mate", "mates", "matis",
                    "mattas", "mattas", "matthias", "mavros", "mega", "melis", "mellas", "mellis", "mena", "metaxas", "metro",
                    "michaelides", "michel", "mihal", "mikos", "milas", "milonas", "mina", "minas", "minga", "mires", "miron", "misko",
                    "mola", "moraitis", "moros", "mula", "mundis", "myron", "nanos", "nanos", "nasso", "nicolaides", "nicolaou",
                    "nicoli", "nicolo", "nikas", "nikitas", "nikolas", "nini", "nino", "pagonis", "pagonis", "palas", "pallas",
                    "panagakos", "panagopoulos", "panagos", "panas", "panas", "panos", "papa", "papadakis", "papadopoulos",
                    "papageorgiou", "papas", "pappas", "patera", "patras", "paules", "paulos", "pavlis", "penna", "pepi", "pepi", "pepi",
                    "peri", "peris", "perris", "perro", "petrakis", "petralia", "petras", "petrides", "petro", "petropoulos", "petros",
                    "petrou", "pipes", "polites", "politis", "politis", "poulos", "primo", "psomas", "pulos", "rallis", "raptis", "regas",
                    "rella", "remes", "remis", "rigas", "rines", "roda", "rodi", "rodia", "rodis", "rodis", "rokos", "romanos", "ronda",
                    "rondo", "rosi", "rosso", "rota", "roussos", "rubis", "rubis", "sagona", "salis", "sallas", "sallis", "samaras",
                    "sanna", "sarantos", "sarkis", "sarris", "sava", "savas", "sica", "sideris", "simos", "simos", "simos", "siska",
                    "sisko", "soter", "sotir", "sotiropoulos", "soulis", "spanos", "speros", "spiros", "stamas", "stamatis", "stamos",
                    "stanis", "stathakis", "stathis", "stathopoulos", "stathos", "stavropoulos", "stavros", "stavrou", "stratis", "stratos",
                    "takes", "tassi", "tasso", "tavoularis", "teresi", "terzi", "thanos", "theodorou", "thoma", "tocci", "toles", "tomaras",
                    "toto", "trakas", "tripi", "valis", "vallas", "valli", "vallis", "varela", "vasco", "vasil", "vasilakis", "vasiliou",
                    "vassos", "velis", "vidales", "vitalis", "vlachos", "vlahakis", "vlahos", "xenakis", "xenos", "zenon", "zervas",
                    "zervos", "zika", "zografos"
                ]
            }
        }
    }
});

NameList.push(Triton);
