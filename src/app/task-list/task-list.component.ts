import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService:TaskService) { }

tasks:Task[];

  ngOnInit() {
    this.tasks=this.taskService.getAllTasks();
    this.taskService.refreshList.subscribe((tasks:Task[])=>{
      this.tasks=tasks;})
  }

}
