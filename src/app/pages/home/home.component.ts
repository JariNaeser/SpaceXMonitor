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
      //Countdown
      var countDownDate = new Date(date).getTime();

      var x = setInterval(function() {
          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          $('#countdown').text(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

          // If the count down is finished, write some text
          if (distance < 0) {
              clearInterval(x);
              $('#countdown').text("EXPIRED");
          }
      }, 1000);
    }else{
      $('#countdown').text("Next event not found.");
    }  
  }

  showNextLaunch(){
    this.launchService.setFutureLaunch(this.nextLaunch);
    this.router.navigate(['future-launch-info']);
  }

}
