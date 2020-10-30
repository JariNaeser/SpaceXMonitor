import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchService } from 'src/app/services/launchService';

@Component({
  selector: 'app-launch-info',
  templateUrl: './launch-info.component.html',
  styleUrls: ['./launch-info.component.css']
})
export class LaunchInfoComponent implements OnInit {

  private launch;
  private youtubeUrl;

  constructor(private activatedRoute: ActivatedRoute, private launchService:LaunchService) { }

  ngOnInit() {
    this.launchService.getLaunch().subscribe(data => {
      //Success
      this.launch = data;
      console.log(this.launch);
    }, error => {
      //Error
    }); 

    this.youtubeUrl = 'https://www.youtube.com/embed/' + this.launch.links.youtube_id;
  }

}
