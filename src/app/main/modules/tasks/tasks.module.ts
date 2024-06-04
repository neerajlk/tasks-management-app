import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module'


import {TasksRoutingModule} from './tasks.routing.module'
import { TasksListingComponent } from './components/tasks-listing/tasks-listing.component';



@NgModule({
  declarations: [
    TasksListingComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TasksModule { }
