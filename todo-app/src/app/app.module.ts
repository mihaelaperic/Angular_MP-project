// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import this

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
