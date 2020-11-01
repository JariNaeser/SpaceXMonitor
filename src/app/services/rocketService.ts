import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RocketService {

    constructor(private http: HttpClient) {}

    public getRocketData(id){
        return this.http.get(environment.apiLink + "rockets/" + id);
    }

}