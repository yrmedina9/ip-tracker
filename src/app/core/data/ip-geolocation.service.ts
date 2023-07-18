import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Location } from '../domain/location.model';

@Injectable({
  providedIn: 'root',
})
export class IpGeolocationService {
  private apiKey = 'at_NHP9byy9uSepdlK7kv8nWnVJSog2h&';
  private apiUrl = 'https://geo.ipify.org/api/v1';

  constructor(private http: HttpClient) {}

  getLocationByIp(ipAddress: string): Observable<Location> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&ipAddress=${ipAddress}`;
    return this.http
      .get<Location>(url)
      .pipe(map((response: any) => ({...response.location , isp:response.isp})))
  }
}
