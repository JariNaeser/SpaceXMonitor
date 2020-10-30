import { Component, Input, OnInit } from '@angular/core';
import { LaunchpadService } from 'src/app/services/launchPadService';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {

  @Input() launchpadId:string;
  private launchpadInfo;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor(private launchpadService:LaunchpadService) { }

  ngOnInit(){
    this.launchpadService.getLaunchpadInfo(this.launchpadId).subscribe(data => {
      //Success
      this.launchpadInfo = data;
    }, error => {
      //Error
    }); 

    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

  }

}
