import { Component, Input, OnInit } from '@angular/core';
import { CrewMemberService } from 'src/app/services/crewMemberService';

@Component({
  selector: 'app-crew-member',
  templateUrl: './crew-member.component.html',
  styleUrls: ['./crew-member.component.css']
})
export class CrewMemberComponent implements OnInit {

  @Input() crewMemberId:string;
  private memberData;

  constructor(private crewMemberService:CrewMemberService) { }

  ngOnInit(){
    this.crewMemberService.getCrewMemberData(this.crewMemberId).subscribe(data => {
      //Success
      this.memberData = data;
    }, error => {
      //Error
    }); 
  }

}
