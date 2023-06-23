import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReglesComponent } from './regles/regles.component';
import { CartesPoolComponent } from './cartes-pool/cartes-pool.component';
import { GameroomComponent } from './gameroom/gameroom.component';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuComponent } from './menu/menu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';

@NgModule({
  declarations: [
    AppComponent,
    ReglesComponent,
    CartesPoolComponent,
    GameroomComponent,
    ConnexionComponent,
    MenuComponent,
    AcceuilComponent,
    MatchmakingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
