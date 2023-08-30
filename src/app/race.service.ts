import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Race } from './race';
import { RACES } from './mock-races';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class RaceService {

  constructor(private messageService: MessageService) { }

  getRaces(): Observable<Race[]> {
    const races = of(RACES);
    this.messageService.add('RaceService: fetched races');
    return races;
  }
}