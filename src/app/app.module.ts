import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonInfoGridComponent } from './components/pokemon-info-grid/pokemon-info-grid.component';

@NgModule({
  declarations: [AppComponent, PokemonInfoGridComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
