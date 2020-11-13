import { Component, OnInit } from '@angular/core';
import { LaunchService } from 'src/app/services/launchService';

declare var $ :any;

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
    //Create and start countdown
    this.createCountdown(this.futureLaunch.date_utc, this.futureLaunch.id);
  }

  createCountdown(date:string, id:string){
    //generate function numbers
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
             
        let countDown = new Date(date).getTime(),
        x = setInterval(function() {    
          let now = new Date().getTime(),
            distance = countDown - now;

            $('#daysComponent' + id).text(Math.floor(distance / (day)));
            $('#hoursComponent' + id).text(Math.floor((distance % (day)) / (hour)));
            $('#minutesComponent' + id).text(Math.floor((distance % (hour)) / (minute)));
            $('#secondsComponent' + id).text(Math.floor((distance % (minute)) / second));
    
            //do something later when date is reached
            if (distance < 0) {
              $('#daysComponent' + id).text('-');
              $('#hoursComponent' + id).text('-');
              $('#minutesComponent' + id).text('-');
              $('#secondsComponent' + id).text('-');
              
              clearInterval(x);
            }
            //seconds
      }, 0)
    }());
  }

}
