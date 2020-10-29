import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) {}

    public getNextLaunch(){
        return this.http.get(environment.apiLink + "launches/next");
    }

}