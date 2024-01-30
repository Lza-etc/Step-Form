import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { StepIconComponent } from './step-icon/step-icon.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { StepsService } from './steps.service';
import { TemplateComponent } from './template/template.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StepIconComponent
  ],
  providers:[
    StepsService
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
