import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent }    from './app.component';
import { HomeComponent }   from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SpotifyService }  from './services/spotify.service';

import {APP_ROUTING}       from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
