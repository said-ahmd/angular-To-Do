import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-to-do-completed',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './to-do-completed.component.html',
  styleUrl: './to-do-completed.component.css'
})
export class ToDoCompletedComponent {

  @Input() opendTasks:Array<any>=[];
  @Input() completedTasks: Array<any> = [];

  openAgain(task:any, index:number) {
    this.opendTasks.push(task);
    this.completedTasks.splice(index,1);
  }
}
