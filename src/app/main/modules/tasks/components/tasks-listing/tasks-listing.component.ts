import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../../../../shared/services/http/task/tasks.service'

@Component({
  selector: 'app-tasks-listing',
  templateUrl: './tasks-listing.component.html',
  styleUrls: ['./tasks-listing.component.css']
})
export class TasksListingComponent implements OnInit {

  constructor(private httpTasks:TasksService) { }
  title = 'List of Tasks'
  tasksData: any = []
  users:any = []
  selectedUser:any = -1
  selectedTask:any = -1

  ngOnInit(): void {
    this.getTasks()
  }


  getTasks(userId:any = -1,taskState:any = -1) {
    this.httpTasks.getTasks().subscribe((tasks:any)=>{
      this.tasksData = tasks
      console.log(this.tasksData)
      if(parseInt(userId) != -1){
        this.tasksData = this.tasksData.filter((task:any)=> task.userId == userId)
      }
      if([1,2].includes(parseInt(taskState))){
        this.tasksData = this.tasksData.filter((task:any)=> {
          return taskState == 1 ? task.completed : !task.completed
        })
      }

      if(this.users.length == 0)
      this.users = [...new Set(tasks.map((task:any) => task.userId))];
      })
  }

}
