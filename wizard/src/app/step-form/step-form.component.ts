import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { TemplateComponent } from '../template/template.component';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrl: './step-form.component.scss',
})
export class StepFormComponent implements OnChanges {
  @ContentChildren(TemplateComponent) stepss!: QueryList<TemplateComponent>;
  @Input() currenPage: number = 0;
  @Input() prevPage: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currenPage'] && this.stepss && this.stepss.length > 0) {
      console.log(this.prevPage, this.currenPage);
      this.stepss.toArray()[this.prevPage].active = false;
      this.stepss.toArray()[this.currenPage].active = true;
    }
  }
}
