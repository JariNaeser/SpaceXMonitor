import { Component, Input, OnInit } from '@angular/core';
import { RecoveryShipService } from 'src/app/services/recoveryShipService';

@Component({
  selector: 'app-recovery-ship',
  templateUrl: './recovery-ship.component.html',
  styleUrls: ['./recovery-ship.component.css']
})
export class RecoveryShipComponent implements OnInit {

  @Input() shipId:string;
  private recoveryShipInfo;

  constructor(private recoveryShipService:RecoveryShipService) { }

  ngOnInit() {
    this.recoveryShipService.getRecoveryShipInfo(this.shipId).subscribe(data => {
      //Success
      this.recoveryShipInfo = data;
    }, error => {
      //Error
    }); 
  }

}
