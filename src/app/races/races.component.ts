import { Component, OnInit } from '@angular/core';

import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: Race[] = [];

  constructor(private raceService: RaceService) { }

  ngOnInit(): void {
    this.getRaces();
  }

  getRaces(): void {
    this.raceService.getRaces()
    .subscribe(races => this.races = races);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.raceService.addRace({ name } as Race)
      .subscribe(race => {
        this.races.push(race);
      });
  }

  delete(race: Race): void {
    this.races = this.races.filter(h => h !== race);
    this.raceService.deleteRace(race.location).subscribe();
  }

}