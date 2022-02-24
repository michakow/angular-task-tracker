import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = TASKS;

  constructor() { }

  getTasks(): Task[] {
    this.sortTasks();
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.sortTasks();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((e) => e.id !== task.id);
    this.sortTasks();
  }

  toggleDoneTask(task: Task): void {
    task.done = !task.done;

    const date = new Date();
    const month = date.getMonth() < 9 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
    const day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
    const today = date.getFullYear()+'-'+month+'-'+day;

    task.completion = task.done ? today : '';

    this.sortTasks();
  }

  private sortTasks(): void {
    this.tasks = this.tasks.sort((a: Task, b: Task) => a.done === b.done ? 0 : a.done ? 1 : -1);
  }
}
