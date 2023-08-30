import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    RaceDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }