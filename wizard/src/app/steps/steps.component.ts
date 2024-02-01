import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { StepsService } from '../steps.service';
import { StepModel } from '../step.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStep!: StepModel;
  steps!: StepModel[];
  private unsubscribe = new Subject<void>();
  @Output()prevPage = new EventEmitter<number>();
  @Output() currenPage = new EventEmitter<number>();

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

  public onStepClick(step: number): void {
    if(step==0||(step && this.steps[step-1].isComplete==true)){
      this.prevPage.emit(this.currentStep.stepIndex-1);
      this.currentStep=this.steps[step];
      this.stepsService.setCurrentStep(this.currentStep);
      this.currenPage.emit(this.currentStep.stepIndex-1);
    }
  }
}
