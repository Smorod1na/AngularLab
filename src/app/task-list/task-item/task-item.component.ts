import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() currentTask:Task;
  @Input() index:number;
  constructor(private taskService:TaskService) { }
  goInWork(name:string){
   
  
      this.taskService.goTaskInWork(name);
  }
  ngOnInit() {
  }

}
