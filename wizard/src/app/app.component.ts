import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { StepModel } from './step.model';
import { StepsService } from './steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'wizard';
  currentStep!: StepModel;
  steps!: StepModel[];
  private unsubscribe = new Subject<void>();

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.subscribeToDataAndCurrentStep();
  }

  ngAfterViewInit(): void {
    this.subscribeToDataAndCurrentStep();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private subscribeToDataAndCurrentStep(): void {
    this.stepsService.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.steps = data;
    });

    this.stepsService.getCurrentStep$().pipe(takeUntil(this.unsubscribe)).subscribe(step => {
      this.currentStep = step;
    });
  }

  public saveAndContinue(): void {
    this.steps[this.currentStep.stepIndex - 1].isComplete = true;
    if (this.currentStep.stepIndex == this.steps.length-1)
    this.steps[this.currentStep.stepIndex].isComplete = true;
    this.stepsService.setData(this.steps);

    this.currentStep = this.steps[this.currentStep.stepIndex];
    this.stepsService.setCurrentStep(this.currentStep);
  }

  public previous(): void {
    if (this.currentStep.stepIndex > 1) {
      this.currentStep = this.steps[this.currentStep.stepIndex - 2];
      this.stepsService.setCurrentStep(this.currentStep);
    }
  }

  // public skip(): void {
  //   this.currentStep = this.steps[this.currentStep.stepIndex];
  //   this.stepsService.setCurrentStep(this.currentStep);
  // }
}
