import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetapplyComponent } from './timesheetapply.component';

describe('TimesheetapplyComponent', () => {
  let component: TimesheetapplyComponent;
  let fixture: ComponentFixture<TimesheetapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesheetapplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimesheetapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
