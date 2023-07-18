import { Component, Input } from '@angular/core';
import { IpDetails } from 'src/ip-details';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() ipDetails! : IpDetails;

  getAddress() : string {
    return `${this.ipDetails.location.city}  ${this.ipDetails.location.country.name} ${this.ipDetails.location.postal}`;
  }
  getTzOffset() : string {
    const tzInMins = this.ipDetails.time_zone.offset / 60;
    const hours = Math.abs(Math.floor(tzInMins / 60));
    const mins = tzInMins % 60;
    return `${tzInMins > 0 ? '' : '-'}${hours > 10 ? '' : '0'}${hours}:${mins > 10 ? '' : '0'}${mins}`;
  }
}
