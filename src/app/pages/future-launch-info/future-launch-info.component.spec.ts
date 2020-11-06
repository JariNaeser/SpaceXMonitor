import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureLaunchInfoComponent } from './future-launch-info.component';

describe('FutureLaunchInfoComponent', () => {
  let component: FutureLaunchInfoComponent;
  let fixture: ComponentFixture<FutureLaunchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureLaunchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureLaunchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
