import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/task-list/task.model';
import { TaskService } from 'src/app/task-list/task.service';

@Component({
  selector: 'app-task-item2',
  templateUrl: './task-item2.component.html',
  styleUrls: ['./task-item2.component.scss']
})
export class TaskItem2Component implements OnInit {

  @Input() currentTask:Task;
  @Input() index:number;
  
  constructor(private taskService:TaskService) { }

doThis(name:string){
  this.taskService.taskIsDone(name);
  // this.taskService.refreshList.subscribe((task:Task)=>{
  //   this.currentTask=task;})
}
  ngOnInit() {
  }

}
