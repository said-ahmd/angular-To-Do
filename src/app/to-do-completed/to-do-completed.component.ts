import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-to-do-completed',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './to-do-completed.component.html',
  styleUrl: './to-do-completed.component.css'
})
export class ToDoCompletedComponent {
  @Input() task!: any;
  @Input() index!: number;
  @Output() taskToResotre:EventEmitter<{ task:any, index:number }> = new EventEmitter<{ task: any, index: number }>();


  openAgain() {
    this.taskToResotre.emit({'task':this.task,'index':this.index})
  }
}
