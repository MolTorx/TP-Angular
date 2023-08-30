import { Component } from '@angular/core';
import { Race } from '../race';
import { RACES } from '../mock-races';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})

export class RacesComponent {

  races = RACES;
  selectedRace?: Race;

  onSelect(race: Race): void {
    this.selectedRace = race;
  }
}