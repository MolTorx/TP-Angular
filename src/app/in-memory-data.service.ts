import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Race } from './race';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const races = [
      { location: 'Paris', name: 'CircuitA' },
      { location: 'Marseille', name: 'CircuitB' },
      { location: 'Lyon', name: 'CircuitC' },
      { location: 'Nice', name: 'CircuitD' },
      { location: 'Toulouse', name: 'CircuitE' },
      { location: 'Montpellier', name: 'CircuitF' },
      { location: 'Strasbourg', name: 'CircuitG' },
      { location: 'Nantes', name: 'CircuitH' },
      { location: 'Bordeaux', name: 'CircuitI' }
    ];
    return {races};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genLocation(races: Race[]): string {
    return races.length > 0 ? Math.max(...races.map(race => parseInt(race.location))) + 1 + "" : "11";
  }
}