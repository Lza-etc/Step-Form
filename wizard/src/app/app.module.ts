import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { StepsService } from './steps.service';
import { TemplateComponent } from './template/template.component';
import { StepsComponent } from './steps/steps.component';
import { StepFormComponent } from './step-form/step-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TemplateComponent,
    StepsComponent,
    StepFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers:[
    StepsService
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
