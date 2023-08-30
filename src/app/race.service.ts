import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Race } from './race';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class RaceService {

  private racesUrl = 'api/races';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET races from the server */
  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.racesUrl)
      .pipe(
        tap(_ => this.log('fetched races')),
        catchError(this.handleError<Race[]>('getRaces', []))
      );
  }

  /** GET race by location. Return `undefined` when id not found */
  getRaceNo404<Data>(location: string): Observable<Race> {
    const url = `${this.racesUrl}/?location=${location}`;
    return this.http.get<Race[]>(url)
      .pipe(
        map(races => races[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} race location=${location}`);
        }),
        catchError(this.handleError<Race>(`getRace location=${location}`))
      );
  }

  /** GET race by location. Will 404 if id not found */
  getRace(location: string): Observable<Race> {
    const url = `${this.racesUrl}/${location}`;
    return this.http.get<Race>(url).pipe(
      tap(_ => this.log(`fetched race location=${location}`)),
      catchError(this.handleError<Race>(`getRace location=${location}`))
    );
  }

  /* GET races whose name contains search term */
  searchRaces(term: string): Observable<Race[]> {
    if (!term.trim()) {
      // if not search term, return empty race array.
      return of([]);
    }
    return this.http.get<Race[]>(`${this.racesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found races matching "${term}"`) :
         this.log(`no races matching "${term}"`)),
      catchError(this.handleError<Race[]>('searchRaces', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new race to the server */
  addRace(race: Race): Observable<Race> {
    return this.http.post<Race>(this.racesUrl, race, this.httpOptions).pipe(
      tap((newRace: Race) => this.log(`added race w/ location=${newRace.location}`)),
      catchError(this.handleError<Race>('addRace'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteRace(location: string): Observable<Race> {
    const url = `${this.racesUrl}/${location}`;

    return this.http.delete<Race>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted race location=${location}`)),
      catchError(this.handleError<Race>('deleteRace'))
    );
  }

  /** PUT: update the race on the server */
  updateRace(race: Race): Observable<any> {
    return this.http.put(this.racesUrl, race, this.httpOptions).pipe(
      tap(_ => this.log(`updated race location=${race.location}`)),
      catchError(this.handleError<any>('updateRace'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RaceService: ${message}`);
  }
}