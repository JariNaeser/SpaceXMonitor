import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-launch-info',
  templateUrl: './launch-info.component.html',
  styleUrls: ['./launch-info.component.css']
})
export class LaunchInfoComponent implements OnInit {

  private launch;

  constructor(private activatedRoute: ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(launch => this.launch = launch)
  }

}
