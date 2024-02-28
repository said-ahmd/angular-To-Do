import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() task!: any;
  @Input() index!: number;

  @Output() indexOfTaskToDelete:EventEmitter<number>=new EventEmitter<number>();
  @Output() indexOfTaskToComplete:EventEmitter<number>=new EventEmitter<number>();
  @Output() indexOfTaskToEdit:EventEmitter<number>=new EventEmitter<number>();

  deleteTask() {
    this.indexOfTaskToDelete.emit(this.index);
  }

  CompleteTask() {
    this.indexOfTaskToComplete.emit(this.index);
  }

  editTaks() {
    this.indexOfTaskToEdit.emit(this.index)
  }
}
