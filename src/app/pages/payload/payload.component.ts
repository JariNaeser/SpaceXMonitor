import { Component, Input, OnInit } from '@angular/core';
import { PayloadService } from 'src/app/services/payloadService';

@Component({
  selector: 'app-payload',
  templateUrl: './payload.component.html',
  styleUrls: ['./payload.component.css']
})
export class PayloadComponent implements OnInit {

  @Input() payloadId:string;
  private payloadInfo;

  constructor(private payloadService:PayloadService) { }

  ngOnInit() {
    this.payloadService.getPayloadInfo(this.payloadId).subscribe(data => {
      //Success
      this.payloadInfo = data;
      console.log(this.payloadInfo);
    }, error => {
      //Error
    }); 
  }

}
