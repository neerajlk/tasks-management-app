import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Services
import { TasksService } from './services/http/task/tasks.service'
import { TasksDataServiceService } from './services/tasks-data/tasks-data-service.service'


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [TasksService, TasksDataServiceService]
})
export class SharedModule { }

