import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details-component.html',
  styleUrls: ['./details-component.scss'],
})
export class DetailsComponent {
  @Input() ipAddress: string = '';
  @Input() location: string = '';
  @Input() timezone: string = '';
  @Input() isp: string = '';
}
