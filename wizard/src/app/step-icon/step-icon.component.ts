import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-step-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './step-icon.component.html',
  styleUrl: './step-icon.component.scss'
})
export class StepIconComponent {
  public onClickIcon(){
    console.log("click");
  }
}
