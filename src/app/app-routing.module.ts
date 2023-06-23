import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameroomComponent } from './gameroom/gameroom.component';
import { ReglesComponent } from './regles/regles.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';

const routes: Routes = [
  {path : '', component : AcceuilComponent},
  {path : 'gameroom', component : GameroomComponent},
  {path : 'matchmaking', component : MatchmakingComponent},
  {path : 'rules', component : ReglesComponent},
  {path : 'connexion', component: ConnexionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
