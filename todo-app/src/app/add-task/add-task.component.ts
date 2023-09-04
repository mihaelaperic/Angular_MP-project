// src/app/add-task/add-task.component.ts

import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  task: Task = {
    id: Date.now(),
    title: '',
    dueDate: new Date(),
    completed: false
  };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    this.taskService.addTask(this.task);
    this.task = {
      id: Date.now(),
      title: '',
      dueDate: new Date(),
      completed: false
    };
  }
}
