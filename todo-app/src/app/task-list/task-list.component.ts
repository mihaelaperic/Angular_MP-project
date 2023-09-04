// src/app/task-list/task-list.component.ts

import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  removeTask(taskId: number): void {
    this.taskService.removeTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  markTaskAsCompleted(taskId: number): void {
    this.taskService.markTaskAsCompleted(taskId);
    this.tasks = this.taskService.getTasks();
  }
}
