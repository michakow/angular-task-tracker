import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'task/:id', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
