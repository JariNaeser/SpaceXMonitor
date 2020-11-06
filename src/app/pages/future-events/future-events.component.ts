import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FutureEventsService } from 'src/app/services/futureEventsService';
import { LaunchService } from 'src/app/services/launchService';

@Component({
  selector: 'app-future-events',
  templateUrl: './future-events.component.html',
  styleUrls: ['./future-events.component.css']
})
export class FutureEventsComponent implements OnInit {

  private futureEvents;

  constructor(private futureEventsService:FutureEventsService, private launchService:LaunchService, private router:Router) { }

  ngOnInit() {
    this.futureEventsService.getFutureEvents().subscribe(data => {
      //Success
      this.futureEvents = data;
    }, error => {
      //Error
    }); 
  }

  setLaunchInfo(launch){
    this.launchService.setFutureLaunch(launch);
    this.router.navigate(['future-launch-info']);
  }

}
