import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourshistoryComponent } from './hourshistory.component';

describe('HourshistoryComponent', () => {
  let component: HourshistoryComponent;
  let fixture: ComponentFixture<HourshistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourshistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
