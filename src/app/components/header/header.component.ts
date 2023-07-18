import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchIP: EventEmitter<string> = new EventEmitter<string>();
  ipAddress: string = '190.255.36.100';

  trackIP(event: Event): void {
    event.preventDefault();
    this.searchIP.emit(this.ipAddress);
  }
}
