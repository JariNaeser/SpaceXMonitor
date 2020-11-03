import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MilestonesService {

    constructor(private http: HttpClient) {}

    public getCompanyEvents(){
        return this.http.get(environment.apiLink + "history");
    }

}