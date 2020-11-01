import { Component, Input, OnInit } from '@angular/core';
import { RocketService } from 'src/app/services/rocketService';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  @Input() rocketId:string;
  private rocketData;

  constructor(private rocketService:RocketService) { }

  ngOnInit() {
    this.rocketService.getRocketData(this.rocketId).subscribe(data => {
      //Success
      this.rocketData = data;
      console.log(this.rocketData);
    }, error => {
      //Error
    }); 
  }

}
