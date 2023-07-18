import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() latitude: number = 4.5709;
  @Input() longitude: number = -74.2973;
  @Input() zoom: number = 6;
  map!: L.Map;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap() {
    this.map = L.map('map').setView([this.latitude, this.longitude], this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);

    L.marker([this.latitude, this.longitude]).addTo(this.map);
  }
}
