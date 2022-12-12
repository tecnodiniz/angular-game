import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeBarComponent } from './components/time-bar/time-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SelectSecComponent } from './components/select-sec/select-sec.component';
import { FormsModule } from '@angular/forms';
import { CharSelectComponent } from './components/char-select/char-select.component';
import { BattleLogComponent } from './components/battle-log/battle-log.component';
import { TestComponent } from './pages/content/test/test.component';
import { FreezeTimerComponent } from './components/freeze-timer/freeze-timer.component';
import { BattleCardComponent } from './containers/battle-card/battle-card.component';
import { PlayersBarComponent } from './components/players-bar/players-bar.component';
import {PlayerStatsComponent} from './components/player-stats/player-stats.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { FreeGameComponent } from './pages/content/free-game/free-game.component';
import { BattleTestComponent } from './containers/battle-card-old/battle-test.component';
import { SelectPlayerCardComponent } from './components/select-player-card/select-player-card.component';
import { HowToPlayComponent } from './pages/content/how-to-play/how-to-play.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TitleComponent } from './components/title/title.component';
import { SongComponent } from './components/song/song.component';
import { StartComponent } from './pages/start/start.component';




@NgModule({
  declarations: [
    AppComponent,
    TimeBarComponent,
    HomeComponent,
    SelectSecComponent,
    CharSelectComponent,
    BattleLogComponent,
    TestComponent,
    FreezeTimerComponent,
    BattleCardComponent,
    BattleTestComponent,
    PlayersBarComponent,
    PlayerStatsComponent,
    PlayerProfileComponent,
    CharacterSelectComponent,
    FreeGameComponent,
    SelectPlayerCardComponent,
    HowToPlayComponent,
    PlayerInfoComponent,
    TitleComponent,
    SongComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  exports:[
    TimeBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
