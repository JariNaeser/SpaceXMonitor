import { environment } from '../../environments/environment';
import { of, Observable, Observer, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LaunchService {

    private launch = [];    

    constructor() {}

    getLaunch(): Observable<any>{
        return of(this.launch);
    }

    setLaunch(launch :any[]){
        this.launch = launch;
    }

}