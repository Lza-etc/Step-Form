import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFormComponent } from './step-form.component';
import { CommonModule } from '@angular/common';

describe('StepFormComponent', () => {
  let component: StepFormComponent;
  let fixture: ComponentFixture<StepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepFormComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a step form', () => {
    expect(component).toBeTruthy();
  });
});
