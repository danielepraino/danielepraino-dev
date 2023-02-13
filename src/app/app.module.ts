import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { BioComponent } from './components/bio/bio.component';
import { WorksComponent } from './components/works/works.component';
import { WorkComponent } from './components/works/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    FooterComponent,
    SkillsComponent,
    SkillComponent,
    BioComponent,
    WorksComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
