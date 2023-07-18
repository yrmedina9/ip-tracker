import { Component } from '@angular/core';
import { IpGeolocationService } from '../../data/ip-geolocation.service';
import { Location } from '../../domain/location.model';

@Component({
  selector: 'app-ip-tracker',
  templateUrl: './ip-tracker.component.html',
  styleUrls: ['./ip-tracker.component.scss'],
})
export class IpTrackerComponent {
  ipAddress: string = '';
  location: string = '';
  timezone: string = '';
  isp: string = '';
  longitude: number = 0;
  latitude: number = 0;
  constructor(private ipTrackerService: IpGeolocationService) {}

  trackIP(ipAddress: string): void {
    this.ipTrackerService
      .getLocationByIp(ipAddress)
      .subscribe((location: Location) => {
        this.longitude = location.lng;
        this.latitude = location.lat;
        this.ipAddress = ipAddress;
        this.location = `${location.city}, ${location.region}, ${location.country} ${location.postalCode}`;
        this.timezone = `UTC ${location.timezone}`;
        this.isp = location.isp;
      });
  }
}
