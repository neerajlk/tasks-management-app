import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TasksListingComponent} from './components/tasks-listing/tasks-listing.component';


const routes: Routes = [
    {
        path: '',
        component: TasksListingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  
  export class TasksRoutingModule { }