import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeGameComponent } from './pages/content/free-game/free-game.component';
import { HowToPlayComponent } from './pages/content/how-to-play/how-to-play.component';
import { TestComponent } from './pages/content/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {
    path:'',
    component:StartComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'free-game',
    component:FreeGameComponent
  },
  {
    path:'how-to',
    component:HowToPlayComponent
  },
  {
    path:'404',
    component:StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
