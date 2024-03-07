import {Component, input, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-to-do-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './to-do-add.component.html',
  styleUrl: './to-do-add.component.css'
})
export class ToDoAddComponent {
  taskName!: String;
  creationTime: Date = new Date();
  @Input() opendTasks:Array<any>=[];

  addToOpenedTasks() {
    this.opendTasks.push({
      'creationTime': this.creationTime,
      'taskName': this.taskName
    });
    console.log(this.opendTasks)
  }
}
