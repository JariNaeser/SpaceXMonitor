import { environment } from '../../environments/environment';
import { of, Observable, Observer, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LaunchService {

    private launch = [];  
    private futureLaunch = [];    

    constructor() {}

    getLaunch(): Observable<any>{
        return of(this.launch);
    }

    getFutureLaunch(): Observable<any>{
        return of(this.futureLaunch);
    }

    setLaunch(launch :any[]){
        this.launch = launch;
        localStorage.setItem("launch", JSON.stringify(launch));
    }

    setFutureLaunch(futureLaunch :any[]){
        this.futureLaunch = futureLaunch;
        localStorage.setItem("futureLaunch", JSON.stringify(futureLaunch));
    }

}