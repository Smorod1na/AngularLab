import { Component, OnInit } from '@angular/core';
import { Task } from '../task-list/task.model';
import { TaskService } from '../task-list/task.service';

@Component({
  selector: 'app-task-list2',
  templateUrl: './task-list2.component.html',
  styleUrls: ['./task-list2.component.scss']
})
export class TaskList2Component implements OnInit {

  constructor(private taskService:TaskService) { }

  tasks:Task[];
  
    ngOnInit() {
      this.tasks=this.taskService.getTasksInWork();
      this.taskService.refreshList.subscribe((tasks:Task[])=>{
        this.tasks=tasks;})
    }

}
