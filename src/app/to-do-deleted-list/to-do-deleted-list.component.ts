import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-to-do-deleted-list',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './to-do-deleted-list.component.html',
  styleUrl: './to-do-deleted-list.component.css'
})
export class ToDoDeletedListComponent {


  @Input() opendTasks:Array<any>=[];
  @Input() deletedTasks: Array<any>=[];

  restore(task:any, index:number) {
    this.opendTasks.push(task);
    this.deletedTasks.splice(index,1);
  }
}
