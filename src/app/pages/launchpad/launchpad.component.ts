import { Component, Input, OnInit } from '@angular/core';
import { LaunchpadService } from 'src/app/services/launchPadService';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {

  @Input() launchpadId:string;
  private launchpadInfo;

  constructor(private launchpadService:LaunchpadService) { }

  ngOnInit(){
    this.launchpadService.getLaunchpadInfo(this.launchpadId).subscribe(data => {
      //Success
      this.launchpadInfo = data;
    }, error => {
      //Error
    }); 
  }

}
