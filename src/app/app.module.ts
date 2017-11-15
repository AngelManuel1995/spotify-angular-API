import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent }    from './app.component';
import { HomeComponent }   from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SpotifyService }  from './services/spotify.service';
import { SinfotoPipe }     from './pipes/sinfoto.pipe';

import {APP_ROUTING}       from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [ SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
