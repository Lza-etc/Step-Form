import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a button', () => {
    expect(component).toBeTruthy();
  });
});
