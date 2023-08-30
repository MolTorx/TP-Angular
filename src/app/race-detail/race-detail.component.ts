import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: [ './race-detail.component.css' ]
})
export class RaceDetailComponent implements OnInit {
  race: Race | undefined;

  constructor(
    private route: ActivatedRoute,
    private raceService: RaceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRace();
  }

  getRace(): void {
    const location = this.route.snapshot.paramMap.get('location')!;
    this.raceService.getRace(location)
      .subscribe(race => this.race = race);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.race) {
      this.raceService.updateRace(this.race)
        .subscribe(() => this.goBack());
    }
  }
}