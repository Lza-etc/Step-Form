import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { StepModel } from './step.model';
import { StepsService } from './steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'wizard';
  currentStep!: StepModel;
  steps!: StepModel[];
  private unsubscribe = new Subject<void>();

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.stepsService.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.steps = data;
    });

    this.stepsService.getCurrentStep$().pipe(takeUntil(this.unsubscribe)).subscribe(step => {
      this.currentStep = step;
    });
  }
  
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public saveAndContinue(): void {
    this.steps[this.currentStep.stepIndex-1].isComplete=true;
    this.stepsService.setData(this.steps);
    this.stepsService.setCurrentStep(this.steps[this.currentStep.stepIndex]);
  }

  public previous(): void{
    this.stepsService.setCurrentStep(this.steps[this.currentStep.stepIndex-2]);
    this.currentStep=this.steps[this.currentStep.stepIndex-1];
  }
}



