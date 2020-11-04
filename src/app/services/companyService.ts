import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private http: HttpClient) {}

    public getCompanyInfo(){
        return this.http.get(environment.apiLink + "company");
    }

    public getHeadquartersCords(data:string){
        return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + data + ".json?limit=1&access_token=" + environment.mapbox.accessToken);
    }

}