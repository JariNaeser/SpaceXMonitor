import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor(private http: HttpClient) {}

    public getHistory(){
        return this.http.get(environment.apiLink + "launches/past");
    }

}