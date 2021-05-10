import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTodosComponent } from './generate-todos.component';

describe('GenerateTodosComponent', () => {
  let component: GenerateTodosComponent;
  let fixture: ComponentFixture<GenerateTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
