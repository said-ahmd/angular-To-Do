import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-to-do-deleted-list',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './to-do-deleted-list.component.html',
  styleUrl: './to-do-deleted-list.component.css'
})
export class ToDoDeletedListComponent {

  @Input() task!: any;
  @Input() index!: number;

  @Output()
  taskToResotre: EventEmitter<any>=new EventEmitter<any>();

  restore() {
    this.taskToResotre.emit({'task': this.task, 'index': this.index});
  }
}
