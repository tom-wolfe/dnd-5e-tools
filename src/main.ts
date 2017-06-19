import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

import * as Markov from "./markov";

const chain = new Markov.MarkovChain<string>(2);

const names = [
  "Wilcome",
  "Waldolanus",
  "Engilbert",
  "Cyr",
  "Leodegar",
  "Gilbert",
  "Arbitio",
  "Merimas",
  "Doderic"
]

names.forEach(name => {
  chain.add(name.split(""));
});

for (let x = 0; x < 10; x++) {
  console.log(chain.walk().join(""));
}

platformBrowserDynamic().bootstrapModule(AppModule);
