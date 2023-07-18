import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit{
  map? : L.Map;
  marker? : L.Marker;
  @ViewChild('map') mapDiv!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.map = L.map(this.mapDiv.nativeElement, {
      center: [47.56, 19.09],
      zoom: 4,
      zoomControl: false
  });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(this.map);
  }

  setLocation(latitude: number, longitude: number) {
    this.marker = L.marker([latitude, longitude]).addTo(this.map!);
    console.log(latitude, longitude);
    this.map!.setView([latitude, longitude], 11);
    this.map!.panInside([latitude, longitude], {
      paddingTopLeft: [0, 300]});
  }

}
