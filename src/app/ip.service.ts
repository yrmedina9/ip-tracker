import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IpDetails } from 'src/ip-details';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  APIKey = '55jm8y5wml3pgm6y';

  constructor(private http : HttpClient) { }

  getIpDetails(ip: string) : Observable<IpDetails | undefined> {
    return this.http.get<IpDetails | undefined>(`https://api.ipregistry.co/${ip}?key=${this.APIKey}`)
    .pipe(
      catchError(this.handleError<IpDetails | undefined>(undefined))
    );
  }

private handleError<T>(result?: T) {
  return (error: any): Observable<T> => {
    return of(result as T);
  };
}
}
