import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToDoHeaderComponent} from "./to-do-header/to-do-header.component";
import {ToDoAddComponent} from "./to-do-add/to-do-add.component";
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {ToDoDeletedListComponent} from "./to-do-deleted-list/to-do-deleted-list.component";
import {NgIf} from "@angular/common";
import {ToDoCompletedComponent} from "./to-do-completed/to-do-completed.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoHeaderComponent, ToDoAddComponent, ToDoListComponent, ToDoDeletedListComponent, NgIf, ToDoCompletedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
  opendTasks:Array<any>=[];
  completedTasks: Array<any> = [];
  deletedTasks:Array<any>=[];

  isShowDeleted:boolean=false;
  isShowCompleted: boolean=false;

  showDeleted(isShowDeleted: boolean) {
    this.isShowDeleted=isShowDeleted;
  }
  showCompleted(isShowCompleted: boolean) {
    this.isShowCompleted=isShowCompleted;
  }
}
