import { Component, OnInit } from '@angular/core';
import { Task } from '../task-list/task.model';
import { TaskService } from '../task-list/task.service';

@Component({
  selector: 'app-taskDone-list',
  templateUrl: './taskDone-list.component.html',
  styleUrls: ['./taskDone-list.component.css']
})
export class TaskDoneListComponent implements OnInit {

  constructor(private taskService:TaskService) { }
  tasks:Task[];
  ngOnInit() {
    this.tasks=this.taskService.getAllDoneTasks();
    this.taskService.refreshList.subscribe((tasks:Task[])=>{
      this.tasks=tasks;})
  }

}
