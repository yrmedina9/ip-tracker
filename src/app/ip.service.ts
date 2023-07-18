import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IpDetails } from 'src/ip-details';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  // Please do not use my API key
  APIKey = '55jm8y5wml3pgm6y';
  // Pretty Please

  constructor(private http : HttpClient) { }

  getIpDetails(ip: string) : Observable<IpDetails | undefined> {
    return this.http.get<IpDetails | undefined>(`https://api.ipregistry.co/${ip}?key=${this.APIKey}`)
    .pipe(
      catchError(this.handleError<IpDetails | undefined>(undefined))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead


    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
