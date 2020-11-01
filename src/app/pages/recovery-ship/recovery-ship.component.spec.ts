import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryShipComponent } from './recovery-ship.component';

describe('RecoveryShipComponent', () => {
  let component: RecoveryShipComponent;
  let fixture: ComponentFixture<RecoveryShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
