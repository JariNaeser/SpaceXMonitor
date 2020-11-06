import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FutureEventsService {

    constructor(private http: HttpClient) {}

    public getFutureEvents(){
        return this.http.get(environment.apiLink + "launches/upcoming");
    }

}