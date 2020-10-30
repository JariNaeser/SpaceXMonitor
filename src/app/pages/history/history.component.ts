import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from 'src/app/services/historyService';
import { LaunchService } from 'src/app/services/launchService';

declare var $ :any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private history;
  private showLainchInfo = false;

  constructor(private historyService:HistoryService, private launchService: LaunchService, private router:Router) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory(){
    this.historyService.getHistory().subscribe(data => {
      //Success
      this.history = data;
    }, error => {
      //Error
    }); 
  }

  setLaunchInfo(launch){
    this.launchService.setLaunch(launch);
    this.router.navigate(['launch-info']);
  }

}
