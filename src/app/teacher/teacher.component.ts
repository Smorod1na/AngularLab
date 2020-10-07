import { Component, OnInit } from '@angular/core';
import { AddTaskComponent } from '../task-list/add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
