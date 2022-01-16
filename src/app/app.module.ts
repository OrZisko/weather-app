import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppHeader } from './cmps/app-header.cmp/app-header.cmp.component';
import { HomeComponent } from './pages/home/home.component';
import { CitySearchComponent } from './cmps/city-search/city-search.component';
import { ForcastsComponent } from './cmps/forcasts/forcasts.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    HomeComponent,
    CitySearchComponent,
    ForcastsComponent,
    FavoritesComponent
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
