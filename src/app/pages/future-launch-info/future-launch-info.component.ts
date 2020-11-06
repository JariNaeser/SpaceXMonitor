import { Component, OnInit } from '@angular/core';
import { LaunchService } from 'src/app/services/launchService';

@Component({
  selector: 'app-future-launch-info',
  templateUrl: './future-launch-info.component.html',
  styleUrls: ['./future-launch-info.component.css']
})
export class FutureLaunchInfoComponent implements OnInit {

  private futureLaunch;

  constructor(private launchService:LaunchService) { }

  ngOnInit() {
    this.launchService.getFutureLaunch().subscribe(data => {
      //Success
      this.futureLaunch = data;
    }, error => {
      //Error
    }); 

    if(this.futureLaunch.length == 0){
      this.futureLaunch = JSON.parse(localStorage.getItem("futureLaunch"));
    }
  }

}
