import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/task-list/task.model';
import { TaskService } from 'src/app/task-list/task.service';

@Component({
  selector: 'app-taskDone-item',
  templateUrl: './taskDone-item.component.html',
  styleUrls: ['./taskDone-item.component.css']
})
export class TaskDoneItemComponent implements OnInit {
  @Input() currentTask:Task;
  @Input() index:number;
  constructor(private taskService:TaskService) { }
 states :boolean=false;
 Atach:number;
  ngOnInit() {
  }
  setAtach(event){
    if(event.target.value!="")
   { 
     this.states=true
    this.Atach=event.target.value;
console.log(event.target.value)}
this.taskService.refreshList.subscribe((tasks:Task)=>{
  this.currentTask=tasks;})
  }
}
