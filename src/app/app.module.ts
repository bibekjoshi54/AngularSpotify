import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApproutingModule } from 'app/approuting/approuting.module';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from 'app/services/spotify.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, ApproutingModule, ReactiveFormsModule, HttpModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
