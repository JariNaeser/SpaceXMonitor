import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService';
import { HistoryService } from 'src/app/services/historyService';

declare var $ :any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private history;
  private launch;

  constructor(private historyService:HistoryService, private dataService: DataService) { }

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

  setLaunch(launch){
    this.dataService.currentMessage.subscribe(launch => launch = launch);
  }

}
