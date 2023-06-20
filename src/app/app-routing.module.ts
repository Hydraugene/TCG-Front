import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameroomComponent } from './gameroom/gameroom.component';
import { ReglesComponent } from './regles/regles.component';

const routes: Routes = [
  {path : '', component : AppComponent},
  {path : 'testroom', component : GameroomComponent},
  {path : 'rules', component : ReglesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
