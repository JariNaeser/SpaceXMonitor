import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecoveryShipService {

    constructor(private http: HttpClient) {}

    public getRecoveryShipInfo(id){
        return this.http.get(environment.apiLink + "ships/" + id);
    }

}