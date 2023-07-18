import { Component, ElementRef, ViewChild } from '@angular/core';
import { IpService } from './ip.service';
import { IpDetails } from 'src/ip-details';
import { MapComponent } from './map/map.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'fadeAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('500ms ease-out', 
                    style({ opacity: 1 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent {
  ipDetails? : IpDetails;
  ip = '';
  @ViewChild('map') map!: MapComponent;
  error = false;
  constructor(private ipService : IpService) {}

  getDetails() {
    if(this.ip !== '') {
      this.ipService.getIpDetails(this.ip).subscribe(res => {
        if(res) {

          this.error = false;
          this.ipDetails = res;
          this.map.setLocation(res.location.latitude, res.location.longitude);
        } else {
          this.error = true;
          this.ipDetails = undefined;
        }
      });
    }
  }
}
