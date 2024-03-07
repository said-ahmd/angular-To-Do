import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

  @Input() opendTasks:Array<any>=[];
  @Input() completedTasks: Array<any> = [];
  @Input() deletedTasks:Array<any>=[];



  deleteTask(number: number) {
    this.deletedTasks.push(this.opendTasks.at(number));
    this.opendTasks.splice(number,1);
  }

  completeTask(number: number) {
    this.completedTasks.push(this.opendTasks.at(number));
    this.opendTasks.splice(number,1);
  }

  editTaks(index:number) {
    this.opendTasks.splice(index,1);
  }

}
