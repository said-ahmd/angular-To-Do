import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ToDoListComponent} from "../to-do-list/to-do-list.component";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ToDoDeletedListComponent} from "../to-do-deleted-list/to-do-deleted-list.component";
// import {ToDoCompletedComponent} from "../to-do-completed/to-do-completed.component";
import {ToDoAddComponent} from "../to-do-add/to-do-add.component";

@Component({
  selector: 'app-to-do-header',
  standalone: true,
  imports: [
    FormsModule,
    ToDoListComponent,
    NgIf,
    NgForOf,
    ToDoDeletedListComponent,
    // ToDoCompletedComponent,
    ToDoAddComponent,
    DatePipe
  ],
  templateUrl: './to-do-header.component.html',
  styleUrl: './to-do-header.component.css'
})
export class ToDoHeaderComponent {

  @Input() opendTasks: Array<any>=[];
  @Input() completedTasks: Array<any> = [];
  @Input() deletedTasks: Array<any>=[];

  @Output()showDeleted: EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output()showCompleted: EventEmitter<boolean>=new EventEmitter<boolean>();

  getDeletedTasks() {
    if (this.deletedTasks.length>0){
      this.showDeleted.emit(true);
    }
    else{
      this.showDeleted.emit(false);
    }

  }
  //
  getCompletedTasks() {
    this.showCompleted.emit(true);
    if (this.completedTasks.length==0){
      this.showCompleted.emit(false);
    }
  }
}
