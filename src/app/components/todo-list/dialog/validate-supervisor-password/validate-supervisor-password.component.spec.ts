import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateSupervisorPasswordComponent } from './validate-supervisor-password.component';

describe('ValidateSupervisorPasswordComponent', () => {
  let component: ValidateSupervisorPasswordComponent;
  let fixture: ComponentFixture<ValidateSupervisorPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateSupervisorPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateSupervisorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
