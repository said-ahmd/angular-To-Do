import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToDoHeaderComponent} from "./to-do-header/to-do-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
