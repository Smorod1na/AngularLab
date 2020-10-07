import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  newTitle:string;
  newDescription:string;
  newDate:string;
  newImage_Url:string;

sendNewTask(){
  const event=new Task(this.newTitle,this.newDescription,
    this.newImage_Url,this.newDate,false);

    this.taskService.addTask(event);
}




  ngOnInit() {
  }

}
