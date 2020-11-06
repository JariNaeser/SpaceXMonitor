import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FutureEventsComponent } from './pages/future-events/future-events.component';
import { HistoryComponent } from './pages/history/history.component';
import { FailuresComponent } from './pages/failures/failures.component';
import { CompanyComponent } from './pages/company/company.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { LaunchInfoComponent } from './pages/launch-info/launch-info.component';
import { SafePipe } from './pipes/safePipe';
import { LaunchpadComponent } from './pages/launchpad/launchpad.component';
import { CrewMemberComponent } from './pages/crew-member/crew-member.component';
import { PayloadComponent } from './pages/payload/payload.component';
import { RecoveryShipComponent } from './pages/recovery-ship/recovery-ship.component';
import { RocketComponent } from './pages/rocket/rocket.component';
import { MilestonesComponent } from './pages/milestones/milestones.component';
import { FutureLaunchInfoComponent } from './pages/future-launch-info/future-launch-info.component';

const appRoutes: Routes = [
  {
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'milestones', 
    component: MilestonesComponent 
  },
  { 
    path: 'company', 
    component: CompanyComponent 
  },
  { 
    path: 'failures', 
    component: FailuresComponent 
  },
  { 
    path: 'future-events', 
    component: FutureEventsComponent 
  },
  { 
    path: 'history', 
    component: HistoryComponent 
  },
  { 
    path: 'launch-info', 
    component: LaunchInfoComponent 
  },
  {
    path: 'future-launch-info', 
    component: FutureLaunchInfoComponent 
  },
  {
    path: '**', 
    component: HomeComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FutureEventsComponent,
    HistoryComponent,
    FailuresComponent,
    CompanyComponent,
    NavbarComponent,
    LaunchInfoComponent,
    SafePipe,
    LaunchpadComponent,
    CrewMemberComponent,
    PayloadComponent,
    RecoveryShipComponent,
    RocketComponent,
    MilestonesComponent,
    FutureLaunchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
