import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";

import { CharacterGeneratorModule } from "./character-generator/character-generator.module";
import { CoreModule } from "./core/core.module";
import { InitiativeTrackerModule } from "./initiative-tracker/initiative-tracker.module";
import { ItemGeneratorModule } from "./item-generator/item-generator.module";
import { NameGeneratorModule } from "./name-generator/name-generator.module";
import { SharedModule } from "./shared/shared.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CharacterGeneratorModule,
        NameGeneratorModule,
        ItemGeneratorModule,
        InitiativeTrackerModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title "D&D 5th Edition Tools"`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("D&D 5th Edition Tools");
  }));
});
