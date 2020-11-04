import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/companyService';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

declare var $ :any;

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  private companyData;
  private geocodeData;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanyInfo().subscribe(data => {
      //Success
      this.companyData = data;

      this.companyService.getHeadquartersCords(this.companyData.headquarters.address + " " + this.companyData.headquarters.city + " " + this.companyData.headquarters.state).subscribe(data => {
        //Success
        this.geocodeData = data;
        
        this.map = new mapboxgl.Map({
          accessToken: environment.mapbox.accessToken,
          container: 'map',
          style: this.style,
          zoom: 13,
          center: [this.geocodeData.features[0].center[0], this.geocodeData.features[0].center[1]]
        });
        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
  
        var marker = new mapboxgl.Marker()
          .setLngLat([this.geocodeData.features[0].center[0], this.geocodeData.features[0].center[1]])
          .addTo(this.map);
      }, error => {
        //Error
      }); 
    }, error => {
      //Error
    }); 

    $(document).ready(function(){
      // @ts-ignore
      twttr.widgets.createTimeline(
        {
          sourceType: "spacex",
          screenName: "SpaceX"
        },
        document.getElementById("tweetContainer")
      );
    })

  }

}
