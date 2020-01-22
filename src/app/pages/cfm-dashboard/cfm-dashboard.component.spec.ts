import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfmDashboardComponent } from './cfm-dashboard.component';

describe('CfmDashboardComponent', () => {
  let component: CfmDashboardComponent;
  let fixture: ComponentFixture<CfmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfmDashboardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
