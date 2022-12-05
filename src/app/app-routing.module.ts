import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeGameComponent } from './pages/content/free-game/free-game.component';
import { TestComponent } from './pages/content/test/test.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'free-game',
    component:FreeGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
