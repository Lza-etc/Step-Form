import { TestBed } from '@angular/core/testing';
import { StepsService } from './steps.service';
import { StepModel } from './step.model';

describe('StepsService', () => {
  let service: StepsService;
  const testData: StepModel[] = [
    { stepIndex: 1, isComplete: true },
    { stepIndex: 2, isComplete: false },
    { stepIndex: 3, isComplete: false },
    { stepIndex: 4, isComplete: false },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set steps data', () => {
    service.setData(testData);
    service.getData$().subscribe((step) => expect(step).toEqual(testData));
  });
  it('should set current steps data', () => {
    service.setCurrentStep(testData[0]);
    service
      .getCurrentStep$()
      .subscribe((step) => expect(step).toEqual(testData[0]));
  });
});
