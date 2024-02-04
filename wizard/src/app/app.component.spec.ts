import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TemplateComponent } from './template/template.component';
import { StepsComponent } from './steps/steps.component';
import { StepFormComponent } from './step-form/step-form.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StepsService } from './steps.service';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ButtonComponent,
        TemplateComponent,
        StepsComponent,
        StepFormComponent,
      ],
      imports: [CommonModule],
      providers: [StepsService],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display template correctly', () => {
    component.currenPage = 0;
    fixture.detectChanges();
    var heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Step 1');

    component.currenPage = 1;
    fixture.detectChanges();
    heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Step 2');

    component.currenPage = 2;
    fixture.detectChanges();
    heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Step 3');

    component.currenPage = 3;
    fixture.detectChanges();
    heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Complete');
  });

  it('should display template correctly on clicking save and continue button', () => {
    component.currenPage = 0;
    component.saveAndContinue();
    fixture.detectChanges();
    var heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Step 2');

    component.currenPage = 1;
    component.saveAndContinue();
    fixture.detectChanges();
    var heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Step 3');

    component.currenPage = 2;
    component.saveAndContinue();
    fixture.detectChanges();
    var heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Complete');
  });

  it('should display template correctly on clicking previous button', () => {
    component.currenPage = 1;
    component.previous();
    console.log(component.currenPage);
    fixture.detectChanges();
    var heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Step 1');

    component.currenPage = 2;
    component.previous();
    console.log(component.currenPage);
    fixture.detectChanges();
    var heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Step 2');

    component.currenPage = 3;
    component.previous();
    console.log(component.currenPage);
    fixture.detectChanges();
    var heading = fixture.debugElement.nativeElement
      .querySelectorAll('app-template')
      [component.currenPage].querySelector('.heading')
      ?.textContent.trim();
    expect(heading).toContain('Step 3');
  });
});
