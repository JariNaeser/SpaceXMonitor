import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LaunchpadService {

    constructor(private http: HttpClient) {}

    public getLaunchpadInfo(id:string){
        return this.http.get(environment.apiLink + "launchpads/" + id);
    }

}