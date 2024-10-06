import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeereferComponent } from './employeerefer.component';

describe('EmployeereferComponent', () => {
  let component: EmployeereferComponent;
  let fixture: ComponentFixture<EmployeereferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeereferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeereferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
