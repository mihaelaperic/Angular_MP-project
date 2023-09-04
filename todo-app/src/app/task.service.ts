// src/app/task.service.ts

import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  markTaskAsCompleted(taskId: number): void {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = true;
    }
  }

  
}
