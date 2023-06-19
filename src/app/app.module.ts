import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReglesComponent } from './regles/regles.component';
import { CartesPoolComponent } from './cartes-pool/cartes-pool.component';

@NgModule({
  declarations: [
    AppComponent,
    ReglesComponent,
    CartesPoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
