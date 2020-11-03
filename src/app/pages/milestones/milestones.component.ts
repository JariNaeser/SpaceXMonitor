import { Component, OnInit } from '@angular/core';
import { MilestonesService } from 'src/app/services/milestonesService';

@Component({
  selector: 'milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.css']
})
export class MilestonesComponent implements OnInit {

  private companyEvents;

  constructor(private milestonesService:MilestonesService) { }

  ngOnInit() {
    this.milestonesService.getCompanyEvents().subscribe(data => {
      //Success
      this.companyEvents = data;
      this.companyEvents.reverse();
    }, error => {
      //Error
    });
  }

}