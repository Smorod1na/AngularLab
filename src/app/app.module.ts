import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import {TaskItemComponent} from'./task-list/task-item/task-item.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddTaskComponent } from './task-list/add-task/add-task.component';
import { StudentComponent } from './student/student.component';
import { TaskList2Component } from './task-list2/task-list2.component';
import {TaskItem2Component} from'./task-list2/task-item2/task-item2.component';
import { TaskDoneListComponent } from './taskDone-list/taskDone-list.component';
import { TaskDoneItemComponent } from './taskDone-list/taskDone-item/taskDone-item.component';

@NgModule({
  declarations: [								
    AppComponent,
      HeaderComponent,
      TaskListComponent,
      TaskItemComponent,
      TeacherComponent,
      AddTaskComponent,
      StudentComponent,
      TaskList2Component,
      TaskItem2Component,
      TaskDoneListComponent,
      TaskDoneItemComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
