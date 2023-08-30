import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }