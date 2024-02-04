// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Subject } from 'rxjs';
// import { StepsComponent } from './steps.component';
// import { StepsService } from '../steps.service';
// import { StepModel } from '../step.model';

// describe('StepsComponent', () => {
//   let component: StepsComponent;
//   let fixture: ComponentFixture<StepsComponent>;
//   let stepsServiceSpy: jasmine.SpyObj<StepsService>;

//   beforeEach(async () => {
//     const stepsServiceSpyObj = jasmine.createSpyObj('StepsService', ['getData$', 'getCurrentStep$', 'setCurrentStep']);

//     await TestBed.configureTestingModule({
//       declarations: [StepsComponent],
//       providers: [
//         { provide: StepsService, useValue: stepsServiceSpyObj }
//       ]
//     }).compileComponents();

//     stepsServiceSpy = TestBed.inject(StepsService) as jasmine.SpyObj<StepsService>;
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(StepsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     fixture.destroy();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should subscribe to data and current step on init', () => {
//     expect(stepsServiceSpy.getData$).toHaveBeenCalled();
//     expect(stepsServiceSpy.getCurrentStep$).toHaveBeenCalled();
//   });

//   it('should emit prevPage and currenPage events on step click', () => {
//     const stepIndex = 1;
//     const step: StepModel = { stepIndex: stepIndex, isComplete: true };
//     const prevPageIndex = stepIndex - 1;
//     const currentPageIndex = stepIndex;

//     component.currentStep = step;
//     component.steps = [step];
//     spyOn(component.prevPage, 'emit');
//     spyOn(component.currenPage, 'emit');

//     component.onStepClick(stepIndex);

//     expect(component.prevPage.emit).toHaveBeenCalledWith(prevPageIndex);
//     expect(component.currenPage.emit).toHaveBeenCalledWith(currentPageIndex);
//     expect(stepsServiceSpy.setCurrentStep).toHaveBeenCalledWith(step);
//   });

//   // it('should not emit prevPage and currenPage events on step click if previous step is incomplete', () => {
//   //   const stepIndex = 1;
//   //   const step: StepModel = { stepIndex: stepIndex, isComplete: false };
//   //   const prevPageIndex = stepIndex - 1;
//   //   const currentPageIndex = stepIndex;

//   //   component.currentStep = step;
//   //   component.steps = [step];
//   //   spyOn(component.prevPage, 'emit');
//   //   spyOn(component.currenPage, 'emit');

//   //   component.onStepClick(stepIndex);

//   //   expect(component.prevPage.emit).not.toHaveBeenCalled();
//   //   expect(component.currenPage.emit).not.toHaveBeenCalled();
//   //   expect(stepsServiceSpy.setCurrentStep).not.toHaveBeenCalled();
//   // });
// });
