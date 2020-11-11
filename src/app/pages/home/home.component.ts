import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { HomeService } from 'src/app/services/homeService';
import { LaunchService } from 'src/app/services/launchService';

declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService, private launchService:LaunchService, private router:Router) { }

  private nextLaunch;

  ngOnInit() {
    this.getNextlaunch();
  }

  getNextlaunch(){
    this.homeService.getNextLaunch().subscribe(data => {
      //Success
      this.nextLaunch = data;
      this.startCountdown(this.nextLaunch.date_utc);
    }, error => {
      //Error
      $('#countdown').text("Next event not found.");
    }); 
  }

  startCountdown(date){
    if(date != null){
      (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        let birthday = "Sep 30, 2021 00:00:00",
            countDown = new Date(date).getTime(),
            x = setInterval(function() {    
      
              let now = new Date().getTime(),
                  distance = countDown - now;

              $('#days').text(Math.floor(distance / (day)));
              $('#hours').text(Math.floor((distance % (day)) / (hour)));
              $('#minutes').text(Math.floor((distance % (hour)) / (minute)));
              $('#seconds').text(Math.floor((distance % (minute)) / second));
      
              //do something later when date is reached
              if (distance < 0) {
                $('#link').css('display', 'none');
                $('#days').text('-');
                $('#hours').text('-');
                $('#minutes').text('-');
                $('#seconds').text('-');
                
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());

    }else{
      $('#countdown').text("Next event not found.");
    }  
  }

  showNextLaunch(){
    this.launchService.setFutureLaunch(this.nextLaunch);
    this.router.navigate(['future-launch-info']);
  }

}
