// import { Injectable, OnInit } from '@angular/core';
// import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
// import { StepModel } from './step.model';

// const STEPS = [
//   { stepIndex: 1, isComplete: false },
//   { stepIndex: 2, isComplete: false },
//   { stepIndex: 3, isComplete: false }
// ];

// @Injectable({
//   providedIn: 'root'
// })
// export class StepsService implements OnInit {

//   ngOnInit(): void { 
//     this.dataSubject.next(STEPS);
//     this.currentStep.next(STEPS[0]);
//   }
//   private dataSubject: ReplaySubject<StepModel[]> = new ReplaySubject<StepModel[]>;
//   private currentStep: ReplaySubject<StepModel> = new ReplaySubject<StepModel>;

//   setData(data: StepModel[]): void {
//     this.dataSubject.next(data);
//   }

//   getData$(): Observable<StepModel[]> {
//     return this.dataSubject.asObservable();
//   }

//   // steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
//   // currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(STEPS[0]);

//   // constructor() {
//   //   this.currentStep$.next(this.steps$.value[0]);
//   // }

//   // setCurrentStep(step: StepModel): void {
//   //   this.currentStep$.next(step);
//   // }

//   // getCurrentStep(): Observable<StepModel> {
//   //   return this.currentStep$.asObservable();
//   // }

//   // getSteps(): Observable<StepModel[]> {
//   //   return this.steps$.asObservable();
//   // }

//   // moveToNextStep(): void {
//   //   const index = this.currentStep$.value.stepIndex;

//   //   if (index < this.steps$.value.length) {
//   //     this.currentStep$.next(this.steps$.value[index]);
//   //   }
//   // }

//   // isLastStep(): boolean {
//   //   return this.currentStep$.value.stepIndex === this.steps$.value.length;
//   // }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from './step.model';

const STEPS = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false },
  { stepIndex: 4, isComplete: false }
];

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private stepsSubject: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  private currentStep: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(STEPS[0]);

  setData(data: StepModel[]): void {
    this.stepsSubject.next(data);
  }

  getData$(): Observable<StepModel[]> {
    return this.stepsSubject.asObservable();
  }

  getCurrentStep$(): Observable<StepModel> {
    return this.currentStep.asObservable();
  }

  setCurrentStep(step: StepModel): void {
    this.currentStep.next(step);
  }
}
