import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavbarComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
