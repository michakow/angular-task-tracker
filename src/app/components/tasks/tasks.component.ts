import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((e) => e.id !== task.id);
    this.sortTasks();
  }

  toggleDoneTask(task: Task) {
    task.done = !task.done;
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) => a.done === b.done ? 0 : a.done ? 1 : -1);
  }

}
