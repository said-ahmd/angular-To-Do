import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ToDoListComponent} from "../to-do-list/to-do-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {ToDoDeletedListComponent} from "../to-do-deleted-list/to-do-deleted-list.component";
import {ToDoCompletedComponent} from "../to-do-completed/to-do-completed.component";

@Component({
  selector: 'app-to-do-header',
  standalone: true,
  imports: [
    FormsModule,
    ToDoListComponent,
    NgIf,
    NgForOf,
    ToDoDeletedListComponent,
    ToDoCompletedComponent
  ],
  templateUrl: './to-do-header.component.html',
  styleUrl: './to-do-header.component.css'
})
export class ToDoHeaderComponent {

  taskName!: String;
  creationTime: Date = new Date();
  opendTasks: Array<any> = [];
  completedTasks: Array<any> = [];
  deletedTasks:Array<any>=[];
  isAdded: boolean=false;
  isDeleted: boolean=false;
  isCompleted: boolean = false;



  deleteTask(number: number) {
    this.deletedTasks.push(this.opendTasks.at(number));
    this.opendTasks.splice(number,1);
  }

  addToOpenedTasks() {
    this.opendTasks.push({
      'creationTime': this.creationTime,
      'taskName': this.taskName
    });
    this.isAdded=true;

  }

  completeTask(number: number) {
    this.completedTasks.push(this.opendTasks.at(number));
    this.opendTasks.splice(number,1);
  }

  taskToResotreFromDeleted(eventData:{task: any, index:number}) {
    this.opendTasks.push(eventData.task);
    this.deletedTasks.splice(eventData.index,1);
    if (this.deletedTasks.length==0){
      this.isDeleted=false;
    }
  }

  getDeletedTasks() {
    this.isDeleted=true;
  }

  getCompletedTasks() {
    this.isCompleted=true;
  }

  taskToRestoreFromCompleted(eventData: {task: any; index: number}) {
    this.opendTasks.push(eventData.task);
    this.completedTasks.splice(eventData.index,1);
    if (this.completedTasks.length==0){
      this.isCompleted=false;
    }
  }


}
