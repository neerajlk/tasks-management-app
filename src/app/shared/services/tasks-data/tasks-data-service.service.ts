import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksDataServiceService {

  constructor() { }
  private Tasks = new BehaviorSubject([]);

  tasksList = this.Tasks.asObservable();

  getTasks() {
    return this.tasksList
  }

  addNewTask(tasks: any) {
      this.Tasks.next(tasks)
  }


}
