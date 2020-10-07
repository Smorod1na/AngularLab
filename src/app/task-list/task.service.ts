import { EventEmitter, Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  refreshList=new EventEmitter<Task[]>();

  tasks:Task[]=[
    new Task(
"Task1",
"...",
"https://lh3.googleusercontent.com/lzYcyNuHnyYbHE_Aw2ArR4iTK5DKXZliygd_rmOhY1-TR8_qGQQE_9DM7YZDRdFqwSK99nULOBo=w640-h400-e365-rj-sc0x00ffffff",
"07.07.2017",false
),
new Task(
  "Task2",
  "...",
  "https://www.insidescience.org/sites/default/files/3_crop_ngc6338.jpg",
  "07.07.2018",false),
  new Task(
    "Task3",
    "...",
    "https://cdn.mos.cms.futurecdn.net/BxZtwv3rZMNSzTakHxKV2Q.jpg",
    "07.07.2019",false
   ),
    
  ];
constructor() { }

getAllTasks():Task[]{
  return this.tasks.filter((x)=>x.Done==false).slice();//тут передаєтсья апішка для фетч запиту
}
getAllDoneTasks():Task[]{
  return this.tasks.filter((x)=>x.Done==true).slice();
}
taskINWork:Task[]=[];

getTasksInWork():Task[]{
 
  // for(let i=0;i<this.tasks.length;i++)
  // {
  //   if(this.tasks[i].inWork===true)
  //   {
  //     this.taskINWork.push(this.tasks[i])
  //   }
  // } 
 this.taskINWork= this.tasks.filter((x)=>x.inWork==true)
//  this.refreshList.emit(this.taskINWork.slice())
  return this.taskINWork.slice();
}
addTask(newTask:Task){
  this.tasks.push(newTask)
  this.refreshList.emit(this.tasks.slice())
  }

  goTaskInWork(name:string){
    
    for(let i=0;i<this.tasks.length;i++)
    {
      if(this.tasks[i].name===name)
      {
        this.tasks[i].inWork=true
         this.refreshList.emit(this.tasks.slice())
      }
    } 
  }
  taskIsDone(name:string){
    for(let i=0;i<this.tasks.length;i++)
    {
      if(this.tasks[i].name===name)
      {
      let index= this.taskINWork.findIndex(x=>x.name==name)
        this.taskINWork.splice(index,1)
        this.tasks[i].inWork=false
        this.tasks[i].Done=true
        this.refreshList.emit(this.taskINWork.slice())
        // this.getTasksInWork();
      }
    } 
  }
}
