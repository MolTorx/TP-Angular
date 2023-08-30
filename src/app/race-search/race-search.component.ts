import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-race-search',
  templateUrl: './race-search.component.html',
  styleUrls: [ './race-search.component.css' ]
})
export class RaceSearchComponent implements OnInit {
  races$!: Observable<Race[]>;
  private searchTerms = new Subject<string>();

  constructor(private raceService: RaceService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.races$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.raceService.searchRaces(term)),
    );
  }
}